'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [];

for (let i = 0; i < populationElements.length; i++) {
  let text = populationElements[i].textContent;

  text = text.replace(/,/g, '');

  const number = Number(text);

  if (!isNaN(number)) {
    populations.push(number);
  }
}

let total = 0;

for (let i = 0; i < populations.length; i++) {
  total = total + populations[i];
}

const average = total / populations.length;
const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = formattedTotal;
averageElement.textContent = formattedAverage;
