'use strict';

const people = document.querySelectorAll('.population');
const population = [...people].map(item => item.innerText);

let total = 0;

for (let i of population) {
  i = +i.split(',').join('');
  total += i;
}

let average = total / population.length;

total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
average = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


let replaceTotal = document.querySelector('.total-population');
replaceTotal.innerText = total;

let replaceAverage = document.querySelector('.average-population');
replaceAverage.innerText = average;
