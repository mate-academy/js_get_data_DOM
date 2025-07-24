'use strict';

// write your code here
const avaragePopulation = document.querySelectorAll('.population');

const avaragePopulationNum = Array.from(avaragePopulation).map(
  (item) => item.textContent,
);

const total = avaragePopulationNum.reduce((acc, population) => {
  const cleaned = Number(population.replaceAll(',', ''));

  return acc + cleaned;
}, 0);
const formatNumber = (num) => num.toLocaleString('en-US');

const average = total / avaragePopulation.length;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = formatNumber(Math.round(average));
totalSpan.textContent = formatNumber(total);
