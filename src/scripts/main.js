'use strict';

const populationCollection = [];
const allSpanElements = document.getElementsByClassName('population');

for (const span of allSpanElements) {
  let spanText = span.textContent;

  spanText = spanText.replace(/,/g, '');
  populationCollection.push(Number(spanText));
}

const totalPopulation = populationCollection.reduce((i, x) => i + x, 0);
const avPopulation = Math.round(totalPopulation / populationCollection.length);

const totalElement = document.getElementsByClassName('total-population')[0];

totalElement.textContent = totalPopulation.toLocaleString('en-US');

const avElement = document.getElementsByClassName('average-population')[0];

avElement.textContent = avPopulation.toLocaleString('en-US');
