'use strict';

const list = [...document.querySelectorAll('span.population')];

const listNum = list.map((el) => {
  const text = el.textContent.trim();
  const clean = text.replace(/,/g, '');
  const number = Number(clean);

  return !isNaN(number) ? number : null;
});

const nums = listNum.filter((val) => val !== null);

const total = nums.reduce((sum, num) => sum + num, 0);

const avarage = total / nums.length;

const formattedTotal = total.toLocaleString('en-US');

const formattedAverage = avarage.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});

document.querySelector('.total-population').textContent = formattedTotal;

document.querySelector('.average-population').textContent = formattedAverage;
