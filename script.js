function rot13(str) {
  var decoded = "";
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters (A-Z)
      decoded += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters (a-z)
      decoded += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      // Non-alphabetic characters
      decoded += str.charAt(i);
    }
  }
  return decoded;
}

function decode() {
  var input = document.getElementById("input").value;
  var output = rot13(input);
  document.getElementById("output").value = output;
}