const repeatString = function (word, repeater) {
  let finalWord = "";
  if (repeater >= 0) {
    for (let i = 0; i < repeater; i++) {
      finalWord += word;
    }
    return finalWord;
  }
  return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
