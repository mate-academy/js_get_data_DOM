'use strict';

const population = document.querySelectorAll('span.population');
const totalPlace = document.querySelector('span.total-population');
const averagePlace = document.querySelector('span.average-population');

const numberedPopulation = [...population].map(item => {
  const number = Number(item.textContent.split(',').join(''));

  return number;
});
const totalData = numberedPopulation.reduce((sum, item) => sum + item);
const averageData = totalData / numberedPopulation.length;

totalPlace.textContent = totalData;
averagePlace.textContent = averageData;
