const sumAll = function (initialNumber, finalNumber) {
  let finalSum = 0;

  if (
    initialNumber >= 0 &&
    finalNumber >= 0 &&
    typeof initialNumber === "number" &&
    typeof finalNumber === "number"
  ) {
    if (initialNumber < finalNumber) {
      for (let i = initialNumber; i <= finalNumber; i++) {
        finalSum += i;
      }
    } else {
      for (let i = finalNumber; i <= initialNumber; i++) {
        finalSum += i;
      }
    }
    return finalSum;
  }

  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
