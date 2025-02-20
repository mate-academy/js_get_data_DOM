'use strict';

const populations  = document.querySelectorAll('.population')
const totalPopulation = document.querySelector('.total-population')
const averagePopulations = document.querySelector('.average-population')
const populationsArr  = [];

populations.forEach(el => { populationsArr.push(parseInt(el.innerHTML.replace(/,/g, '')))})

const populationSum = populationsArr.reduce((val1, val2) => val1 + val2, 0)
totalPopulation.innerHTML = populationSum.toLocaleString()

const populationAvg = Math.round(populationSum/populationsArr.length)
averagePopulations.innerHTML = populationAvg.toLocaleString()
