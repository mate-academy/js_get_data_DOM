'use strict';

// write your code here

const populations = document.querySelectorAll('.population');

let totalPopulation = 0;
let average = 0;

populations.forEach((element) => {
  const populationText = element.innerText;
  const cleanedText = populationText.replace(/[^0-9.-]+/g, '');
  const populationNumber = parseInt(cleanedText);

  totalPopulation += populationNumber;

  average = Math.round(totalPopulation / populations.length);
});

const totalElement = document.querySelector('.total-population');

totalElement.innerText = totalPopulation.toLocaleString();

const averageElement = document.querySelector('.average-population');

averageElement.innerText = average.toLocaleString();
