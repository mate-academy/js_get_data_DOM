'use strict';

const nodes = document.querySelectorAll('.population');
const arr = [];

for (let i = 0; i < nodes.length; i++) {
  arr.push(nodes[i].innerHTML.split(',').join(''));
}

const total = arr2.reduce((a, b) => +a + +b);
const average = total / 10;

const totalHtml = document.querySelector('.total');
const averageHtml = document.querySelector('.average');

totalHtml.innerHTML = total.toLocaleString('en');
averageHtml.innerHTML = average.toLocaleString('en');