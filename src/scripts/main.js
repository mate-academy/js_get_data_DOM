'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // calc populations
  const calcPopulationsInit = () => {
    const list = document.querySelector('.list');

    if (list) {
      const averagePopulation = document.querySelector('.average-population');
      const totalPopulation = document.querySelector('.total-population');
      const populations = list.querySelectorAll('.population');
      const items = list.querySelectorAll('.list__item');

      // get total
      const getTotal = () => {
        return [...populations].reduce((a, b) => {
          return a + +b.textContent.split(',').join('');
        }, 0);
      };

      // get average
      const getAverage = (number) => number / items.length;

      // formatted number
      const formatNumber = (number) => number.toLocaleString('en-US');

      // set population
      const setPopulation = (population, block) => {
        block.textContent = population;
      };

      // calc total
      const calcTotal = () => {
        const total = getTotal();
        const res = formatNumber(total);

        setPopulation(res, totalPopulation);
      };

      // calc average
      const calcAverage = () => {
        const total = getTotal();
        const average = getAverage(total);
        const res = formatNumber(average);

        setPopulation(res, averagePopulation);
      };

      // run func
      calcTotal();
      calcAverage();
    }
  };

  calcPopulationsInit();
});
