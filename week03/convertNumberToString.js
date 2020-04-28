function convertNumberToString(number, x = 10) {
  let integer = Math.floor(number); // 整数部分
  let decimal = number - integer;
  let string = "";
  while (integer > 0) {
    string = (integer % x) + string; // 通过取余，可以获得所需数字的最后一位
    integer = Math.floor(integer / x);
  }
  if (decimal !== 0) {
    string += ".";
  }
  while (decimal > 0) {
    const intDecimal = Math.floor(decimal * x);
    console.log(1, intDecimal, string, decimal);
    string += intDecimal; // 通过取余，可以获得所需数字的最后一位
    decimal = decimal * x - intDecimal;
    console.log(2, intDecimal, string, decimal);
  }
  return string;
}
console.log(convertNumberToString(100e10));
