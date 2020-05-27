class findA {
  constructor(str) {
    this.FINDA = 0;
    this.FINDB = 1;
    this.current = findA;
    this.str = str;
    this.isfound = false;
  }

  start() {
    if (this.current === findA) {
      if (this.str[index] === "a") {
        this.current = this.FINDB;
      }
    } else if (this.current === findB) {
      if (this.str[index] === "b") {
        this.isfound = true;
      } else {
        this.current = this.FINDA;
      }
    }
  }
}
const aa = "saasacra";
