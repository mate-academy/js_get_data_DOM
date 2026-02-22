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

if (nums.length > 0) {
  const total = nums.reduce((sum, num) => sum + num, 0);

  const avarage = Math.round(total / nums.length);

  const formattedTotal = total.toLocaleString('en-US');

  const formattedAverage = avarage.toLocaleString('en-US');

  const totalEl = document.querySelector('.total-population');
  const avgEl = document.querySelector('.average-population');

  if (totalEl) {
    totalEl.textContent = formattedTotal;
  }

  if (avgEl) {
    avgEl.textContent = formattedAverage;
  }
} else {
  const totalEl = document.querySelector('.total-population');
  const avgEl = document.querySelector('.average-population');

  if (totalEl) {
    totalEl.textContent = '0';
  }

  if (avgEl) {
    avgEl.textContent = '0';
  }
}
