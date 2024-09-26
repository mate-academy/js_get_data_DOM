'use strict';

// write your code here

const populationCollection = document.querySelectorAll('.population');

const populationArray = [ ...populationCollection ]
  .map((i) => +(i.innerHTML.replace(/,/g, '')));

const total = populationArray
  .reduce((accumulator, value) => accumulator + value);

const average = total / populationArray.length;

const totalDisplay = document.querySelector('.total-population');
const averageDisplay = document.querySelector('.average-population');

totalDisplay.innerText = total.toLocaleString('en-US');
averageDisplay.innerText = average.toLocaleString('en-US');
