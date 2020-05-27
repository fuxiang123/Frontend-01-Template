function getStyl(element) {
  if (!element.style) {
    element.style = {};
  }

  for (const prop in element.computedStyle) {
    var p = element.computedStyle.value;
    // 如果单位是px，就直接录入数值
    if (element.style[prop].toString().match(/px$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
    // 有其他单位也是类似的处理方法

    if (element.style[prop].toString().match(/^[0-9\.]$$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
  }
}

function layout(element) {
  if (element.computedStyle) {
    return;
  }

  var elementStyle = getStyle(element);

  if (elementStyle.display !== "flex") {
    return;
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
