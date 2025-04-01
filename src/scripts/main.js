'use strict';

const populationArray = [...document.querySelectorAll('.population')];

const cleanNumbers = populationArray.map(
  (el) => Number(el.textContent.replace(/,/g, '').trim()) || 0,
);

const sumPopulation = cleanNumbers.reduce((num, acc) => num + acc, 0);
const avPopulation = (sumPopulation / cleanNumbers.length).toFixed(2);

const totalPop = document.querySelector('.total-population');

totalPop.textContent = sumPopulation
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const avPop = document.querySelector('.average-population');

avPop.textContent = avPopulation
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
