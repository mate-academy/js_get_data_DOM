'use strict';

const populationList = document.querySelectorAll('.population')

const totalPopulationValue = [...populationList].map(item => 
  +item.innerHTML.replaceAll(',', '')).reduce((sum, add) => (sum + add), 0);
const averagePopulationValue = totalPopulationValue / populationList.length;

const totalPopulationElement = document.getElementsByClassName('total-population')[0];
const averagePopulationElement = document.getElementsByClassName('average-population')[0];

totalPopulationElement.innerHTML = totalPopulationValue.toLocaleString('en-US');
averagePopulationElement.innerHTML = averagePopulationValue.toLocaleString('en-US');

