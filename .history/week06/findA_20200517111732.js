class Find {
  constructor() {
    this.FINDA = 0;
    this.FINDB = 1;
    this.current = this.FINDA;
    this.isfound = false;
  }

  start(char) {
    if (this.current === this.FINDA) {
      if (char === "a") {
        this.current = this.FINDB;
      }
    } else if (this.current === this.FINDB) {
      if (char === "b") {
        this.isfound = true;
      } else {
        this.current = this.FINDA;
      }
    }
  }
}
const aa = "saasacra";

const findab = new Find();
for (let i = 0; i < aa.length; i++) {
  const element = aa[i];
  findab.start(element);
}

console.log(findab.isfound);
