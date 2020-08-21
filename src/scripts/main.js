'use strict';

let populations = document.querySelectorAll('.population');
const reg = /,/g;

populations = [...populations].map(x => Number(x.innerText.replace(reg, '')))
  .filter(x => !isNaN(x));

const totalPopulation = populations.reduce((acc, el) => acc + el);

document.querySelector('.total-population').innerHTML = totalPopulation;

document.querySelector('.average-population').innerHTML
= totalPopulation / populations.length;
