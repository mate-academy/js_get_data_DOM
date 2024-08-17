'use strict';

const populationList = document.querySelectorAll('.population');
let totalPopulation = 0;

populationList.forEach((element) => {
  const text = element.innerText;
  const num = text.replace(/,/g, '');

  totalPopulation += +num;
});

const averagePopulation = totalPopulation / populationList.length;
const totalPopulationElemnt = document.querySelector('.total-population');
const averagePopulationElemnt = document.querySelector('.average-population');

totalPopulationElemnt.innerText = totalPopulation;
averagePopulationElemnt.innerText = averagePopulation;
