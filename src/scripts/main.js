'use strict';

// write your code here

const spans = document.querySelectorAll('.population');

const number = Array.from(spans).map((span) => {
  const clean = span.textContent.replace(/,/g, '');
  const num = Number(clean);

  return isNaN(num) ? 0 : num;
});

const total = number.reduce((acc, val) => acc + val, 0);
const avarage = total / number.length;

const formattedTotal = total.toLocaleString();
const formattedAvarage = Math.round(avarage).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAvarage;
