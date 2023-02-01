'use strict';

const populationSpans = document.body.querySelectorAll('.population');

let populationSum = 0;

populationSpans.forEach(element => {
    populationSum += Number(element.textContent.replace(/,/g, ''));
})

const totalElement = document.body.querySelector('.total');
const averageElement = document.body.querySelector('.average');

const totalPopulation = populationSum.toLocaleString() + ' people';
const averagePopulation = Math.round(populationSum / populationSpans.length)
    .toLocaleString() + ' people/country'

totalElement.querySelector('.total-population')
    .textContent = totalPopulation;
averageElement.querySelector('.average-population')
    .textContent = averagePopulation;
