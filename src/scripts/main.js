'use strict';

// write your code here

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const list = [...document.querySelectorAll('.population')]
  .map(country => +country.textContent.split(',').join(''));
const totalPopulation = list.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / list.length;

total.textContent = totalPopulation
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

average.textContent = averagePopulation
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
