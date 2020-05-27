const net = require("net");
const parser = require("./parser");

class Request {
  // method, url = host + port + path;
  // body: k/v
  // header 必须字段：Content-Type,Content-Length
  constructor(options) {
    this.method = options.method || "GET";
    this.host = options.host;
    this.port = options.port || 80;
    this.path = options.path || "/";
    this.body = options.body || {};
    this.headers = options.headers || {};
    if (!this.headers["Contet-Type"]) {
      this.headers["Contet-Type"] = "application/x-www-form-urlencoded";
    }

    if (this.headers["Contet-Type"] === "text/json") {
      this.bodyText = JSON.stringify(this.body);
    } else if (
      this.headers["Contet-Type"] === "application/x-www-form-urlencoded"
    ) {
      this.bodyText = Object.keys(this.body)
        .map((key) => `${key}=${encodeURIComponent(this.body[key])}`)
        .join("&");
    }

    this.headers["Contet-Length"] = this.bodyText.length;
  }

  toString() {
    return `${this.method} ${this.path} HTTP/1.1\r\n${Object.keys(this.headers)
      .map((key) => `${key}: ${this.headers[key]}`)
      .join("\r\n")}\r\n\r\n${this.bodyText}`;
  }
  open(method, url) {}
  send(connection) {
    const parser = new ResponseParse();
    return new Promise((resolve, reject) => {
      if (connection) {
        connection.write(this.toString());
      } else {
        connection = net.createConnection(
          {
            host: this.host,
            port: this.port,
          },
          () => {
            connection.write(this.toString());
          }
        );
      }

      connection.on("data", (data) => {
        parser.receive(data.toString());
        if (parser.isFinished) {
          resolve(parser.response);
        }

        connection.end();
      });

      connection.on("error", (error) => {
        reject(error);
        connection.end();
      });
    });
  }
}

class Response {}

class ResponseParse {
  constructor() {
    this.WAITING_STATUS_LINE = 0; // 等待状态行 HTTP/1.1 200 OK
    this.WAITING_STATUS_LINE_END = 1; // 等待第一行后面跟着的换行符/r/n

    this.WAITING_HEADER_NAME = 2; // 处理headers
    this.WAITING_HEADER_SPACE = 3;
    this.WAITING_HEADER_VALUE = 4;
    this.WAITING_HEADER_LINE_END = 5; // 等待第一行后面跟着的换行符/r/n

    this.WAITING_HEADER_BLOCK_END = 6; // 空行，表示header已经结束

    this.WAITING_BODY = 7;

    this.current = this.WAITING_STATUS_LINE;
    this.statusLine = "";
    this.headers = {};
    this.headerName = "";
    this.headerValue = "";
    this.body = null;
    this.bodyParser = null;
  }

  receive(string) {
    for (let i = 0; i < string.length; i++) {
      this.receiveChar(string.charAt(i));
    }
  }

  get isFinished() {
    return this.bodyParser && this.bodyParser.isFinished;
  }

  get response() {
    this.statusLine.match(/^HTTP\/1\.1 ([1-5]\d{2}) (\w+)/);
    return {
      statusCode: RegExp.$1,
      statusTxet: RegExp.$2,
      headers: this.headers,
      body: this.bodyParser.content.join(""),
    };
  }
  receiveChar(char) {
    // 处理status line
    if (this.current === this.WAITING_STATUS_LINE) {
      if (char === "\r") {
        this.current = this.WAITING_STATUS_LINE_END;
      } else {
        this.statusLine += char;
      }
    } else if (this.current === this.WAITING_STATUS_LINE_END) {
      if (char === "\n") {
        this.current = this.WAITING_HEADER_NAME;
      }
    } else if (this.current === this.WAITING_HEADER_NAME) {
      if (char === ":") {
        this.current = this.WAITING_HEADER_SPACE;
      } else if (char === "\r") {
        //如果在waiting head name时就遇到了\r，说明后面没有header了
        this.current = this.WAITING_HEADER_BLOCK_END;
      } else {
        this.headerName += char;
      }
    } else if (this.current === this.WAITING_HEADER_SPACE) {
      if (char === " ") {
        this.current = this.WAITING_HEADER_VALUE;
      }
    } else if (this.current === this.WAITING_HEADER_VALUE) {
      if (char === "\r") {
        this.current = this.WAITING_HEADER_LINE_END;
        this.headers[this.headerName] = this.headerValue;
        this.headerValue = "";
        this.headerName = "";
      } else {
        this.headerValue += char;
      }
      // if (char === "\n") {
      //   this.current = this.WAITING_HEADER_BLOCK_END;
      // }
    } else if (this.current === this.WAITING_HEADER_LINE_END) {
      if (char === "\n") {
        this.current = this.WAITING_HEADER_NAME;
      }
    } else if (this.current === this.WAITING_HEADER_BLOCK_END) {
      if (char === "\n") {
        this.current = this.WAITING_BODY;
        if (this.headers["Transfer-Encoding"] === "chunked") {
          this.bodyParser = new ChunkedBodyParser();
        }
      }
    } else if (this.current === this.WAITING_BODY) {
      this.bodyParser.receiveChar(char);
    }
  }
}
// 解析body
/**
 * body格式：
 * 20 --表示body长度
 *  bodyText --body正文
 * 0
 */
class ChunkedBodyParser {
  constructor() {
    this.READING_LENGTH = 1;
    this.READING_LENGTH_END = 2;
    this.READING_TRUNK = 3;
    this.WAITING_NEW_LINE = 4;
    this.WAITING_NEW_LINE_END = 5;
    // this.READING_TRUNK_END = 6;
    // this.BODY_BLOCK_END = 5;

    this.current = this.READING_LENGTH;
    this.content = [];
    this.isFinished = false;
    this.length = 0;
  }
  receiveChar(char) {
    if (this.current === this.READING_LENGTH) {
      if (char === "\r") {
        //如果是/r说明下一个要接受/n准备换行
        //如果换行了还没有接收到表示body长度的字符，说明没有body
        if (this.length === 0) {
          this.isFinished = true;
        }
        this.current = this.READING_LENGTH_END;
      } else {
        //如果不是表示现在接收的是表示body长度的字符
        this.length *= 16;
        this.length += parseInt(char, 16); // 计算出body长度
      }
    } else if (this.current === this.READING_LENGTH_END) {
      if (char === "\n") {
        this.current = this.READING_TRUNK;
      }
    } else if (this.current === this.READING_TRUNK) {
      this.content.push(char);
      this.length--;
      if (this.length === 0) {
        this.current = this.READING_TRUNK_END;
        this.isFinished = true;
      }
    } else if (this.current === this.READING_TRUNK_END) {
      if (char === "\n") {
        this.current = this.WAITING_LENGTH;
      }
    }
  }
}

void (async function () {
  const req = new Request({
    method: "GET",
    host: "127.0.0.1",
    port: "8088",
    path: "/",
    headers: {
      ["X-Foo2"]: "customed",
    },
    body: {
      name: "fuxiang",
    },
  });
  const response = await req.send();
  parser.parseHTML(response);
})();

// const client = net.createConnection(
//   {
//     host: "127.0.0.1",
//     port: 8088,
//   },
//   () => {
//     console.log("connecte to server");

//     const req = new Request({
//       method: "GET",
//       host: "127.0.0.1",
//       port: "8088",
//       path: "/",
//       body: {
//         name: "fuxiang",
//       },
//     });
//     client.write(req.toString());
//   }
// );

// client.on("data", (data) => {
//   console.log(data.toString());
//   client.end();
// });

// client.on("end", (data) => {
//   console.log("disconnected from server");
// });
