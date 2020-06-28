'use strict';

const tagsPopulation = document.querySelectorAll('span.population');
const arrayPopulation = [...tagsPopulation].map(item =>
  !Number.isNaN((item.innerText).replace(/[,]/g, ''))
    ? Number((item.innerText).replace(/[,]/g, ''))
    : 0
);
const totalPopulation = arrayPopulation.reduce((acum, item) => acum + item);
const avaragePopulation = totalPopulation / arrayPopulation.length;
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');

total.textContent = totalPopulation;
avarage.textContent = avaragePopulation;
