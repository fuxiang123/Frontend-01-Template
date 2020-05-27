function match(str) {
  let state = start;
  for (let i = 0; i < str.length; i++) {
    const newState = state(str[i]);
    state = newState;
  }
}

function start(char) {
  if (char === "a") {
    this.current = this.FINDB;
  }
}

function foundB(char) {
  if (char === b) {
    return;
  }
}

const aa = "saasabcra";

console.log(findab.isfound);
