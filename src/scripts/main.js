'use strict';

const list = [...document.querySelectorAll('span.population')];

const listNum = list.map((el) => {
  const text = el.textContent.trim();
  const clean = text.replace(/,|\s/g, '');

  const isNumeric = clean.length > 0 && /^-?\d*\.?\d+$/.test(clean);

  if (isNumeric) {
    return Number(clean);
  }

  return null;
});

const nums = listNum.filter((val) => val !== null);

let total;
let avarage;

if (nums.length > 0) {
  total = nums.reduce((sum, num) => sum + num, 0);

  avarage = Math.round(total / nums.length);
}

const formattedTotal = total.toLocaleString('en-US');

const formattedAverage = avarage.toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;

document.querySelector('.average-population').textContent = formattedAverage;
