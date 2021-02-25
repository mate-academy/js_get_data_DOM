'use strict';

const itemsWithPopulation = document.querySelectorAll('.population');
const listWithPopulation = [...itemsWithPopulation]
  .map(element => +element.innerText.replace(/,/g, ''));

const sum = listWithPopulation.reduce((acum, value) => acum + value, 0);
const avarage = sum / listWithPopulation.length;

const totalInHtml = document.querySelector('.total-population');
const avarageInHtml = document.querySelector('.average-population');

totalInHtml.innerText = sum.toLocaleString('en');
avarageInHtml.innerText = avarage.toLocaleString('en');
