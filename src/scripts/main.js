'use strict';

// write your code here

const popul = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const nums = [...popul].map(people => people.innerHTML.split(',').join(''));
const result = nums.reduce((a, b) => +a + +b);

const midl = result / nums.length;

total.innerHTML = result.toLocaleString('en-US');
average.innerHTML = midl.toLocaleString('en-US');
