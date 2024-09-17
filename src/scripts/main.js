'use strict';

const populationFields = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const avarage = document.querySelector('.average-population');

const fieldsTextContent = [...populationFields].map(el => {
  return +el.textContent.split(',').join('');
});

const totalPopulation = fieldsTextContent
  .reduce((sum, el) => sum + el);

const avaragePopulation = totalPopulation / fieldsTextContent.length;

total.textContent = totalPopulation.toLocaleString();
avarage.textContent = avaragePopulation.toLocaleString();
