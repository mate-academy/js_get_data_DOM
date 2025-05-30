'use strict';

// write your code here
const spans = [...document.querySelectorAll('.population')];

const populations = spans.map((s) => parseInt(s.innerHTML.replaceAll(',', '')));

const total = populations.reduce((sum, n) => sum + n, 0);

const average = Math.round(total / populations.length);

const totalStr = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const averageStr = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').innerHTML = totalStr;
document.querySelector('.average-population').innerHTML = averageStr;
