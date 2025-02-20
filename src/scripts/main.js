'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationList = document.querySelector('.list');

const sum = Array.from(populations).reduce(
  (acc, cur) => acc + Number(cur.innerText.replaceAll(',', '')),
  0,
);

totalPopulation.innerText = sum.toLocaleString('en-US');

averagePopulation.innerText = Math.round(
  sum / populationList.children.length,
).toLocaleString('en-US');
