'use strict';

// write your code here
const populationsHtml
  = document.getElementsByClassName('population');
const totalPopultaionHtml
  = document.getElementsByClassName('total-population')[0];
const avaragePopultaionHtml
  = document.getElementsByClassName('average-population')[0];

let totalPopulation = 0;
let avgPopulation = 0;
let i = 0;

for (const population of populationsHtml) {
  i++;
  totalPopulation += parseInt(population.innerText.replaceAll(',', ''));
}

avgPopulation = totalPopulation / i;
totalPopultaionHtml.innerText = totalPopulation;
avaragePopultaionHtml.innerHTML = avgPopulation;
