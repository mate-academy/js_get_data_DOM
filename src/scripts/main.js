'use strict';

const populationArray = [...document.querySelectorAll('.population')]
  .map(x => x.innerText);

const numbersArray = populationArray.map(x => x.split(',').join(''));

const total = numbersArray.reduce((a, b) => Number(a) + Number(b), 0);

const nf = new Intl.NumberFormat('en-US');
const average = nf.format(total / numbersArray.length);
const totalResult = nf.format(total);

const totalHTML = document.querySelector('.total-population');
const averageHTML = document.querySelector('.average-population');

totalHTML.innerText = totalResult;
averageHTML.innerText = average;
