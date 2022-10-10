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

let sumPopulationAllCountry = 0;

for (const countryPopulation of arrayPopulationAllCountry) {
  sumPopulationAllCountry += Number(countryPopulation.split(',').join(''));
}

const avaragePopulation = sumPopulationAllCountry
/ arrayPopulationAllCountry.length;

document.body
  .children[0]
  .children[2]
  .children[0]
  .innerHTML = divide(sumPopulationAllCountry);

document.body
  .children[0]
  .children[3]
  .children[0]
  .innerHTML = divide(avaragePopulation);
