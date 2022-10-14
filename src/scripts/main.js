'use strict';

const population = document.querySelectorAll('.population');
const populationList = [...population].map(value =>
  Number(value.innerHTML.replaceAll(',', '')));
const total = populationList.reduce((sum, current) => sum + current, 0);
const average = total / populationList.length;

const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');

spanTotal.replaceWith(total.toLocaleString());
spanAverage.replaceWith(average.toLocaleString());
