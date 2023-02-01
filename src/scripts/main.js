'use strict';

// write your code here
const items = document.querySelectorAll('.list__item');
const total = document.querySelector('.total').querySelector('span');
const average = document.querySelector('.average').querySelector('span');
let sum = 0;
let index = 0;

for (const item of [...items]) {
  const temp = item.querySelector('span').innerText.replace(/,/g, '');

  sum += parseInt(temp, 10);
  index++;
}

total.innerText = sum.toLocaleString('en-Us');
average.innerText = (sum / index).toLocaleString('en-Us');
