'use strict';

const data = [...document.querySelectorAll('span.population')];
const allRigth = data.map((text) => +text.textContent.split(',').join(''));

const total = allRigth.reduce((sum, elem) => sum + elem, 0);
const average = total / allRigth.length;

document.querySelector('span.average-population').textContent =
  average.toLocaleString('en-US');

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');
