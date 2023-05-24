'use strict';

const populationArr = document.getElementsByClassName('population');
const totalPopulationValue = document.querySelector('.total-population');
const averagePopulationValue = document.querySelector('.average-population');
const populationValue = [...populationArr].map(amount => amount.innerText);
const populationValueTrue
= populationValue.map(people => +(people.replaceAll(',', '')));

totalPopulationValue.innerText
 = populationValueTrue.reduce((sumOfPopulations, currentPopulation) =>
    sumOfPopulations + currentPopulation, 0);

averagePopulationValue.innerText
= totalPopulationValue.innerText / populationValueTrue.length;

totalPopulationValue.innerText
= totalPopulationValue.innerText.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1,');

averagePopulationValue.innerText
= averagePopulationValue.innerText.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1,');
