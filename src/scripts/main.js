'use strict';

// write your code here
const array = [...document.querySelectorAll('.population')];
const map = array.map(country => +country.innerText.replaceAll(',', ''));
const sum = map.reduce((a, b) => a + b);

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = sum.toLocaleString('en-US');
average.innerHTML = (sum / map.length).toLocaleString('en-US');
