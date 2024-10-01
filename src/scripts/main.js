'use strict';

// write your code here

const elements = [...document.getElementsByClassName('population')];

const formatedElements = elements.map(
  (el) => +el.innerText.split(',').join(''),
);

const sum = formatedElements.reduce((acc, item) => acc + item, 0);
const avg = sum / elements.length;

const totalPopulation = document.getElementById('total-population');
const avgPopulation = document.getElementById('average-population');

totalPopulation.innerHTML = `${sum.toLocaleString('en-US')}`;
avgPopulation.innerHTML = `${avg.toLocaleString('en-US')}`;
