'use strict';

const list = document.querySelectorAll('.population');
const total = [...list].map(item => item.innerText.split(',').join(''));

const totalString = total.reduce((acc, item) => +acc + +item);
const averageString = totalString / total.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = totalString.toLocaleString('en-US');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = averageString.toLocaleString('en-US');
