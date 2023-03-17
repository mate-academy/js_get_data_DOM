'use strict';

const pop = document.querySelectorAll('.population');

const text = [...pop].map(item => item.innerText.replace(/,/g, ''));

const number = text.map(item => Number(item));

const sum = number.reduce((item, a) => item + a, 0);

const average = sum / number.length;

const popTot = document.querySelector('.total-population');
const popAv = document.querySelector('.average-population');

popTot.textContent = sum.toLocaleString().replace(/\s+/g, ',');
popAv.textContent = average.toLocaleString().replace(/\s+/g, ',');
