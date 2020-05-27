const addCssRules = require("./addCssRules").addCssRules;
const EOF = Symbol("EOF"); // EOF - end of file
let currentToken = {};
let currentAttribute = {};
let currentTextNode = {};

let stack = [{ type: "document", children: [] }];

function emit(token) {
  // console.log(token);
  let top = stack[stack.length - 1];

  if (token.type === "startTag") {
    let element = {
      type: "element",
      children: [],
      attribute: [],
    };
    element.tagName = token.tagName;

    for (const p in token) {
      if (p !== "type" || p !== "tagName") {
        element.attribute.push({
          name: p,
          value: token[p],
        });
      }
    }
    // 对元素对应的css进行计算
    computeCss(element);

    top.children.push(element);
    if (!token.isSelfClosing) {
      // 因为被关闭的标签会自动出栈，所以新加入的未关闭标签必然会是栈顶元素的子元素
      stack.push(element);
    }
    element.parent = top;

    currentTextNode = null;
  } else if (token.type === "endTag") {
    if (top.tagName !== token.tagName) {
      throw "Tag start end doesn't match";
    } else {
      // 遇到css规则的时候，执行添加css规则的操作
      if (top.tagName === "style") {
        addCssRules(top.children[0].content);
      }
      stack.pop(); //出栈
    }
    currentTextNode = null;
  } else if (token.type === "text") {
    if (currentTextNode === null) {
      currentTextNode = {
        type: "text",
        content: "",
      };
      top.children.push(currentTextNode);
    }
    currentTextNode.content += token.content; // 拼接
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
    return unexpectedCharacterError(c, "tagOpen");
  }
}

function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: "endTag",
      tagName: "",
    };
    return tagName(c);
  } else {
    return unexpectedCharacterError(c, "endTagOpen");
  }
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
    currentToken.tagName += c;
    return tagName;
  }
}

// 等待attributeName
function beforeAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    //如果是空格就忽略
    return beforeAttributeName;
  } else if (c === "/" || c === ">" || c === EOF) {
    return afterQuotedAttributeName(c);
  } else if (c === "=") {
    throw "tagName后不应该直接出现等号";
  } else {
    currentAttribute = {
      name: "",
      value: "",
    };
    return attributeName(c);
  }
}

// 接收attributeName
function attributeName(c) {
  if (c.match(/^[\t\n\f ]$/) || c === "/" || c === ">" || c === EOF) {
    return afterQuotedAttributeName(c);
  } else if (c === "=") {
    return beforeAttributeValue;
  } else if (c === '"' || c === "'" || c === "<") {
    return unexpectedCharacterError(c);
  } else {
    currentAttribute.name += c;
    return attributeName;
  }
}
// 等待属性值
function beforeAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return afterQuotedAttributeName;
  } else if (c === '"') {
    return doubleQuotedAttributeValue;
  } else if (c === "'") {
    return singleQuotedAttributeValue;
  } else if (c === "<") {
    return unexpectedCharacterError(c, "beforeAttributeValue");
  } else {
    return unquotedAttributeValue(c);
  }
}

// 处理不带引号的属性值
function unquotedAttributeValue(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return unquotedAttributeValue;
  } else if (c === ">") {
    currentToken[currentAttribute.name] = currentAttribute.value;
    emit(currentToken);
    return data;
  } else if (
    c === null ||
    c === '"' ||
    c === "'" ||
    c === "<" ||
    c === "=" ||
    c === "`" ||
    c === EOF
  ) {
    return unexpectedCharacterError(c, unexpectedCharacterError);
  } else {
    currentAttribute.value += c;
    return unquotedAttributeValue;
  }
}

// 处理带双引号的属性值
function doubleQuotedAttributeValue(c) {
  if (c === '"') {
    return afterQuotedAttributeName;
  } else if (c === null || c === EOF) {
    return unexpectedCharacterError(c, doubleQuotedAttributeValue);
  } else {
    currentAttribute.value += c;
    return doubleQuotedAttributeValue;
  }
}

// 处理带单引号的属性
function singleQuotedAttributeValue(c) {
  if (c === "'") {
    return afterQuotedAttributeName;
  } else if (c === null || c === EOF) {
    return unexpectedCharacterError(c, "doubleQuotedAttributeValue");
  } else {
    currentAttribute.value += c;
    return singleQuotedAttributeValue;
  }
}

function afterQuotedAttributeName(c) {
  if (c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName;
  } else if (c === "/") {
    return selfClosingStartTag;
  } else if (c === ">") {
    currentToken[currentAttribute.name] = currentAttribute.value;
    emit(currentToken);
    return data;
  } else if (c === EOF) {
    return unexpectedCharacterError(c);
  } else {
    return unexpectedCharacterError(c, "afterQuotedAttributeName");
  }
}

function selfClosingStartTag(c) {
  if (c === ">") {
    currentToken.isSelfClosing = true;
    return data;
  } else if (c === EOF) {
    emit(EOF);
  } else {
    return unexpectedCharacterError(c, "selfClosingStartTag");
  }
}

function unexpectedCharacterError(c, stateName) {
  throw "unexpected character:" + c + "in" + stateName;
}

module.exports.parseHTML = function parseHTML(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF); // 标识文件结尾
  return stack[0];
};
