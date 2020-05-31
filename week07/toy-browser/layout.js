function getStyle(element) {
  if (!element.style) {
    element.style = {};
  }

  for (var prop in element.computedStyle) {
    var p = element.computedStyle.value;
    element.style[prop] = element.computedStyle[prop].value;
    // 如果单位是px，就直接录入数值
    if (element.style[prop].toString().match(/px$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
    // 有其他单位也是类似的处理方法

    if (element.style[prop].toString().match(/^[0-9\.]$$/)) {
      element.style[prop] = parseInt(element.style[prop]);
    }
  }

  return element.style;
}

function layout(element) {
  if (!element.computedStyle) {
    return;
  }
  // 给元素创style属性，在里面放入css属性,然后返回该style对象
  // 同时把元素的长度单位如px/rem等，转化为具体的数值
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
  if (!style.flexDirection || style.flexDirection == "auto")
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
  // Size 尺寸. 当flexDirection为row的时候，mainSize就是元素的宽度
  // Start 开始方向
  // End 结束方向
  // Base 布局在容器中的起点位置（从左往右，base就是0，从右往左，base就等于元素宽度；当前面排了一个宽度为5的子元素时，sign就相应地增加5，新加入的子元素会从5的位置开始布局）
  // Sign 用来标记布局的方向，base起点从0开始，sign就是+1;base起点从元素末尾开始，sign就是-1
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
  // 自适应父元素容器
  var isAutoMainSize = false;
  // 如果父元素没有设置以上的属性，就要自动处理mainSize
  // 把所有子元素的主轴长度加起来，得到该元素的尺寸
  if (!style[mainSize]) {
    elementStyle[mainSize] = 0;
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemStyle = getStyle(item);
      // 把子元素的mainSize一个个加起来就是父元素的mainSize了
      if (itemStyle[mainSize] !== null || itemStyle[mainSize] !== void 0) {
        elementStyle[mainSize] = elementStyle[mainSize] + itemStyle[mainSize];
      }
    }
    isAutoMainSize = true;
  }

  /**
   * 给flex布局分配行：把元素收集进flexLine里面
   * 根据主轴尺寸，把元素分进行
   * 若设置了no-wrap,则强行分配进第一行
   */
  // 创建行
  var flexLine = [];
  // 换行后可能有多行，把所有行都放进一个统一的数组
  var flexLines = [flexLine];
  // 主轴的剩余空间
  var mainSpace = elementStyle[mainSize];
  // 交叉轴的剩余空间
  var crossSpace = 0;

  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    // 获得该children的style属性
    var itemStyle = getStyle(item);
    // 元素没有设主轴尺寸，就给个默认值0
    if (!itemStyle[mainSize]) {
      itemStyle[mainSize] = 0;
    }

    // 如果子元素有flex属性，意味着可伸缩，无论flexLine剩多少都一定能放进去
    if (itemStyle.flex) {
      flexLine.push(item);
      // 如果设置了nowrap，就把子元素都塞到一行里面
    } else if (style.flexWrap === "nowrap" && isAutoMainSize) {
      // 当一个子元素被塞入一行时，mianSpace应该减去对应的空间
      mainSpace -= itemStyle[mainSize];
      // 交叉轴的空间由交叉轴长度最大的子元素决定
      if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== void 0) {
        crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
      }
      flexLine.push(item);
    } else {
      // 如果子元素的mainSize父元素的大，就把两者设置得一致
      if (itemStyle[mainSize > style[mainSize]]) {
        itemStyle[mainSize] = style[mainSize];
      }
      // 如果父元素的mainSpace（主轴剩余空间）不够装下子元素了
      if (mainSpace < itemStyle[mainSize]) {
        // 把当前flexLine的mainSpace和crossSpace存起来
        flexLine.mainSpace = mainSpace;
        flexLine.crossSpace = crossSpace;
        // 创建一个新的flexLine并存起来
        flexLine = [item];
        flexLines.push(flexLine);
        // 重置mainSpace和crossSpce
        mainSpace = style[mainSpace];
        crossSpace = 0;
      } else {
        // 放得下就直接push进当前行
        flexLine.push(item);
      }
      // 和上面进行一样的操作
      if (itemStyle[crossSize] !== null && itemStyle[crossSize] !== void 0) {
        crossSpace = Math.max(crossSpace, itemStyle[crossSize]);
      }
      mainSpace -= itemStyle[mainSize];
    }
  }

  flexLine.mainSpace = mainSpace;

  /**
   * 计算主轴方向
   * 找出所有Flex元素
   * 把主轴方向的剩余尺寸按比例分配给这些元素
   * 若剩余空间为负数，所有flex元素为0，会等比压缩剩余元素
   *
   * 没有flex元素的情况下，就按照justifyContent去分配元素
   */
  // 如果设置了不换行，或者自动调整主轴宽度的情况下
  if (style.flexWrap === "nowrap" || isAutoMainSize) {
    // 设置flexLine的交叉轴跟父元素交叉轴一致
    flexLine.crossSpace =
      style[crossSize] !== undefined ? style[crossSize] : crossSpace;
  } else {
    // 否则由交叉轴最长的子元素决定
    flexLine.crossSpace = crossSpace;
  }
  // mainSpace为负，这种情况只会发生单行的情况下（设置了noWrap）
  if (mainSpace < 0) {
    // 算出缩放值 = 目标值（父元素宽度）/实际值（父元素宽度减去剩余空间，当剩余空间mianSpace为负时，等于加上超出的空间）
    var scale = style[mainSize] / (style[mainSize] - mainSpace);
    // 当前的mainBasee
    var currentMainBase = mainBase;

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemStyle = getStyle(item);

      if (itemStyle.flex) {
        itemStyle[mainSize] = 0;
      }
      // 子元素尺寸按照父元素缩放比例等比缩放
      itemStyle[mainSize] = itemStyle[mainSize] * scale;
      // 新进来的子元素的start即为mainBase
      itemStyle[mainStart] = currentMainBase;
      // 元素的结束位置 = 元素的开始位置加上元素的尺寸
      itemStyle[mainEnd] =
        itemStyle[mainStart] + mainSign * itemStyle[mainSize];
      // 一个子元素排布完毕后，当前的mianBase就设置为这个元素的mainEnd,新加入的子元素就从这个位置排起
      currentMainBase = itemStyle[mainEnd];
    }
  } else {
    // 如果mainSpace不是负数，表示要处理多行情况
    flexLines.forEach(function (items) {
      var mainSpace = items.mainSpace;
      var flexTotal = 0;

      // 收集子元素的flex的值，并加到flexTotal上边
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemStyle = getStyle(item);

        if (itemStyle.flex !== null && itemStyle.flex !== void 0) {
          flexTotal += itemStyle.flex;
          // continue;
        }
      }

      // 如果flexTotal有值，说明存在设置了flex的元素
      if (flexTotal > 0) {
        var currentMainBase = mainBase;
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          var itemStyle = getStyle(item);

          if (item.flex) {
            // 通过flex值计算出元素的size
            // 用父元素先减去拥有固定长度的子元素，剩余的空间再按flex分配即可
            itemStyle[mainSize] = (mainSpace / flexTotal) * itemStyle.flex;
          }

          // 新进来的子元素的start即为mainBase
          itemStyle[mainStart] = currentMainBase;
          // 元素的结束位置 = 元素的开始位置加上元素的尺寸
          itemStyle[mainEnd] =
            itemStyle[mainStart] + mainSign * itemStyle[mainSize];
          // 一个子元素排布完毕后，当前的mianBase就设置为这个元素的mainEnd,新加入的子元素就从这个位置排起
          currentMainBase = itemStyle[mainEnd];
        }
      } else {
        // 处理没有设置flex属性的情况
        if (style.justifyContent === "flex-start") {
          var currentMainBase = mainBase;
          var step = 0;
        }

        if (style.justifyContent === "flex-end") {
          var currentMainBase = mainSpace * mainSign + mainBase;
          var step = 0;
        }
        if (style.justifyContent === "center") {
          var currentMainBase = (mainBase / 2) * mainSign + mainBase;
          var step = 0;
        }
        // space-between 要把剩余空间均匀分布在元素之间
        if (style.justifyContent === "space-between") {
          // step表示元素的间距
          var step = (mainSpace / (items.length - 1)) * mainSign;
          var currentMainBase = mainBase;
        }
        if (style.justifyContent === "space-around") {
          var step = (mainSpace / items.length) * mainSign;
          // 父元素开头和末尾的空间等于两个元素之间空间的一半。所以所以要加上step/2
          var currentMainBase = step / 2 + mainBase;
        }

        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          itemStyle[mainStart] = currentMainBase;
          itemStyle[mainEnd] =
            itemStyle[mainStart] + mainSign * itemStyle[mainSize];
          currentMainBase = itemStyle[mainEnd] + step;
        }
      }
    });
  }

  /**
   * 计算交叉轴
   * 根据每一行中最大元素尺寸计算行高
   * 根据行高flex- align和item-align,确定元素具体位置
   */
  // 计算交叉轴的剩余空间
  var crossSpace;
  if (!style[crossSize]) {
    crossSpace = 0;
    elementStyle[crossSize] = 0;
    // 如果父元素没有设置crossSize,将每一行的crossSpace加起来即可
    for (let i = 0; i < flexLines.length; i++) {
      elementStyle[crossSize] += flexLines[i].crossSpace;
    }
  } else {
    // 如果设置了，就依次减去每一行的crossSpace即可
    crossSpace = style[crossSize];
    for (let i = 0; i < flexLines.length; i++) {
      crossSpace -= flexLines[i].crossSpace;
    }
  }

  // 换行倒转，把交叉轴的起点置于交叉轴的底部，也就是与交叉轴长度相同的位置
  if (style.flexWrap === "wrap-reverse") {
    crossBase = style[crossSize];
  } else {
    crossBase = 0;
  }
  // 如果父元素设置了crossSize，计算出交叉轴每一行的平均长度
  var lineSize = style[crossSize] / flexLines.length;

  // 计算交叉轴的base和step,这里处理方法和主轴类似
  var step;
  if (style.alignContent === "flex-start") {
    crossBase += 0;
    var step = 0;
  }

  if (style.alignContent === "flex-end") {
    crossBase += crossSpace * crossSign;
    step = 0;
  }
  if (style.alignContent === "center") {
    crossBase += (crossSpace / 2) * crossSign;
    step = 0;
  }
  if (style.alignContent === "space-between") {
    step = crossSpace / (flexLines.length - 1);
    crossBase += 0;
  }
  if (style.alignContent === "space-around") {
    step = mainSpace / flexLines.length;
    crossBase += (step / 2) * crossSign;
  }

  if (style.alignContent === "stretch") {
    crossBase += 0;
    step = 0;
  }
  // 计算元素的开始和结束位置
  flexLines.forEach(function (items) {
    // 计算当前行的高度。alignContent为stretch（默认值），还需要把剩余空间给每行均匀分配
    var lineCrossSize =
      style.alignContent === "stretch"
        ? items.crossSpace + crossSpace / flexLine.length
        : items.crossSpace;

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemStyle = getStyle(item);

      const align = itemStyle.alignSelf || style.alignItems;
      if (item === null) {
        itemStyle[crossSize] = align === "stretch" ? lineCrossSize : 0;
      }

      if (align === "flex-start") {
        // 开始位置为起始点crossBase
        itemStyle[crossStart] = crossBase;
        // 结束位置为crossBase + 元素高度
        itemStyle[crossEnd] =
          itemStyle[crossStart] + itemStyle[crossSize] * crossSign;
      }

      if (align === "flex-end") {
        // 开始位置为起始点crossBase + 元素高度（因为是在父元素末尾开始排布的）
        itemStyle[crossEnd] = crossBase + crossSign * lineCrossSize;
        // 结束位置为起始位置 + 元素高度
        itemStyle[crossStart] =
          itemStyle[crossEnd] - crossSign * itemStyle[crossSize];
      }

      if (align === "center") {
        itemStyle[crossStart] = crossBase;
        // 结束位置为起始位置 + 元素高度
        itemStyle[crossEnd] =
          crossBase +
          crossSign *
            (itemStyle[crossSize] !== null && itemStyle[crossSize] !== void 0
              ? itemStyle[crossSize]
              : lineCrossSize);
      }

      if (align === "stretch") {
        itemStyle[crossStart] = crossBase;
        itemStyle[crossEnd] =
          crossBase +
          crossSign *
            (itemStyle[crossSize] !== null && itemStyle[crossSize] !== void 0
              ? itemStyle[crossSize]
              : lineCrossSize);
        // stretch会改变行高，让每行的高度加起来填满整个轴线
        itemStyle[crossSize] =
          crossSign * (itemStyle[crossEnd] - itemStyle[crossStart]);
      }
    }
    // 计算完每一行后，重置crossBase
    crossBase += crossSign * (lineCrossSize + step);
  });

  console.log(items);
}

module.exports = layout;
