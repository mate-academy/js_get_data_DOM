'use strict';

const allPopulation = [...document.querySelectorAll('.population')];
const valuePopulation = Array.from(allPopulation).map((el) => el.innerText);
let averagePopulation = 0;
let totalPopulation = 0;

for (let i = 0; i < valuePopulation.length; i++) {
  const toNumber = +valuePopulation[i].replace(/,/g, '');

  totalPopulation += toNumber;
}

averagePopulation = Math.floor(totalPopulation / valuePopulation.length);

totalPopulation = totalPopulation.toLocaleString('en-US');
averagePopulation = averagePopulation.toLocaleString('en-US');

document.querySelector('.average-population').innerText = averagePopulation;
document.querySelector('.total-population').innerText = totalPopulation;
