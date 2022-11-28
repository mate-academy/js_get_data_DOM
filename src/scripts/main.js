'use strict';

const thousandsSeparator = (n) => n.toLocaleString('en-Us');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const pop = document.querySelectorAll('.population');
const arrPop = [...pop].map(el => el.innerText);
const arrPopToNum = arrPop.map(el => +el.split(',').join(''));
const len = arrPopToNum.length;
const totPop = arrPopToNum.reduce((acc, el) => acc + el);
const averagePop = totPop / len;

total.textContent = thousandsSeparator(totPop);
average.textContent = thousandsSeparator(averagePop);
