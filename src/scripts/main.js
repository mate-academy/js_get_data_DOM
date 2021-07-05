'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const list = [...document.querySelectorAll('.population')];

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const listOfNumbers = list.map(item => +item.innerText.split(',').join(''));
const total = listOfNumbers.reduce((accumulator, item) => accumulator + item);
const average = total / listOfNumbers.length;

totalPopulation.innerText = numberWithCommas(total);
averagePopulation.innerText = numberWithCommas(average);
