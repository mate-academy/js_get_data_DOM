'use strict';

const population = document.querySelectorAll('.population');
let total = 0;
let average = 0;

for (const people of population) {
  const peopleNum = Number(people.innerHTML.replaceAll(',', ''));

  total += peopleNum;
  average = total / population.length;
}

const totalPop = document.querySelector('.total-population');
const totalPopulation = total.toLocaleString('en-US');

totalPop.outerHTML = totalPopulation;

const evePop = document.querySelector('.average-population');
const avragePopulation = average.toLocaleString('en-US');

evePop.outerHTML = avragePopulation;
