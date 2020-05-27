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

  // 获取父元素序列，有两种方法
  // 方法1：通过parent属性去查找
  // 方法2：直接遍历元素栈，因为栈顶元素之下的元素都是它的父元素
  // 这里选用第一种方法
  while (element.parent) {}

  // div div #img这样的选择器，一定是从后往前匹配更好

  for (let rule of rules) {
    // 把规则里面选择器拆分成单独的选项
    const selectorParts = rule.selectors.split(" ").revers();

    // 看选择器的第一项能否匹配当前元素
    if (!match(element, selectorParts[0])) {
      continue;
    }
  }
}

module.exports = { addCssRules, computeCss };
