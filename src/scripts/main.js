'use strict';

const valuesNumbers = document.querySelectorAll('.population');

function Calcs(values) {
  const results = [];

  let totalCalc = 0;
  let averageCalc = 0;
  let validCount = 0;

  const separators = [',', '.', '\u00A0', '\u2009', ' '];
  const sepCount = {};

  for (const value of values) {
    const text = value.innerText;

    for (const sep of separators) {
      if (text.includes(sep)) {
        sepCount[sep] = (sepCount[sep] || 0) + 1;
      }
    }
  }

  let chosenSep = ',';
  let maxCount = 0;

  for (const [sep, count] of Object.entries(sepCount)) {
    if (count > maxCount) {
      maxCount = count;
      chosenSep = sep;
    }
  }

  for (const value of values) {
    let text = value.innerText;

    for (const sep of separators) {
      text = text.replaceAll(sep, '');
    }

    const number = +text;

    if (!Number.isNaN(number)) {
      totalCalc = totalCalc + number;
      validCount++;
    }
  }

  averageCalc = Math.trunc(totalCalc / validCount);

  function toStringSeparator(value, sep) {
    const result = value.toString();
    const separateNumbers = result.split('').reverse();

    let numberCount = 0;
    const withSep = [];

    for (let i = 0; i < separateNumbers.length; i++) {
      withSep.push(separateNumbers[i]);
      numberCount++;

      if (numberCount === 3 && i !== separateNumbers.length - 1) {
        withSep.push(sep);
        numberCount = 0;
      }
    }

    return withSep.reverse().join('');
  }

  totalCalc = toStringSeparator(totalCalc, chosenSep);
  averageCalc = toStringSeparator(averageCalc, chosenSep);

  results.push(totalCalc, averageCalc);

  return results;
}

const calcedValues = Calcs(valuesNumbers);

const [sum, average] = calcedValues;

const totalItem = document.querySelector('.total-population');

const everageItem = document.querySelector('.average-population');

totalItem.innerText = sum;

everageItem.innerText = average;
