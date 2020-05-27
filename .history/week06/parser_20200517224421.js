const EOF = Symbol("EOF"); // EOF - end of file

// 初始状态
function data(c) {
  if (c === "<") {
    return tagOpen;
  } else if (c === EOF) {
    return;
  } else {
    return data;
  }
}

function tagOpen(c) {
  if (c === "/") {
  }
}

function tagOpen(c) {}

module.exports.parseHTML = function parseHTML(html) {
  console.log(html);
  let state = data;
  for (let c of html) {
    state = state(c);
  }
  state = state(EOF); // 标识文件结尾
};
