'use strict';

const populations = document.querySelectorAll('.population');

const values = Array.from(populations)
  .map((el) => {
    const txt = el.textContent.trim().replace(/[,\s.]/g, '');
    const num = Number(txt);

    return Number.isFinite(num) ? num : null;
  })
  .filter((num) => num !== null);

const total = values.reduce((sum, num) => sum + num, 0);
const average = values.length > 0 ? Math.round(total / values.length) : 0;

let separator = ',';

if (populations.length > 0) {
  const sample = populations[0].textContent;

  if (sample.includes(' ')) {
    separator = ' ';
  } else if (sample.includes('.')) {
    separator = '.';
  }
}

document.querySelector('.total-population').textContent = total
  .toLocaleString('en-US')
  .replace(/,/g, separator);

document.querySelector('.average-population').textContent = average
  .toLocaleString('en-US')
  .replace(/,/g, separator);
