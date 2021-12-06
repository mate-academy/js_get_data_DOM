'use strict';

// write your code here

const popul = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const nums = [...popul].map(people => people.innerHTML.split(',').join(''));

let sum = 0;

for (const num of nums) {
  sum += +num;
};

const midl = sum / 10;

total.innerHTML = sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
average.innerHTML = midl.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
