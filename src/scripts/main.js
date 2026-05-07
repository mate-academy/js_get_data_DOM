'use strict';

// write your code here
const texDataElement = document.querySelectorAll('span.population');

const texData = [];
const resultData = {
  total: 0,
  average: 0,
};

texDataElement.forEach((item, index) => {
  const valueItemNumber = +item.textContent.replaceAll(',', '');

  texData[index] = valueItemNumber;
  resultData.total += valueItemNumber;
});

resultData.average = (resultData.total / texData.length) | 0;

resultData.average = resultData.average.toLocaleString('en-US');
resultData.total = resultData.total.toLocaleString('en-US');

const elementTotal = document.querySelector('.total-population');

elementTotal.innerHTML = resultData.total;

const elementAve = document.querySelector('.average-population');

elementAve.innerHTML = resultData.average;
