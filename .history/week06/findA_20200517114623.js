function match(str) {
  let state = start;
  for (let i = 0; i < str.length; i++) {
    const newState = state(str[i]);
    state = newState;
  }
}

function start(char) {
  if (char === "a") {
    return foundB;
  }
}

function foundB(char) {
  if (char === ) {
    return;
  }
}

function end(c) {
  return end;
}

const aa = "saasabcra";

console.log(findab.isfound);
