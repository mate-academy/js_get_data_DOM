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
  avaragePopulation = Math.floor(totalPopulation / arrayOfElements.length);
}

const totalPopulationString = backToStringFormat(totalPopulation);
const avaragePopulationString = backToStringFormat(avaragePopulation);

const totalPopulationValue = document.querySelector('.total-population');

totalPopulationValue.innerText = totalPopulationString;

const avaragePopulationValue = document.querySelector('.average-population');

avaragePopulationValue.innerText = avaragePopulationString;

function backToStringFormat(from) {
  const str = from.toString();
  let result = '';

  for (let i = str.length; i >= 0; i = i - 3) {
    result = str.substring(i - 3, i) + result;

    if (i > 3) {
      result = ',' + result;
    }
  }

  return result;
}
