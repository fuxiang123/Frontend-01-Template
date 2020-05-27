function match(str) {
  let state = start;
  for (let i = 0; i < str.length; i++) {
    const newState = state(str[i]);
    state = newState;
  }
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

  foundB(char){
    if(char === b){
      return 
    }
  }
}
const aa = "saasabcra";

const findab = new Find();
for (let i = 0; i < aa.length; i++) {
  const element = aa[i];
  findab.start(element);
}

console.log(findab.isfound);
