function match(str) {
  let state = start;
  console.log("state", state);
  for (let i = 0; i < str.length; i++) {
    console.log("state", state);

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
