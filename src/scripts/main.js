'use strict';

const list = document.querySelectorAll('.population');
const texts = [...list].map(item => item.innerText);
let sum = 0;

for (let i = 0; i < texts.length; i++) {
  sum += Number(texts[i]);
}

const ave = sum / (texts.length - 1);
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = sum;
average.textContent = ave;
