'use strict';

const nodes = document.querySelectorAll('.population');
const texts = Array.from(nodes).map((el) => el.textContent.trim());
const cleaned = texts.map((el) => el.replace(/,/g, ''));

const nums = cleaned.map((s) => Number(s)).filter((n) => !Number.isNaN(n));

if (nums.length > 0) {
  const total = nums.reduce((sum, a) => sum + a, 0);
  const average = total / nums.length;

  const formatter = new Intl.NumberFormat('en-US');

  const formattedTotal = formatter.format(total);
  const formattedAverage = formatter.format(Math.round(average));

  const avgPl = document.querySelector('.average-population');
  const ttlPl = document.querySelector('.total-population');

  avgPl.textContent = formattedAverage;
  ttlPl.textContent = formattedTotal;
}
