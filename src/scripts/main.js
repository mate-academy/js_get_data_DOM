'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const populationNum = [...population].map(
  el => parseInt(el.textContent.split(',').join(''), 10)
);

const sum = populationNum.reduce((prevNum, currentNum) => {
  return prevNum + currentNum;
});

const avergPopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

avergPopulation.innerHTML = (sum / population.length).toLocaleString('en');
totalPopulation.innerHTML = sum.toLocaleString('en');
