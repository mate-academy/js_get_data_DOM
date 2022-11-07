'use strict';

const nodes = document.querySelectorAll('.population');

const arr = [];
let arr2 = [];
for (let i = 0; i < nodes.length; i++) {
 arr.push(nodes[i].innerHTML);
}


for (let i = 0; i < arr.length; i++) {
  const str = arr[i].split('').map(el => {
    if (el === ',') {
      return '';
    } else {
      return el;
    }
  });

  arr2.push(str.join(''));
}

const total = arr2.reduce((a, b) => +a + +b);
const average = total / 10;

const totalHtml = document.querySelector('.total');
const averageHtml = document.querySelector('.average');

totalHtml.innerHTML = total.toLocaleString('en');
averageHtml.innerHTML = average.toLocaleString('en');