const css = require("css");
let rules = [];

function addCssRules(text) {
  var ast = css.parse(text);
  JSON.stringify(ast, null, "     ");
  rules.push(...ast.stylesheet.rules);
}

function computeCss(element) {
  // 匹配css选择器，先匹配当前元素，再匹配父元素。查找父元素有两种方法(这里用的是第一种)
  // 方法1：通过parent属性去查找
  // 方法2：直接遍历元素栈，因为栈顶元素之下的元素都是它的父元素

  for (let rule of rules) {
    // 把规则里面选择器拆分成单独的选项

    const selectorParts = rule.selectors[0].split(" ").reverse();

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
      const computedStyle = element.computedStyle;
      // declaration可以拿到选择器对应的css属性
      for (const declaration of rule.declarations) {
        if (!computedStyle[declaration.property]) {
          computedStyle[declaration.property] = {};
        }
        // 在元素的computedStyle属性里面存放css属性
        computedStyle[declaration.property].value = declaration.value;
      }
    }
  }
}

function match(element, selector) {
  if (!element || !element.attributes) {
    return false;
  }

  // 处理id选择器
  if (selector.charAt(0) === "#") {
    // 找到id属性
    const attr = element.attributes.filter((attr) => attr.name === "id");
    // 判断id的值与选择器是否匹配
    if (attr && attr.value === selector.replace("#", "")) return true;
  } else if (selector.charAt(0) === ".") {
    // 处理class选择器
    // 找到id属性
    const attr = element.attributes.filter((attr) => attr.name === "class");
    // 判断id的值与选择器是否匹配
    if (attr && attr.value === selector.replace(".", "")) return true;
  } else {
    // 标签选择器
    if (element.tagName === selector) {
      return true;
    }
  }

  return false;
}

module.exports = { addCssRules, computeCss };
