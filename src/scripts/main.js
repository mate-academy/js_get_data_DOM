'use strict';

const population = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const parsedArr = [...population].map(n => (+n.innerText.replace(/,/g, '')));

const total = parsedArr.reduce((a, b) => a + b);

const average = total / parsedArr.length;

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = average.toLocaleString('en-US');
