'use strict';

// write your code here
document.addEventListener('DOMContentLoaded', () => {
  const population = document.querySelectorAll('.population');
  const total = document.querySelector('.total-population');
  const average = document.querySelector('.average-population');
  const populationCountries = [];

  populationCountries.push(...population);

  let totalPopulation = 0;
  let averageCount = 0;

  population.forEach((country) => {
    const cleanedText = country.textContent.replace(/,/g, '').trim();

    totalPopulation += Number(cleanedText);
  });

  total.textContent = `${totalPopulation.toLocaleString('en-US')}`;
  averageCount = Math.round(totalPopulation / population.length);
  average.textContent = `${averageCount.toLocaleString('en-US')}`;
});
