'use strict';

const cities = document.querySelectorAll('.population');

const citiesPopulationArr = [];

cities.forEach(function (country) {
  const population = country.textContent.split(',').join('');

  citiesPopulationArr.push(+population);
});

const totalPopulation = citiesPopulationArr.reduce(function (prev, curr) {
  return prev + curr;
});

document.querySelector('.total-population').textContent =
  Intl.NumberFormat('en-US').format(totalPopulation);

document.querySelector('.average-population').textContent = Intl.NumberFormat(
  'en-US',
).format(totalPopulation / cities.length);
