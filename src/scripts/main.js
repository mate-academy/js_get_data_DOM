'use strict';

const data = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const successData = [];

data.forEach(amount => successData.push(+amount.innerHTML.replaceAll(',', '')));

const total = successData.reduce((prev, acc) => prev + acc, 0);
const average = total / successData.length;

totalSpan.innerHTML = total.toLocaleString('en-US');
averageSpan.innerHTML = average.toLocaleString('en-US');
