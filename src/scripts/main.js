'use strict';

const nodeList = document.querySelectorAll('.population');
const elemTotal = document.querySelector('.total-population');
const elemAverage = document.querySelector('.average-population');
const population = [...nodeList]
  .map(elem => +elem.innerText.replaceAll(',', ''));
const total = population.reduce((a, b) => a + b, 0);
const avarage = (total / population.length).toLocaleString();

elemTotal.innerText = total.toLocaleString();
elemAverage.innerText = avarage;
