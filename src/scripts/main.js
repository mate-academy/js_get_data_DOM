'use strict';

// write your code here
const list = document.getElementsByClassName('population');
const texts = Array.from(list)
  .map((el) => el.textContent)
  .map((text) => Number(text.replace(/,/g, '')));

const total = texts.reduce((acc, current) => acc + current, 0);
const average = Math.round(total / texts.length);

document.querySelector('.average-population').textContent =
  average.toLocaleString();

document.querySelector('.total-population').textContent =
  total.toLocaleString();
