'use strict';

const list = document.querySelectorAll('.population');
const arr = [...list];
let total = 0;
let count = 0;
const validArr = [];

for (let i = 0; i < arr.length; i++) {
  validArr.push([]);

  for (let j = 0; j < arr[i].textContent.length; j++) {
    if (arr[i].textContent[j] !== ',') {
      validArr[i].push(arr[i].textContent[j]);
    }
  }

  validArr[i] = validArr[i].reduce((base, str) => base + str, '');
}

for (const number of validArr) {
  total += +(number);
  count++;
}

const average = total / count;

document.querySelector('.average-population').textContent = average;
document.querySelector('.total-population').textContent = total;
