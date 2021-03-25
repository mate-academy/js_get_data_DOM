'use strict';

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const arraySelected = document.querySelectorAll('.population');
const arrayString = [...arraySelected].map(elem => elem.innerText);
const arrayNumbers = arrayString.map(elem => elem.replaceAll(',', ''));
const arrayIntegers = arrayNumbers.map(elem => parseInt(elem));

const totalPopulation = arrayIntegers.reduce((a, b) => a + b);
const totalPopFormatted = totalPopulation.toLocaleString('en');
const averagePopulation = totalPopulation / arrayIntegers.length;
const averagePopFormatted = averagePopulation.toLocaleString('en');

totalElement.textContent = totalPopFormatted;
averageElement.textContent = averagePopFormatted;
