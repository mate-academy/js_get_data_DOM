'use strict';

const list = document.querySelectorAll('.population');
const text = [...list].map(item => item.innerText);
const number = text.map(elem => +elem.split(',').join(''));
const totalSumm = number.reduce((a, b) => a + b);
const desima = new Intl.NumberFormat('en-GB');
const total = desima.format(totalSumm);
const average = desima.format(totalSumm / number.length);

document.querySelector('.total-population').textContent = total;
document.querySelector('.average-population').textContent = average;
