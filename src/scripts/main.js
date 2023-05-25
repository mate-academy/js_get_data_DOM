'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationsNumber = [...populations].map(population => (
  Number(population.innerText.split('').filter(pop => pop !== ',').join(''))
));

const total = populationsNumber.reduce((sum, num) => sum + num, 0);
const average = total / populationsNumber.length;

const thousandsSeparator = number => {
  return number.toLocaleString('en');
};

totalPopulation.innerText = thousandsSeparator(total);
averagePopulation.innerText = thousandsSeparator(average);
