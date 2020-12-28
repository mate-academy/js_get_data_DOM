'use strict';

const arr = document.getElementsByClassName('population');

const countries = [...arr].map((x, i) => x.innerHTML);

const countriesPop = countries.map(x => Number(x.split(',').join('')));

const sumPopulation = countriesPop.reduce((a, b) => a + b);

const averagePopulation = sumPopulation / countriesPop.length;

const elementSum = document.getElementsByClassName('total-population');

const elementAvg = document.getElementsByClassName('average-population');

elementSum[0].innerHTML = `${sumPopulation}`;

elementAvg[0].innerHTML = `${averagePopulation}`;
