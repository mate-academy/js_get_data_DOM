'use strict';

const population = document.querySelectorAll('.population');

const content = Array.from(population).map(element => element.textContent);

const contentNew = [];

for (let i = 0; i < content.length; i++) {
  contentNew.push(+content[i].replace(/,/g, ''));
}

const totalPopulation = contentNew.reduce((a, b) => a + b);

const averagePopulation = totalPopulation / contentNew.length;

document.querySelector('.total-population').textContent
= totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent
= averagePopulation.toLocaleString('en-US');
