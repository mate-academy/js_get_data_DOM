'use strict';

const totalPopulationElem = document.querySelector('.total-population');
const avgPopulationElem = document.querySelector('.average-population');

// we get a collection of DOM elements with population
const populationElements = document.querySelectorAll('.population');

// we create an array with the number of population (as text)
const populationList = [...populationElements].map(population => {
  return population.innerText;
});

// we go through the array and add up the population of all countries
const totalPopulation = populationList.reduce((sum, population) => {
  // we remove the separator from the string and convert it to a number
  const currPopulation = +population.split(',').join('');

  return sum + currPopulation;
}, 0);

const avgPopulation = totalPopulation / populationList.length;

/*
  we write down the total and average population of all countries,
  separating thousands with commas
*/
totalPopulationElem.innerHTML = totalPopulation.toLocaleString('en-US');
avgPopulationElem.innerHTML = avgPopulation.toLocaleString('en-US');
