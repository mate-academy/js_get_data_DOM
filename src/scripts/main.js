'use strict';

const popul = document.querySelectorAll('.population');

const dates = [...popul].map(date => date.innerText);

const numbersOfDates = dates.map(elem => parseFloat(elem.replace(/,/g, '')));

const total = numbersOfDates.reduce((a, b) => a + b);
const averageAges = total / numbersOfDates.length;

const totalAgesInWeb = document.querySelector('.total-population');
const averagelAgesInWeb = document.querySelector('.average-population');

totalAgesInWeb.innerText = total.toLocaleString('en-US');
averagelAgesInWeb.innerText = averageAges.toLocaleString('en-US');
