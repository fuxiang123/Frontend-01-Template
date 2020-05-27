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

  // 获取父元素序列，有两种方法(这里用的是第一种)
  // 方法1：通过parent属性去查找
  // 方法2：直接遍历元素栈，因为栈顶元素之下的元素都是它的父元素

  for (let rule of rules) {
    // 把规则里面选择器拆分成单独的选项
    const selectorParts = rule.selectors.split(" ").revers();

    // 看选择器的第一项能否匹配当前元素
    if (!match(element, selectorParts[0])) {
      continue;
    }

    // 如果可以，就继续循环匹配父元素
    let matched = true;
    for (let i = 1, el = element.parent; i < selectorParts.length; i++) {
      if (match(el, selectorParts[i])) {
        el = el.parent;
      } else {
        matched = false;
        break;
      }
    }
    // 如果每一项都能匹配成功，就把这个rule加入到element里面
    if (matched) {
    }
  }
}

function match(element, selector) {
  if(!element || !element.attributes)
}

module.exports = { addCssRules, computeCss };
