'use strict';

const cities = document.querySelectorAll('.population');
const totalPopulation = [...cities].reduce((acc, city) => {
  const population = +city.textContent.replaceAll(',', '');

  return acc + population;
}, 0);

const citiesCount = cities.length;

const averagePopulation = Math.round(+totalPopulation / citiesCount);

document.querySelector('.total-population').textContent =
  converToThousands(totalPopulation);

document.querySelector('.average-population').textContent =
  converToThousands(averagePopulation);

function converToThousands(value) {
  const normalizedValue = value.toString();
  let result = '';
  let count = 0;

  for (let i = normalizedValue.length - 1; i >= 0; i--) {
    if (count === 3) {
      result = ',' + result;
      count = 0;
    }

    count++;

    result = normalizedValue[i] + result;
  }

  return result;
}
