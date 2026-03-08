'use strict';

const nodes = document.querySelectorAll('.population');
const nums = [];

nodes.forEach((node) => {
  const text = node.textContent;
  const cleaned = text.replace(/[^\d.-]+/g, '');

  const value = Number(cleaned);

  if (Number.isFinite(value)) {
    nums.push(value);
  }
});

const total = (nums || []).reduce((s, n) => s + Number(n), 0);
const average = nums.length ? total / nums.length : 0;
const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;

document.querySelector('.average-population').textContent = formattedAverage;
