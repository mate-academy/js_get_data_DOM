'use strict';

const spans = document.querySelectorAll('span.population');

const populations = Array.from(spans)
  .map((span) => span.textContent.trim())
  .map((text) => Number(text.replace(/\D/g, '')))
  .filter((num) => !isNaN(num));

const total = populations.reduce((sum, num) => sum + num, 0);

const average = populations.length > 0 ? total / populations.length : 0;

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('total-output').innerText =
    total.toLocaleString('en-US');

  document.getElementById('average-output').innerText =
    average.toLocaleString('en-US');
});
