const onesArray = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const elevenToNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tensArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable (number) {

  let result = '';

  if (number < 10) {
    result = getStringToOnes(number);
  } else if (number < 100) {
    result = getStringToTens(number);
  } else if (number < 1000) {
    result = getStringToHundreds(number);
  } else {
    return 'error!';
  }

  return result;
}

function getStringToOnes (num) {
  // check
  if (num >= 10) { 
    return 'error! number must be < 10';
  }

  if (num == 0) {
    return 'zero';
  }

  return onesArray[num - 1];
}

function getStringToTens (num) {
  // check
  if (num >= 100) { 
    return 'error! number must be < 100';
  } else if (num < 10) {
    // to get 'two' from 902
    return getStringToOnes(num);
  }

  // 11 12 ... 18 19
  if (num < 20 && num != 10) { 
    return elevenToNineteen[(num % 10) - 1];
  }

  // 10 20 ... 80 90
  if (num % 10 == 0) { 
    return tensArray[(num / 10) - 1];
  }

  // 21 22 ... 98 99
  return `${tensArray[Math.trunc(num / 10) - 1]} ${getStringToOnes(num % 10)}`; 
}

function getStringToHundreds (num) {
  // check
  if (num >= 1000) { 
    return 'error! number must be < 1000';
  } if (num < 100) {
    return getStringToTens(num);
  }
  
  // 100 200 ... 800 900
  if (num % 100 == 0) {
    return `${getStringToOnes(Math.trunc(num / 100))} hundred`;
  }
  
  // 101 102 ... 111 112 ... 998 999
  return `${getStringToOnes(Math.trunc(num / 100))} hundred ${getStringToTens(Math.trunc(num % 100))}`;
}