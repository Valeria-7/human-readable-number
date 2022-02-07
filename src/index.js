module.exports = function toReadable (number) {
  const onesArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const elevenToNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';

  if (number == 0) {
    return 'zero';
  }

  if (number < 10) {
    return onesArray[number - 1];
  }

  if (number < 20 && number != 10) {
    return elevenToNineteen[(number % 10) - 1];
  }

  if (number < 100) {
    if (number % 10 == 0) {
      return tensArray[(number / 10) - 1];
    }
    result = tensArray[Math.trunc(number / 10) - 1] + ' ' + onesArray[(number % 10) - 1];
    return result;
  }

  if (number < 1000) {
    if (number % 100 == 0) { // 900 800 700
      result = `${onesArray[Math.trunc(number / 100) - 1]} hundred`;
      return result;
    }

    if (number % 10 == 0) { // 990 980 970
      result = `${onesArray[Math.trunc(number / 100) - 1]} hundred ${tensArray[Math.trunc((number % 100) / 10) - 1]}`;
      return result;
    }

    if ((number % 100) < 20) { // 919 918 917
    if ((number % 100) < 10) {
      result = `${onesArray[Math.trunc(number / 100) - 1]} hundred ${onesArray[(number % 10) - 1]}`;  
      return result;
    }
    result = `${onesArray[Math.trunc(number / 100) - 1]} hundred ${elevenToNineteen[(number % 10) - 1]}`;
    return result;
    }

    result = `${onesArray[Math.trunc(number / 100) - 1]} hundred ${tensArray[Math.trunc((number % 100) / 10) - 1]} ${onesArray[(number % 10) - 1]}`;
    return result;
  }

}
