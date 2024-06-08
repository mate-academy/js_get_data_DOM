'use strict';

const populationList = document.querySelectorAll('span.population');
const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');

const quantityCounter = populationList.length;
let totalCount = 0;

for (const span of populationList) {
  const nowNum = Number(span.innerText.split(',').join(''));

  totalCount += nowNum;
}

total.innerHTML = totalCount;
average.innerHTML = totalCount / quantityCounter;
