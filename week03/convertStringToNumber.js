function convertStringToNumber(string, x = 10) {
  const chars =
    Object.prototype.toString.call(string) === "[object Array]"
      ? string
      : string.split("");
  let number = 0;
  let i = 0;
  // 处理整数部分
  while (i < chars.length && chars[i] !== "." && chars[i] !== "e") {
    number = number * x; // x:进制,
    const realValue = chars[i].codePointAt(0) - 48;
    if (realValue < x) {
      number += realValue; // 48为数字0在unicode中的编码
    } else {
      throw "string不满足进制x";
    }
    i++;
  }
  if (chars[i] === ".") {
    i++;
    // 处理小数部分
    let decimal = 1;
    while (i < chars.length && chars[i] !== "e") {
      decimal = decimal / x;
      const realValue = chars[i].codePointAt(0) - 48;
      if (realValue < x) {
        number += (chars[i].codePointAt(0) - 48) * decimal;
      } else {
        throw "string不满足进制x";
      }

      i++;
    }
  }

  if (chars[i] === "e") {
    if (x !== 10) throw "科学计数法只能为10进制";
    i++;
    let exponent = 0; // 处理指数
    exponent = convertStringToNumber(chars.slice(i, chars.length));
    number = number * Math.pow(10, exponent);
  }
  return number;
}
console.log(convertStringToNumber("1110110001", 2)); //945
console.log(convertStringToNumber("3.5587")); // 3.5587
console.log(convertStringToNumber("10e3")); // 10000
console.log(convertStringToNumber("10e2.5")); // 3162.277660168379
console.log(convertStringToNumber("10.5e3.5")); // 33203.915431767986
console.log(convertStringToNumber("10.1e1", 2)); // error "科学计数法只能为10进制"
