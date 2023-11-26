'use strict';

const populationNodes = document.querySelectorAll('.population');

const totalPopulationElem = document.querySelector('.total-population');
const averagePopulationElem = document.querySelector('.average-population');

const extractPopulation = (text) => {
  const numbers = Array.from(text).filter((char) => /\d/.test(char));

  return +numbers.join('');
};

const populationPerCountry = Array.from(populationNodes).map((item) =>
  item.textContent ? extractPopulation(item.textContent) : 0,
);

const totalPopulation = populationPerCountry.reduce(
  (prev, current) => prev + current,
);
const avgPopulation = totalPopulation / populationPerCountry.length;

totalPopulationElem.textContent = totalPopulation.toLocaleString();
averagePopulationElem.textContent = avgPopulation.toLocaleString();
