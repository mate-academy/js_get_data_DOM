'use strict';

const spans = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationData = Array.from(spans).map((span) => span.textContent);

function toNumber(value) {
  const number = parseInt(value.replaceAll(',', ''));

  return isNaN(number) ? null : number;
}

const numbers = populationData.map(toNumber).filter((num) => num !== null);

const total = numbers.reduce((acc, num) => acc + num, 0);
const average = total / numbers.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
