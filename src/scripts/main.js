'use strict';

function transformNumber(n) {
  let bilions = Math.floor(n / 1000000000);
  let milions = Math.floor((n - bilions * 1000000000) / 1000000);
  let thousands
    = Math.floor((n - bilions * 1000000000 - milions * 1000000) / 1000);
  let hundreds
    = n - bilions * 1000000000 - milions * 1000000 - thousands * 1000;

  if (bilions >= 1) {
    bilions += ',';
  } else {
    bilions = '';
  }

  if (milions >= 1) {
    milions += ',';
  } else {
    milions = '';
  }

  if (thousands >= 1) {
    thousands += ',';
  } else {
    thousands = '';
  }

  if (hundreds < 10) {
    hundreds = '00' + hundreds;
  }

  if (hundreds < 100) {
    hundreds = '0' + hundreds;
  }

  return `${bilions}${milions}${thousands}${hundreds}`;
}

const spans = document.querySelectorAll('.population');

const numbers = [...spans].map(span => span.innerText);

let total = 0;

for (const number of numbers) {
  total += +number.split(',').join('');
};

const average = total / numbers.length;

document.querySelector('.total-population').innerText = transformNumber(total);

document.querySelector('.average-population').innerText
    = transformNumber(average);
