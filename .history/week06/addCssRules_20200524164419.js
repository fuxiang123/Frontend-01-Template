const css = require("css");
let rules = [];

function addCssRules(text) {
  var ast = css.parse(text);
  console.log(JSON.stringify(ast, null, "     "));
  rules.push(...ast.stylesheet.rules);
}

function computeCss(element) {
  console.log(rules);
  console.log("computeCss", element);

  // 获取父元素序列
  // 方法1：通过parent属性去查找
  // 方法2：直接遍历元素栈，取得父元素
}

module.exports = { addCssRules, computeCss };
