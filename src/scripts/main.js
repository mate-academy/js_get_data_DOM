'use strict';

const olList = document.querySelector('ol');

const result = [];

for (const i of olList.childNodes) {
  if (i.children !== undefined) {
    let spanPopulationValue = i.children[1].textContent;

    spanPopulationValue = spanPopulationValue.split(',').join('');

    const num = Number(spanPopulationValue);

    result.push(num);
  }
}

const length = result.length;

let total = 0;

for (const number of result) {
  total += number;
}

const average = total / length;

const totalPopulation = document.querySelector('p').children[0];

const averagePopulation = document.querySelector('[class="average"]')
  .children[0];

averagePopulation.textContent = average.toLocaleString('en-US');

totalPopulation.textContent = total.toLocaleString('en-US');
