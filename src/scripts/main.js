'use strict';

const populationsColection = document.getElementsByClassName('population');
const totalPopulation = document.getElementsByClassName('total-population');
const avaragePopulation = document.getElementsByClassName('average-population');

const populations = [...populationsColection].map(item =>
  +item.innerText.replace(/,/g, ''));

const total = populations.reduce((prev, sum) => prev + sum);
const average = total / populations.length;

totalPopulation[0].textContent
  = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

avaragePopulation[0].textContent
  = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
