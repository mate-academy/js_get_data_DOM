'use strict';

const element = document.body.getElementsByClassName('population');
let total = 0;

for (const node of element) {
  const fromNumberToText = parseInt(node.innerText.replace(/\D/g, ''));

  total += fromNumberToText;
}

const average = total / element.length;

const commas = function(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const aver = document.body.querySelector('.average-population');

aver.textContent = commas(average);

const tot = document.body.querySelector('.total-population');

tot.textContent = commas(total);
