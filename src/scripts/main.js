'use strict';

const populationSpans = document.querySelectorAll('.population');

const toNumber = (span) => Number(span.textContent.replace(/,/g, ''));
const populations = [...populationSpans].map(toNumber);

const total = populations.reduce((sum, val) => sum + val, 0);
const average = Math.round(total / populations.length);

const format = (num) => num.toLocaleString('en-US');

document.querySelector('.total-population').textContent = format(total);
document.querySelector('.average-population').textContent = format(average);
