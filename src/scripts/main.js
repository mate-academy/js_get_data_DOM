/* eslint-disable max-len */
'use strict';

const totalOutput = document.querySelector('.total-population');
const averageOutput = document.querySelector('.average-population');
const populationCollection = document.querySelectorAll('.population');

const totalPopulation = [...populationCollection].reduce((total, next) => total + Number(next.innerText.replaceAll(',', '')), 0);
const averagePopulation = totalPopulation / populationCollection.length;

totalOutput.textContent = totalPopulation.toLocaleString('en-GB');
averageOutput.textContent = averagePopulation.toLocaleString('en-GB');
