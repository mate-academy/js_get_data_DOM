'use strict';

const listOfDataAboutPopulation = [...document.querySelectorAll('.population')];
let totalPopulation = listOfDataAboutPopulation.reduce((acc, element) =>
  acc + parseInt(
    element.innerText.split(',').join('')
  ), 0
);

let averageAge = (totalPopulation / listOfDataAboutPopulation.length);

averageAge = averageAge.toLocaleString('en-US');
totalPopulation = totalPopulation.toLocaleString('en-US');

document.querySelector('.total-population').innerHTML = totalPopulation;

document.querySelector('.average-population').innerHTML = averageAge;
