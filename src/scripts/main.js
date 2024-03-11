'use strict';

const populations = Array.from(document.querySelectorAll('span.population'));

const total = populations
  .map((span) => {
    return +span.textContent
      .split('')
      .filter((char) => ![',', ' '].includes(char))
      .join('');
  })
  .reduce((acc, num) => acc + num, 0);

const avg = (total / populations.length).toLocaleString('en-US');

const linterBad = document.querySelector('.total-population');

linterBad.innerHTML = total.toLocaleString('en-US');

document.querySelector('.average-population').innerText = avg;
