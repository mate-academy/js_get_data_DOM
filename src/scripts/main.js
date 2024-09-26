'use strict';

const spans = document.querySelectorAll('.population');
const population = [...spans].map(span => +span.innerHTML.split(',').join(''));

const total = population.reduce((a, b) => a + b, 0);
const average = total / population.length;

const totalDecimal = total.toLocaleString('en-US', { style: 'decimal' });
const avgDecimal = average.toLocaleString('en-US', { style: 'decimal' });

document.querySelector('.total-population').textContent = totalDecimal;
document.querySelector('.average-population').textContent = avgDecimal;
