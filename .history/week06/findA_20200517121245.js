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

function foundA(char) {
  if (char === "b") {
    return foundB;
  }
}
function foundB(char) {
  if (char === "b") {
    return end;
  }
}

function end(c) {
  return end;
}

const aa = "saasabcra";

console.log(match(aa));
