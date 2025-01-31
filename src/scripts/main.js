'use strict';

const allTextDate = document.querySelectorAll('span.population');
let totalNumber = 0;
let average = 0;

for (const element of allTextDate) {
  const part = element.textContent.split(',');
  let date = '';

  for (let i = 0; i < part.length; i++) {
    date += part[i];
  }

  totalNumber += Number(date);
}

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

average = Math.round(totalNumber / allTextDate.length);

totalPopulation.textContent = Intl.NumberFormat('en-US').format(totalNumber);

averagePopulation.textContent = Intl.NumberFormat('en-US').format(average);
