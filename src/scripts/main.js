'use strict';

const textData = document.getElementsByClassName('population');
const arrayOfNumbers = [...textData].map(item => item.innerText);
const arrayOfPopulation = arrayOfNumbers.map(item => +item.split(',').join(''));
const total = arrayOfPopulation.reduce((prev, current) => prev + current, 0);
const average = total / arrayOfPopulation.length;

const averPopulation = document.getElementsByClassName('average-population');
const totalPopulation = document.getElementsByClassName('total-population');

Array.from(totalPopulation).forEach(function(item) {
  item.innerText = average.toLocaleString();
});

Array.from(averPopulation).forEach(function(item) {
  item.innerText = total.toLocaleString();
});
