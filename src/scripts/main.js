'use strict';

const population = document.getElementsByClassName('population');
const totalPopulation = document.getElementsByClassName('total-population');
const averagePopulation = document.getElementsByClassName('average-population');

function populationNumber() {
  let allPeople = 0;

  for (let i = 0; i < population.length; i++) {
    allPeople += parseInt(population[i].textContent.split(',').join(''));
  }

  totalPopulation[0].textContent = allPeople.toLocaleString();
  averagePopulation[0].textContent = Math.round(allPeople / population.length).toLocaleString();
}

populationNumber(population);