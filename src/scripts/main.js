'use strict';

const arrayPopulationStr = [
  ...document.getElementsByClassName('population'),
].map((n) => n.textContent);

const arrayPopulationNum = arrayPopulationStr.map((str) => {
  return Number(
    str
      .split('')
      .filter((element) => element !== ',')
      .join(''),
  );
});

const total = arrayPopulationNum.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
const average = total / arrayPopulationNum.length;
const spanTotalPopulation = document.querySelector('.total-population');
const spanAveragePopulation = document.querySelector('.average-population');

spanTotalPopulation.textContent = total.toLocaleString();
spanAveragePopulation.textContent = average.toLocaleString();
