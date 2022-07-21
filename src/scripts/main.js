'use strict';

const population = document.querySelectorAll('.population');
const htmlTotal = document.querySelector('.total-population');
const htmlAvarage = document.querySelector('.average-population');

const data = [...population].map(
  item => Number(item.innerText.split(',').join(''))
);

const total = data.reduce((prev, elem) => prev + elem, 0);
const average = total / data.length;

htmlTotal.innerHTML = total.toLocaleString('en-us');
htmlAvarage.innerHTML = average.toLocaleString('en-us');
