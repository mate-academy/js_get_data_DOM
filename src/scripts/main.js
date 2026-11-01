'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(populationSpan => +populationSpan.innerText?.replaceAll(',', '') || 0)
  .filter(population => Number.isFinite(population) && population.length);
const totalPopulationElement = document.querySelector('.total-population');
const avgPopulationElement = document.querySelector('.average-population');

const totalPopulation = populations.reduce(
  (total, population) => total + population,
  0,
);

const avgPopulation = populations.length
  ? Math.round(totalPopulation / populations.length)
  : 0;

const addThousandSeparator = number => {
  const strNumber = number.toString();

  if (strNumber.length < 4) {
    return strNumber;
  }

  let result = '';
  let j = 0;

  for (let i = strNumber.length - 1; i >= 0; i--) {
    result = strNumber[i] + result;
    j++;

    if (j % 3 === 0 && i > 0) {
      j = 0;
      result = ',' + result;
    }
  }

  return result;
};

totalPopulationElement.textContent = addThousandSeparator(totalPopulation);
avgPopulationElement.textContent = addThousandSeparator(avgPopulation);
