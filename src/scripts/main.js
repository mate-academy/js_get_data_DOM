'use strict';

const spans = document.querySelectorAll('.population');
const populations = [...spans].map(span =>
  +span.innerText.replace(/[^\d]/g, ''));
const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');
const total = populations.reduce((sum, population) => sum + population);
const average = total / populations.length;

spanTotal.innerText = total.toLocaleString().replace(/[\s]/g, ',');
spanAverage.innerText = average.toLocaleString().replace(/[\s]/g, ',');
