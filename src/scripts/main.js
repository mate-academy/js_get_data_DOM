'use strict';

const allPopulationSpans = document.querySelectorAll('.population');
let totalPopulation = 0;
let validCount = 0;

for (const spanEl of allPopulationSpans) {
  const parsedValue = spanEl.textContent;
  const currentNumber = Number(parsedValue.split(',').join(''));

  if (Number.isNaN(currentNumber)) {
    totalPopulation += currentNumber;
    validCount++;
  }
}

const average =
  allPopulationSpans.length > 0 ? totalPopulation / validCount : 0;

const formatter = new Intl.NumberFormat('en-US');
const formattedAverage = formatter.format(average);
const formattedTotal = formatter.format(totalPopulation);

const averageNode = document.querySelector('.average-population');
const totalNode = document.querySelector('.total-population');

averageNode.textContent = formattedAverage;
totalNode.textContent = formattedTotal;
