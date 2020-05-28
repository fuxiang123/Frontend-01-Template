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

  // 把元素的长度单位如px/rem等，转化为具体的数值
  var elementStyle = getStyle(element);
  // 这里暂时不处理flex以外的样式
  if (elementStyle.display !== "flex") {
    return;
  }
  // 取出该元素所有children,并过滤文本节点
  var items = element.children.filter((e) => e.type === "element");
  items.sort((a, b) => (a.order || 0) - (b.order || 0));

  var style = elementStyle;

  ["width", "height"].forEach((size) => {
    if (style[size] === "auto" || style[size] === "") {
      style[size] = null;
    }
  });

  // 给一些flex属性设置默认值
  if (!style.flexDirection || styLe.flexDirection == "auto")
    style.flexDirection = "row";
  if (!style.alignItems || style.alignItems === "auto")
    style.alignItems = "stretch";
  if (!style.justifyContent || style.justifyContent === "auto")
    style.justifyContent = "flex-start";
  if (!style.flexWrap || style.flexWrap === "auto") style.flexWrap = "nowrap";
  if (!style.alignContent || style.alignContent === "auto")
    style.alignContent = "stretch";

  // main 主轴
  // cross 副轴
  // Size 尺寸
  // Start 开始方向
  // End 结束方向
  // Sign 布局在容器中的排布方向（从左往右，就是把在base的基础上加数值；从右往左，就是在base的基础上减数值）
  // Base 布局在容器中的起点位置（从左往右，base就是0，从右往左，base就等于元素宽度）
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

  if (style.flexDirection === "row") {
    mainSize = "width";
    mainStart = "left";
    mainEnd = "right";
    mainSign = +1;
    mainBase = 0;

    crossSize = "height";
    crossStart = "top";
    crossEnd = "bottom";
  }
  if (style.flexDirection === "row-reverse") {
    mainSize = "width";
    mainStart = "right";
    mainEnd = "left";
    mainSign = -1;
    mainBase = style.width;

    crossSize = "height";
    crossStart = "top";
    crossStart = "bottom";
  }

  if (style.flexDirection === "column") {
    mainSize = "height";
    mainStart = "top";
    mainEnd = "bottom";
    mainSign = +1;
    mainBase = 0;

    crossSize = "width";
    crossStart = "left";
    crossEnd = "right";
  }

  if (style.flexDirection === "column-reverse") {
    mainSize = "height";
    mainStart = "bottom";
    mainEnd = "top";
    mainSign = -1;
    mainBase = style.height;

    crossSize = "width";
    crossStart = "left";
    crossEnd = "right";
  }

  if (style.flexWrap === "wrap-reverse") {
    // 换行被反转，就把副轴的起点和终点换一下
    var tmp = crossStart;
    crossStart = crossEnd;
    crossEnd = tmp;
    crossSign = -1;
  } else {
    crossBase = 0;
    crossSign = +1;
  }

  var isAutoMainSize = false;
  // 把所有子元素的主轴长度加起来，得到该元素的尺寸
  if (!style[mainSize]) {
    elementStyle[mainSize] = 0;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (itemStyle[mainSize] !== null || itemStyle[mainSize] !== void 0) {
        elementStyle[mainSize] = elementStyle[mainSize] + itemStyle[mainSize];
      }
    }
    isAutoMainSize = true;
  }

  // 创建行
  var flexLine = [];
  var flexLines = [flexLine];
  // 主轴的剩余空间
  var mainSpace = elementStyle[mainSize];
  // 交叉轴的剩余空间
  var crossSpace = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
  }
}

module.exports = layout;
