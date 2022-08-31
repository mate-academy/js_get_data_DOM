'use strict';

// write your code here
const items = document.querySelectorAll('.population');
const peoples = [...items].map((item) => item.innerText.split(',').join(''));
const sum = peoples.reduce((acc, item) => acc + +item, 0);
const average = sum / peoples.length;

document.querySelector('.total-population'
).textContent = sum.toLocaleString('en-ES');

document.querySelector('.average-population'
).textContent = average.toLocaleString('en-ES');
