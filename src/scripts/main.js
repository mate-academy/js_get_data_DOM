'use strict';

const elements = document.querySelectorAll('span.population');
const total = document.querySelector('span.total-population');
const avgPop = document.querySelector('span.average-population');

let sum = 0;
let elementsCount = 0;

for (const element of elements) {
  sum += +element.textContent.replace(/,/g, '');
  elementsCount++;
}

const avg = sum / elementsCount;

function formatNumber(value) {
  const strValue = value.toString();
  let result = '';

  for (let i = strValue.length; i > 0; i--) {
    if (i < strValue.length && (strValue.length - i) % 3 === 0) {
      result = ',' + result;
    }
    result = strValue[i - 1] + result;
  }

  return result;
}

total.innerText = formatNumber(sum);
avgPop.innerText = formatNumber(avg.toFixed(0));
