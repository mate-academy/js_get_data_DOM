'use strict';

const element = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const textRes = [...element].map(item => item.innerText);

const number = textRes.map(num => +num.replace(/,/g, ''));

const totalNum = number.reduce((sum, x) => sum + x);

const averageNum = totalNum / number.length;

total.innerText = totalNum.toLocaleString();
average.innerText = averageNum.toLocaleString();
