'use strict';

const populationsHtml
  = document.getElementsByClassName('population');
const totalPopultaionHtml
  = document.getElementsByClassName('total-population')[0];
const avaragePopultaionHtml
  = document.getElementsByClassName('average-population')[0];

let totalPopulation = 0;

for (const population of populationsHtml) {
  totalPopulation += parseInt(population.innerText.replaceAll(',', ''));
}

totalPopultaionHtml.innerText = totalPopulation;
avaragePopultaionHtml.innerHTML = totalPopulation / populationsHtml.length;
