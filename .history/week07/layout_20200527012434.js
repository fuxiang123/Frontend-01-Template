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
  // 这里暂时不处理flex以外的样式
  if (elementStyle.display !== "flex") {
    return;
  }
  // 过滤文本节点
  var items = element.children.filter((e) => e.type === "element");
  items.sort((a, b) => (a.order || 0) - (b.order || 0));

  var style = elementStyle;

  ["width", "height"].forEach((size) => {
    if (style[size] === "auto" || style[size] === "") {
      style[size] = null;
    }
  });

  if (!style. flexDirection川styLe. flexDirection =s= 'auto')
style. flexDirection = ' row';
if (!style. alignItems | style.alignItems === 'auto')
style.alignItems = ' stretch';
if ( !style. justifyContent川style. justifyContent === 'auto' )
style. justifyContent = 'flex-start';
if (!style. flexWrap II style.flexWrap === 'auto')
style. flekWrap = 'nowrap' ;
if (!style. alignContent川style. alignContent === 'auto')
style. alignContent = 'stretch';

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
