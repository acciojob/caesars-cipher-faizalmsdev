const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedString) {
  let decodedString = "";

  for (let i = 0; i < encodedString.length; i++) {
    const character = encodedString[i];
    const decodedCharacter = lookup[character];

    if (decodedCharacter) {
      decodedString += decodedCharacter;
    } else {
      decodedString += character;
    }
  }

  return decodedString;
}

