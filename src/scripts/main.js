'use strict';

const data = [...document.querySelectorAll('.population')];

const populations = data.map((value) => {
  const text = value.innerText.trim();
  const numericText = text.split(',').join('');

  return Number(numericText);
});

const total = populations.reduce((sum, value) => sum + value, 0);
const average = Math.round(total / populations.length);

const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

document.querySelector('.total-population').innerText = totalFormatted;
document.querySelector('.average-population').innerText = averageFormatted;
