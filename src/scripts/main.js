'use strict';

const element = document.querySelectorAll('population');
const numbers = [];

element.forEach((elements) => {
  let text = elements.textContent.trim();

  text = text.replace(/,/g, '');

  const num = parseFloat(text);

  if (!isNaN(num)) {
    numbers.push(num);
  }
});

let total = 0;

for (const number of numbers) {
  total += number;
}

const average = total / numbers.length;

function addCommas() {
  const n = total.toString();

  return n.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

function addCommasAverage() {
  const n = average.toString();

  return n.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

const formatedAverage = addCommasAverage(average);
const formatedTotal = addCommas(total);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = formatedTotal;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = formatedAverage;
