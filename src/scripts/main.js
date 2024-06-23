'use strict';

const populationArr = [...document.querySelectorAll('.population')];
const elTotalPopulation = document.querySelector('.total-population');
const elTAveragePopulation = document.querySelector('.average-population');

const countCountries = populationArr.length;
const averagePopulation = calcTotalPopulation(populationArr) / countCountries;
const totalPopulation = calcTotalPopulation(populationArr);

elTotalPopulation.innerHTML = totalPopulation.toLocaleString('en-US');
elTAveragePopulation.textContent = averagePopulation.toLocaleString('en-US');

function calcTotalPopulation(arr) {
  let result = 0;

  arr.forEach(element => {
    parseInt(element.innerText.split(',').join(''));

    if (typeof parseInt(element.innerText.split(',').join('')) === 'number') {
      result += parseInt(element.innerText.split(',').join(''));
    }
  });

  return result;
}


