'use strict';

const items = document.querySelectorAll('.population');
const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');

const thousandsSeparator = (number) => {
  return number.toLocaleString('en-US');
};

const population = [...items].map((item) => {
  return Number(item.innerText.split(',').join(''));
});
const total = population.reduce((sum, n) => sum + n, 0);
const average = Math.floor(total / population.length);

const formattedTotal = thousandsSeparator(total);
const formatteAverage = thousandsSeparator(average);

spanAverage.textContent = formatteAverage;
spanTotal.textContent = formattedTotal;
