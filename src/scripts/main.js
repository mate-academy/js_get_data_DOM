'use strict';

const elements = document.querySelectorAll('span.population');
const texts = Array.from(elements).map((el) => el.textContent.trim());

const numb = texts.map((el) => Number(el.replace(/,/g, '')));

const total = numb.reduce((n1, n2) => n1 + n2, 0);

const average = total / numb.length;

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  average.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
