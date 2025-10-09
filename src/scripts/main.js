'use strict';

// write your code here
const nodes = document.querySelectorAll('.population');
const values = [...nodes].map((elem) => elem.textContent.trim());
const numbers = values.map((v) => Number(v.replace(/[^0-9.-]/g, '')));
const total = numbers.reduce((s, n) => s + n, 0);
const average = numbers.length ? total / numbers.length : 0;
const fmt = new Intl.NumberFormat('en-US');

document.querySelector('.total-population').textContent = fmt.format(total);
document.querySelector('.average-population').textContent = fmt.format(average);
