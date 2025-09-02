'use strict';

function populationCalculator() {
  const COUNTRY_POPULATION_QS =
    '.container > .list > .list__item > .population';
  const TOTAL_POPULATION_QS = '.total-population';
  const AVG_POPULATION_QS = '.average-population';
  const elements = document.querySelectorAll(COUNTRY_POPULATION_QS);
  const countriesTotal = Array.from(elements).reduce(
    (accumulator, element) => {
      const n = Number.parseInt(element.textContent.replaceAll(',', ''), 10);

      if (Number.isFinite(n)) {
        accumulator.totalPopulation += n;
        accumulator.count += 1;
      }

      return accumulator;
    },
    { totalPopulation: 0, count: 0 },
  );
  const totalPopulationElm = document.querySelector(TOTAL_POPULATION_QS);

  if (totalPopulationElm) {
    totalPopulationElm.innerHTML =
      countriesTotal.totalPopulation.toLocaleString('en-US');
  }

  const averagePopulationElm = document.querySelector(AVG_POPULATION_QS);

  if (averagePopulationElm) {
    averagePopulationElm.innerHTML = Math.round(
      countriesTotal.totalPopulation / countriesTotal.count,
    ).toLocaleString('en-US');
  }
}

populationCalculator();
