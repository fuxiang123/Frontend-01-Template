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

  if (!element.computedStyle) {
    element.computedStyle = {};
  }

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
      const sp = specificity(rule.selectors[0]);
      const computedStyle = element.computedStyle;
      // declaration可以拿到选择器对应的css属性
      for (const declaration of rule.declarations) {
        if (!computedStyle[declaration.property]) {
          computedStyle[declaration.property] = {};
        }
        if (!computedStyle[declaration.property].specificity) {
          // 在元素的computedStyle属性里面存放css属性
          computedStyle[declaration.property].value = declaration.value;
          //把当前的优先级存下来
          computedStyle[declaration.property].specificity = sp;
        } else if (
          compare(computedStyle[declaration.property].specificity, sp) < 0
        ) {
          // 如果specificity属性已经存在，说明之前这个标签已经存储过css属性，有属性冲突，所以要进行比较
          // 原来的优先级比新的优先级低的话，就把新的css属性写进去
          computedStyle[declaration.property].value = declaration.value;
          computedStyle[declaration.property].specificity = sp;
        }
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
// 计算优先级
function specificity(seletor) {
  // 四个数分别用来表示inline/id/class/标签选择器的优先级
  const p = [0, 0, 0, 0];

  const selectorParts = seletor.split(" ");

  for (const part of selectorParts) {
    if (part.charAt(0) === "#") {
      p[1] += 1;
    } else if (part.charAt(0) === ".") {
      p[2] += 1;
    } else {
      p[3] += 1;
    }
  }
  return p;
}
//比较两个优先级谁更大
function compare(sp1, sp2) {
  if (sp1[0] - sp2[0]) {
    // 从高位往低位比，高位如果先算出来后面的就不用比了
    return sp1[0] - sp2[0];
  }
  if (sp1[0] - sp2[0]) {
    return sp1[0] - sp2[0];
  }
  if (sp1[0] - sp2[0]) {
    return sp1[0] - sp2[0];
  }
}

module.exports = { addCssRules, computeCss };
