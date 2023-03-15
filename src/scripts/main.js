'use strict';

const items = document.querySelectorAll('.population');

const populations = [...items].map(item => +item.innerText.split(',').join(''));

const result = populations.reduce((sum, item) => sum + item, 0);

const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

total.textContent = result.toLocaleString('en-US');
average.textContent = (result / populations.length).toLocaleString('en-US');
