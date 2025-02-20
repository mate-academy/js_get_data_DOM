'use strict';

const populationElements = document.querySelectorAll('span.population');

let totalPopulation = 0;

for (const element of populationElements) {
  totalPopulation += Number(element.textContent.replaceAll(',', ''));
}

const avaragePopulation = (totalPopulation / populationElements.length).toLocaleString('en-US');

totalPopulation = totalPopulation.toLocaleString('en-US');

const total = document.querySelector('.total-population')
total.innerHTML = `${totalPopulation}`

const average = document.querySelector('.average-population')
average.innerHTML = `${avaragePopulation}`
