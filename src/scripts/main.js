'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const list = [...document.querySelectorAll('.population')];

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const listOfNumbers = list.map(item => +item.innerText.split(',').join(''));
let total = listOfNumbers.reduce((accumulator, item) => accumulator + item);
let average = total / listOfNumbers.length;

total = numberWithCommas(total);
average = numberWithCommas(average);

totalPopulation.innerText = total;
averagePopulation.innerText = average;
