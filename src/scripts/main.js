'use strict';

const numbers = [];
const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total');
const totalAverage = document.querySelector('.average');

populations.forEach((population) => {
  numbers.push(population.innerHTML);
});

const arr = numbers.map((num) => num.replaceAll(',', ''));
const numArr = arr.map((pop) => +pop);

function calculateAverage() {
  const total = numArr.reduce((a, b) => a + b);
  const numberFormatter = Intl.NumberFormat('en-US');
  const formattedTotal = numberFormatter.format(total);

  const average = total / numArr.length;
  const formattedAverage = numberFormatter.format(average);

  totalPopulation.innerHTML = `Total: ${formattedTotal}`;
  totalAverage.innerHTML = `Average: ${formattedAverage}`;
}

calculateAverage();
