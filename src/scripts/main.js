'use strict';

const populationsEl = document.querySelectorAll('.population');
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');
const separator = detectSeparator(populationsEl[0].textContent);

let total = 0;
let count = 0;

populationsEl.forEach((el) => {
  const num = Number.parseInt(el.textContent.replaceAll(separator, ''));

  if (!isNaN(num)) {
    total += num;
    count++;
  }
});

totalPopulationEl.textContent = formatNum(total, separator);

averagePopulationEl.textContent =
  count !== 0 ? formatNum(Math.round(total / count), separator) : 0;

function formatNum(num, sep = ',') {
  const numToStr = String(num);
  let result = '';

  for (let i = 0; i < numToStr.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      result = sep + result;
    }

    result = numToStr[numToStr.length - i - 1] + result;
  }

  return result;
}

function detectSeparator(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '.' || str[i] === ',' || str[i] === ' ') {
      return str[i];
    }
  }
}
