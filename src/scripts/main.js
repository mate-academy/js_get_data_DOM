'use strict';

const items = document.querySelectorAll('.population');

const itemsValueStr = [...items].map(item => item.innerText);

const itemsValueNum = itemsValueStr.map(elem => {
  return Number(elem.split(',').join(''));
});

const totalPopulation = itemsValueNum.reduce(
  (prev, current) => prev + current, 0,
);
const averagePopulation = totalPopulation / itemsValueNum.length;

const totalPopulationStrForReturn
  = totalPopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const averagePopulationStrForReturn
  = averagePopulation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').innerText
  = totalPopulationStrForReturn;

document.querySelector('.average-population').innerText
  = averagePopulationStrForReturn;
