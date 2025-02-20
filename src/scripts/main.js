'use strict';

// write your code here

let populationList = document.querySelectorAll('.population');

populationList = [...populationList].map(
  (a) => +a.innerText.split(',').join(''),
);

const total = populationList.reduce((acc, currV) => acc + currV, 0);
const avg = Math.round((total / populationList.length) * 100) / 100;

document.querySelector('.total-population').innerHTML = total.toLocaleString();
document.querySelector('.average-population').innerHTML = avg.toLocaleString();
