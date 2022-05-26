'use strict';

let total = 0;
let average = 0;

const items = document.querySelectorAll('.population');

for (const item of items) {
  total += Number(item.textContent.split(',').join(''));
}

average = total / items.length;

const totalElement = document.querySelector('.total');

totalElement.children[0].textContent = total.toLocaleString('en');

const averageElement = document.querySelector('.average');

averageElement.children[0].textContent = average.toLocaleString('en');
