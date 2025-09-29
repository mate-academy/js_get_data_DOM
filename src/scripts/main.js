'use strict';

const nodes = document.querySelectorAll('span.population');
const texts = [...nodes].map((el) => el.textContent.trim()).filter(Boolean);

let separator = ',';

for (const t of texts) {
  const match = t.match(/(\d)([ ,.\u00A0.])\d{3}/);

  if (match) {
    separator = match[2];
    break;
  }
}

const populations = texts
  .map((t) => Number(t.replace(/[^\d-]/g, '')))
  .filter(Number.isFinite);

if (populations.length > 0) {
  const total = populations.reduce((acc, num) => acc + num, 0);
  const avg = Math.round(total / populations.length);

  const format = (n) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  const totalElement = document.querySelector('span.total-population');
  const avgElement = document.querySelector('span.average-population');

  totalElement.textContent = format(total);
  avgElement.textContent = format(avg);
}
