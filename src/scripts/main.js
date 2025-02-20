'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const totalAmount = [...populationList].reduce((acc, curr) => (
  acc + parseInt(curr.innerText.replace(/,/g, ''))
), 0);

const average = totalAmount / populationList.length;

totalPopulation.innerText = totalAmount.toLocaleString('en');
averagePopulation.innerText = average.toLocaleString('en');
