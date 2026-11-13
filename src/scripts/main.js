'use strict';

const population = document.body.getElementsByClassName('population');
let allCount = 0;

for (const country of population) {
  const number = Number(String(country.textContent).split(',').join(''));

  if (Number.isFinite(number)) {
    allCount += number;
  }
}

const averageCount = Math.round(allCount / population.length);

const totalPopulationElement = document.body.querySelector('.total-population');

const averagePopulationElement = document.body.querySelector(
  '.average-population',
);

if (totalPopulationElement) {
  totalPopulationElement.textContent = getThouthandsSeparator(allCount);
}

if (averagePopulationElement) {
  averagePopulationElement.textContent = getThouthandsSeparator(averageCount);
}

function getThouthandsSeparator(number) {
  const separate = String(number).split('');

  for (let i = separate.length - 4; i > 0; i -= 3) {
    separate[i] = ',' + separate[i];
  }

  return separate.join('');
}
