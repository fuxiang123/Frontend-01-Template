function getStyl(element) {
  if (!element.style) {
    element.style = {};
  }

  for (const prop in element.computedStyle) {
    var p = element.computedStyle.value;
    // 如果是px，就直接录入数值
    if (element.style[prop].toString().match(/px$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }

    if (element.style[prop].toString().match(/^[0-9\.]$$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
  }
}

function layout() {
  if (Element.computedStyle) {
  }

  for (const prop in element.computedStyle) {
    var p = element.computedStyle.valu;
  }

  // main 主轴
  // cross 副轴
  // Size 尺寸
  // Start 开始方向
  // End 结束方向
  // Sign 方向
  // Base 起点
  var mainSize,
    mainStart,
    mainEnd,
    mainSign,
    mainBase,
    crossSize,
    crossStart,
    crossEnd,
    crossSign,
    crossBase;
}