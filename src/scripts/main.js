'use strict';

const allPopulationsQuery = document.querySelectorAll('.population');
const averageElem = document.querySelector('.average-population');
const totalElem = document.querySelector('.total-population');
const populations = [];
let length = allPopulationsQuery.length;
let averagePopulation;
const regex = /\s+|,|\./g;

allPopulationsQuery.forEach((elem) => {
  populations.push(elem.innerText);
});

let totalPopulation = populations.reduce((sum, elem) => {
  const changedElem = Number(elem.replaceAll(regex, ''));

  if (Number.isFinite(changedElem)) {
    return sum + changedElem;
  }

  length -= 1;

  return sum;
}, 0);

if (length > 0 && Number.isFinite(length)) {
  averagePopulation = Math.floor(totalPopulation / length);
}

averagePopulation = new Intl.NumberFormat().format(averagePopulation);
totalPopulation = new Intl.NumberFormat().format(totalPopulation);

averageElem.innerText = averagePopulation;
totalElem.innerText = totalPopulation;
