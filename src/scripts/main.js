'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const calcPopulationsInit = () => {
    const list = document.querySelector('.list');

    if (list) {
      const averagePopulation = document.querySelector('.average-population');
      const totalPopulation = document.querySelector('.total-population');
      const populations = list.querySelectorAll('.population');
      const items = list.querySelectorAll('.list__item');

      const getTotal = () => {
        return [...populations].reduce((a, b) => {
          return a + +b.textContent.split(',').join('');
        }, 0);
      };

      const getAverage = (number) => number / items.length;

      const formatNumber = (number) => number.toLocaleString('en-US');

      const setPopulation = (population, block) => {
        block.textContent = population;
      };

      const calcTotal = () => {
        const total = getTotal();
        const res = formatNumber(total);

        setPopulation(res, totalPopulation);
      };

      const calcAverage = () => {
        const total = getTotal();
        const average = getAverage(total);
        const res = formatNumber(average);

        setPopulation(res, averagePopulation);
      };

      calcTotal();
      calcAverage();
    }
  };

  calcPopulationsInit();
});
