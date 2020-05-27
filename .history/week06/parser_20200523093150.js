const EOF = Symbol("EOF"); // EOF - end of file
let currentToken = {};
let currentAttribute = {};
function emit(token) {
  if (token.tagName) {
    console.log(token);
  }
}

// 初始状态
function data(c) {
  if (c === "<") {
    return tagOpen;
  } else if (c === EOF) {
    emit({
      type: "EOF",
    });
    return;
  } else {
    emit({
      type: "text",
      content: c,
    });
    return data;
  }
}

function tagOpen(c) {
  if (c === "/") {
    return endTagOpen;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: "startTag",
      tagName: "",
    };
    return tagName(c);
  } else {
    return;
  }
}

function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: "endTag",
      tagName: "",
    };
    emit(currentToken);
    return tagName(c);
  }
  return data;
}

function tagName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c === "/") {
    return selfClosingStartTag;
  } else if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    return tagName;
  } else if (c === ">") {
    emit(currentToken);
    return data;
  } else {
    return tagName;
  }
}

// 等待attributeName
function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    //如果是空格，说明一直在等待一个AttributeName
    return beforeAttributeName;
  } else if (c === "/" || c === ">" || c === EOF) {
    return afterAttributeName;
  } else if (C === "=") {
    throw "tagName后不应该直接出现等号";
  } else {
    currentAttribute = {
      name: "",
      value: "",
    };
    return attributeName;
  }
}

// 接收attributeName
function attributeName(c) {
  
if (c.match(/^[\t\n\f ]$/) || c === "/" || c === ">" || c === EOF) {
  return afterAttributeName;
}

function afterAttributeName(c) {}

function selfClosingStartTag(params) {
  if (c === ">") {
    currentToken.isSelfClosing = true;
    return data;
  } else if (c === "EOF") {
  } else {





  }
}

module.exports.parseHTML = function parseHTML(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF); // 标识文件结尾
};
