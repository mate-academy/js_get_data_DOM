'use strict';

const list = document.querySelectorAll('.population');
const newarr = [...list].map(el => +el.innerHTML.split(',').join(''));
const sum = newarr.reduce((prev, item) => prev + item);
const aver = sum / newarr.length;
const summ = document.querySelector('.total-population');
const averr = document.querySelector('.average-population');

summ.textContent = sum.toLocaleString('en-US');
averr.textContent = aver.toLocaleString('en-US');
