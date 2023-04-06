'use strict';

const items = document.querySelectorAll('.population');
const populations = [...items].map(item => +(item.innerText.replaceAll(',', '')));
const total = populations.reduce((prev, curr) => prev + curr, 0);
const average = total / populations.length;

document.querySelector('.total-population').innerText = total.toLocaleString();
document.querySelector('.average-population').innerText = average.toLocaleString();
