'use strict';

const allPopulations = document.querySelectorAll('.population');
const totalPopulation = document.getElementsByClassName('total-population');
const averagePopul = document.getElementsByClassName('average-population');

const total = Array.from(allPopulations)
  .map((population) => +population.textContent.replaceAll(',', ''))
  .reduce((acc, num) => acc + num);

const avarege = total / Array.from(allPopulations).length;

totalPopulation[0].textContent = total.toLocaleString('en-US');
averagePopul[0].textContent = avarege.toLocaleString('en-US');
