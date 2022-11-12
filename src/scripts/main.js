'use strict';

const list = document.querySelectorAll('.population');
const text = [...list].map(item => item.innerText);
const number = text.map(elem => +elem.split(',').join(''));
const totalSumm = number.reduce((a, b) => a + b);
const desima = new Intl.NumberFormat('en-GB');
const correctSumm = desima.format(totalSumm);
const average1 = desima.format(totalSumm / number.length);

document.querySelector('.total-population').innerHTML = correctSumm;
document.querySelector('.average-population').innerHTML = average1;
