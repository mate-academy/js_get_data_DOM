'use strict';

const populationElements = document.querySelectorAll('.population');

let total = 0;

populationElements.forEach((item) => {
  const populationText = item.innerHTML.trim();

  total += parseInt(populationText.replace(/,/g, ''), 10);
});

const length = populationElements.length;

const avarage = total / length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total.toLocaleString();

const avaragePopulation = document.querySelector('.average-population');

avaragePopulation.innerHTML = avarage.toLocaleString();
