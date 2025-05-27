'use strict';

const populations = document.querySelectorAll('span.population');
const texts = Array.from(populations).map((span) => span.textContent);

let total = 0;

for (let i = 0; i < texts.length; i++) {
  const cleaned = texts[i].replace(/,/g, '');

  total += Number(cleaned);
}

const average = total / texts.length;

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
