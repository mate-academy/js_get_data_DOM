'use strict';

const populationElem = document.querySelectorAll('.population');

let populations = [];

populationElem.forEach((item) => {
  populations.push(item.textContent);
});

populations = populations.map((str) => Number(str.replace(/\D/g, '')));

let total = populations.reduce((sum, num) => sum + num, 0);

let average = Math.floor(total / 9);

total = total.toLocaleString('en-US');

average = average.toLocaleString('en-US');

document.querySelector('.total-population').textContent = `${total}`;
document.querySelector('.average-population').textContent = `${average}`;
