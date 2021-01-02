'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populationList = document.querySelectorAll('.population');

const populationArray = [...populationList];

const wholePopulation = populationArray.reduce((acc, item) =>
  acc + Number(item.innerText.split(',').join('')), 0);

total.innerText = wholePopulation;
average.innerText = wholePopulation / populationArray.length;
