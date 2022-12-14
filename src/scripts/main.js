'use strict';

const populationNodes = document.querySelectorAll('span.population');
const populationArray
= Array.from(populationNodes).map(e => parseFloat(e.innerHTML));

const total = populationArray.reduce((a, b) => a + b, 0);
const avg = (total / populationArray.length);

const totalNode = document.querySelector('.total-population');
const aveNode = document.querySelector('.average-population');

totalNode.replaceWith(thousandsSeparator(total));
aveNode.replaceWith(thousandsSeparator(avg));

function thousandsSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
