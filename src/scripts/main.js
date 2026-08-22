'use strict';

const listOfElements = document.querySelectorAll('.population');
const arrayOfElements = [];

for (let i = 0; i < listOfElements.length; i++) {
  const el = Number(listOfElements[i].innerText.replaceAll(',', ''));

  arrayOfElements.push(el);
}

let totalPopulation = 0;
let avaragePopulation = 0;

for (let i = 0; i < arrayOfElements.length; i++) {
  totalPopulation += arrayOfElements[i];
}

avaragePopulation = Math.floor(totalPopulation / arrayOfElements.length);

const totalPopulationString = backToStringFormat(totalPopulation);
const avaragePopulationString = backToStringFormat(avaragePopulation);

const totalPopulationValue = document.querySelector('.total-population');

totalPopulationValue.innerText = totalPopulationString;

const avaragePopulationValue = document.querySelector('.average-population');

avaragePopulationValue.innerText = avaragePopulationString;

function backToStringFormat(from) {
  return from.toLocaleString('en-US');
}
