class findA {
  constructor(str) {
    this.FINDA = 0;
    this.FINDB = 1;
    this.current = findA;
    this.str = str;
    this.index = 0;
    this.isfound = false;
  }

  start() {
    if (this.current === findA) {
      if (this.str[index] === "a") {
        this.current = this.FINDB;
      }
    } else if (this.current === findB) {
      while (index < this.str.length) {
        if (this.str[index] === "a") {
          this.current = this.FINDB;
        }
      }
    }
  }
}
const aa = "saasacra";