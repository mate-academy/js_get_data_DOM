'use strict';

const elemPopulation = document.querySelectorAll('.population');
const values = [...elemPopulation].map((item) =>
  +(item.innerText.split(',').join('')));

const total = values.reduce((sum, item) => sum + item, 0);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = (total / values.length).toLocaleString('en-US');
