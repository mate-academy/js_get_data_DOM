'use strict';

const countriesPopulation = document.getElementsByClassName('population');

const arrCountriesPopulation = [...countriesPopulation]
  .map(element =>
    Number(element.textContent.split(',').join('')))
  .filter(element => typeof element === 'number');

const totalValue = arrCountriesPopulation
  .reduce((prev, current) => prev + current, 0);

const totalInput = document.getElementsByClassName('total-population')[0];

totalInput.textContent = totalValue.toLocaleString('en-US');

const averageValue = totalValue / arrCountriesPopulation.length;

const averageInput = document.getElementsByClassName('average-population')[0];

averageInput.textContent = averageValue.toLocaleString('en-US');
