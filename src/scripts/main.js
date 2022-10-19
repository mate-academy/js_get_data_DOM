'use strict';

function divide(number) {
  let count = 0;
  let result = '';
  const string = String(number);
  let long = 0;

  (string.length % 3) !== 0 ? long = string.length % 3 : long = 3;

  for (let i = 0; i < string.length; i++) {
    if (count === long) {
      result += ',';
      count = 0;
      long = 3;
    }
    result += string[i];
    count++;
  }

  return result;
}

const populationAllCountry = document.getElementsByClassName('population');

const arrayPopulationAllCountry = [...populationAllCountry].map(popular =>
  popular.innerText);

const sumPopulationAllCountry = arrayPopulationAllCountry
  .reduce((sumPopulation, countryPopulation) =>
    sumPopulation + Number(countryPopulation.split(',').join('')), 0);

const avaragePopulation = sumPopulationAllCountry
/ arrayPopulationAllCountry.length;

document.querySelector('.total-population')
  .innerHTML = divide(sumPopulationAllCountry);

document.querySelector('.average-population')
  .innerHTML = divide(avaragePopulation);
