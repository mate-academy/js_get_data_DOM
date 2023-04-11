'use strict';

const collection = document.querySelectorAll('.population');

const values = [...collection]
  .map(item => +(item.innerText.replaceAll(',', '')));

const total = values.reduce((sum, x) => sum + x);
const average = total / values.length;

document.querySelector('.total-population').innerText
  = total.toLocaleString();

document.querySelector('.average-population').innerText
  = average.toLocaleString();
