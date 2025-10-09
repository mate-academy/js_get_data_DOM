'use strict';

// write your code here
const populations = document.querySelectorAll('span.population');
const allText = Array.from(populations).map((span) => span.textContent);

let total = 0;

for (const i of allText) {
  const num = Number(i.replace(/,/g, ''));

  total += num;
}

const average = total / allText.length;

document.querySelector('span.total-population').textContent =
  total.toLocaleString();

document.querySelector('span.average-population').textContent =
  average.toLocaleString();
