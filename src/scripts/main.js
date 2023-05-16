'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const population = document.querySelectorAll('.population');
  const totalPopulation = document.querySelector('.total-population');
  const averagePopulation = document.querySelector('.average-population');

  const totalPopulationValue = [...population].reduce((total, country) => {
    const countryPopulation = +(country.textContent).replace(/,/g, '');

    return total + countryPopulation;
  }, 0);

  totalPopulation.textContent
    = totalPopulationValue.toLocaleString('en');

  averagePopulation.textContent
    = (totalPopulationValue / population.length).toLocaleString('en');
});
