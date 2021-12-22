'use strict';

const textData = document.getElementsByClassName('population');
const arrayOfNumbers = [...textData].map(item => item.innerText);
const arrayOfPopulation = arrayOfNumbers.map(item => +item.split(',').join(''));
const total = arrayOfPopulation.reduce((prev, current) => prev + current, 0);
const average = total / arrayOfPopulation.length;

const averPopulation = document.getElementsByClassName('average-population');
const totalPopulation = document.getElementsByClassName('total-population');

totalPopulation[0].innerHTML = total.toLocaleString();
averPopulation[0].innerText = average.toLocaleString();
