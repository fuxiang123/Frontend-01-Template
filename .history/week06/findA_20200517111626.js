class Find {
  constructor() {
    this.FINDA = 0;
    this.FINDB = 1;
    this.current = findA;
    this.isfound = false;
  }

  start(char) {
    if (this.current === findA) {
      if (char === "a") {
        this.current = this.FINDB;
      }
    } else if (this.current === findB) {
      if (char === "b") {
        this.isfound = true;
      } else {
        this.current = this.FINDA;
      }
    }
  }
}
const aa = "saasacra";

const findab = new find();
for (let i = 0; i < aa.length; i++) {
  const element = aa[i];
  findab.start(element);
}
