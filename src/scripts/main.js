'use strict';

const element = document.body.getElementsByClassName('population');
let total = 0;
let counter = 0;

for (const node of element) {
  counter++;

  const fromNumberToText = parseInt(node.innerText.replace(/\D/g, ''));

  total += fromNumberToText;
}

const average = total / counter;

const aver = document.body.querySelector('.average-population');

aver.textContent = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const tot = document.body.querySelector('.total-population');

tot.textContent = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
