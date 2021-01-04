'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationList = document.querySelectorAll('.population');

const normalize = str => str.toLocaleString('en-US');

const wholePopulation = [...populationList].reduce((acc, item) =>
  acc + Number(item.innerText.split(',').join('')), 0);

total.innerText = normalize(wholePopulation);
average.innerText = normalize(wholePopulation / populationList.length);
