'use strict';

const population = document.querySelectorAll('span.population');

const populationArr = [];

population.forEach((span) => {
  const populationText = span.textContent.split(',').join('');
  const populationNumber = +populationText;

  if (!isNaN(populationNumber)) {
    populationArr.push(populationNumber);
  }
});

const totalPopulation = populationArr.reduce((acc, num) => {
  return acc + num;
}, 0);

const averagePopulation = totalPopulation / populationArr.length;

function separateNumberWithComas(number) {
  return number.toLocaleString('en-US');
}

document.querySelector('span.total-population').textContent =
  separateNumberWithComas(totalPopulation);

document.querySelector('span.average-population').textContent =
  separateNumberWithComas(averagePopulation);
