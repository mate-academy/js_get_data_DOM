'use strict';

const populationSpans = document.querySelectorAll('span.population');
const populationTexts = [];

populationSpans.forEach((span) => {
  populationTexts.push(span.textContent);
});

const newArr = [];

populationTexts.forEach((el) => newArr.push(+el.replaceAll(',', '')));

const totalNum = newArr.reduce((sum, el) => sum + el, 0);
const averageNum = Math.round(totalNum / newArr.length);

function formatNumber(num) {
  let numStr = num.toString();
  const parts = [];

  while (numStr.length > 3) {
    parts.unshift(numStr.slice(-3));
    numStr = numStr.slice(0, -3);
  }

  if (numStr) {
    parts.unshift(numStr);

    return parts.join(',');
  }
}

const totalStr = formatNumber(totalNum);
const averageStr = formatNumber(averageNum);

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

if (totalSpan) {
  totalSpan.textContent = totalStr;
}

if (averageSpan) {
  averageSpan.textContent = averageStr;
}
