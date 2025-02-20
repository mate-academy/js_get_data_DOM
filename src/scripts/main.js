'use strict';

const populationOfCountries = document.querySelectorAll('.population');
const inputTotal = document.querySelector('.total-population');
const inputAvarage = document.querySelector('.average-population');

const populationToNumber = [...populationOfCountries].map((currentNode) => {
  return currentNode.innerHTML.replaceAll(',', '');
});

const sum = populationToNumber.reduce((acc, number) => {
  return acc + +number;
}, 0);

const total = sum.toLocaleString();
const avarage = (sum / populationToNumber.length).toLocaleString();

inputTotal.innerHTML = total;
inputAvarage.innerHTML = avarage;
