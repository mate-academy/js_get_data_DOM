'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map((num) => Number(num.innerText.replace(/[^\d]/g, '')));

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPopulation = populations.reduce((acc, country) => acc + country, 0);

total.innerText = totalPopulation.toLocaleString();
average.innerText = (totalPopulation / populations.length).toLocaleString();
