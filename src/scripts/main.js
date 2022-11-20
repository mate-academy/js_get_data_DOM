'use strict';

let total = 0;
let average = 0;
const items = document.querySelectorAll('.population');

for (const node of [...items]) {
  total += Number(node.innerText.split(',').join(''));
}

average = total / [...items].length;

total = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
average = average.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').innerText = total;
document.querySelector('.average-population').innerText = average;
