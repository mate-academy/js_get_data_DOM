'use strict';

const populationElements = document.querySelectorAll('.population');

let total = 0;

populationElements.forEach((element) => {
  const population = parseInt(element.textContent.replace(/,/g, ''));

  total += population;
});

const totalPopulationTag = document.querySelector('.total-population');

totalPopulationTag.textContent = total.toLocaleString();

const average = total / populationElements.length;

const averagePopulationTag = document.querySelector('.average-population');

averagePopulationTag.textContent = average.toLocaleString();
