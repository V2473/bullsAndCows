function bullsAndCows(generatedNumber, enteredNumber) {
  const acceptedLength = 4;

  for (const argument of arguments) {
    if (!(Number.isInteger(+argument) && argument.length === acceptedLength)) {
      throw new Error('Should be 4 different digits');
    }

    const items = {};

    for (const item of argument) {
      if (!items[item]) {
        items[item] = 0;
      }
      items[item] += 1;
    }

    for (const item in items) {
      if (items[item] > 1) {
        throw new Error('Should be 4 different digits');
      }
    }
  }

  const result = {
    bulls: 0,
    cows: 0,
  };

  for (let i = 0; i < acceptedLength; i++) {
    if (generatedNumber[i] === enteredNumber[i]) {
      result.bulls++;
    }

    for (let j = 0; j < acceptedLength; j++) {
      if (generatedNumber[i] === enteredNumber[j] && i !== j) {
        result.cows++;
      }
    }
  }

  return result;
}

module.exports = bullsAndCows;
