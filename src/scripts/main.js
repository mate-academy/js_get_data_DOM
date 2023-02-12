'use strict';

const population = document.querySelectorAll('.population');
const valueOfpopulation = [...population].map(
  country => +country.innerText.replaceAll(',', '')
);
const total = valueOfpopulation.reduce((acc, value) => acc + value);
const average = total / valueOfpopulation.length;

document.querySelector('.total-population').innerText = total;
document.querySelector('.average-population').innerText = average;
