function match(str) {
  let state = start;
  for (let i = 0; i < str.length; i++) {
    let newState = state(str[i]);
    state = newState;
  }
  return state === end;
}

const start = function (char) {
  foundA(char);
};

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
