'use strict';

// write your code here
const elements = document.querySelectorAll('.population');
const valueAvarage = document.querySelector('.average-population');
const valueTotal = document.querySelector('.total-population');
let summaPopulation = 0;

elements.forEach(
  (el) =>
    (summaPopulation =
      summaPopulation + Number(el.textContent.replaceAll(',', ''))),
);

valueTotal.textContent = summaPopulation.toLocaleString('en-US');

valueAvarage.textContent = Math.floor(
  summaPopulation / elements.length,
).toLocaleString('en-US');
