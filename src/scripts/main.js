'use strict';

const population = [...document.querySelectorAll('.population')]
  .map((el) => el.textContent)
  .map((num) => {
    const number = num
      .split('')
      .filter((item) => item !== ',')
      .join('');

    return number;
  })
  .map(Number);

const totalPopulation = population.reduce((sum, quantity) => sum + quantity, 0);

const countryQuantity = population.length;

const averagePopulation = Math.round(totalPopulation / countryQuantity);

const totalPopulationContent = document.querySelector('.total-population');

totalPopulationContent.innerHTML = `${totalPopulation
  .toLocaleString()
  .replace(/\s/g, ',')}`;

const averagePopulationContent = document.querySelector('.average-population');

averagePopulationContent.innerHTML = `${averagePopulation
  .toLocaleString()
  .replace(/\s/g, ',')}`;
