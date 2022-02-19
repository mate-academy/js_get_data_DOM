'use strict';

const list = document.querySelectorAll('.population');
const texts = [...list].map(item => item.innerText);
let sum = 0;
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

for (let i = 0; i < texts.length; i++) {
  sum += Number(texts[i].replace(/[\s.,%]/g, ''));
}

const ave = sum / (texts.length - 1);

total.textContent = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
average.textContent = ave.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
