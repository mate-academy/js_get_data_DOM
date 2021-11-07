'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const numbers = [...population]
  .map(text => +text.innerHTML.split(',').join(''));

const totalNumb = numbers.reduce((prev, next) => prev + next);
const averageNumb = totalNumb / numbers.length;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

total.innerText = numberWithCommas(totalNumb);
average.innerText = numberWithCommas(averageNumb);
