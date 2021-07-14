'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const values = [...population].map(val => val.innerHTML);
const formatedValue = [];

for (const value of values) {
  const str = value.replace(/,/g, '');

  formatedValue.push(+str);
}

const sumOfPopulations = formatedValue.reduce((acc, val) => acc + val, 0);
const averageOfPopulation = sumOfPopulations / formatedValue.length;
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = new Intl.NumberFormat('en-EN').format(sumOfPopulations);
average.innerHTML = new Intl.NumberFormat('en-EN').format(averageOfPopulation);
