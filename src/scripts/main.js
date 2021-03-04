'use strict';

const listOfDataAboutPopulation = document.querySelectorAll('.population');
let totalPopulation = 0;

for (let i = 0; i < listOfDataAboutPopulation.length; i++) {
  totalPopulation += parseInt(
    listOfDataAboutPopulation[i].innerText.split(',').join('')
  );
}

document.querySelector('.total-population').innerHTML = totalPopulation;

document.querySelector('.average-population').innerHTML = totalPopulation
  / listOfDataAboutPopulation.length;
