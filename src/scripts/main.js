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

let totalWithCommas = '';
const totalString = total.toString().split('').reverse().join('');

for (let i = 0; i < totalString.length; i++) {
  if (i % 3 === 0) {
    totalWithCommas += ',';
  }
  totalWithCommas += totalString[i];
}

let averageWithCommas = '';
const averageString = average.toString().split('').reverse().join('');

for (let i = 0; i < averageString.length; i++) {
  if (i % 3 === 0) {
    averageWithCommas += ',';
  }
  averageWithCommas += averageString[i];
}

totalWithCommas = totalWithCommas.split('').reverse().join('').slice(0, -1);
averageWithCommas = averageWithCommas.split('').reverse().join('').slice(0, -1);

totalDisplay.innerText = totalWithCommas;
averageDisplay.innerText = averageWithCommas;
