function match(selector, element) {
  return true;
}

// 作业：某个元素是否匹配选择器
match("div #id.class", document.getElementById("id"));
