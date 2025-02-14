'use strict';

const elements = [...document.querySelectorAll('.population')];
const averageElement = document.querySelectorAll('.average-population');
const totalElement = document.querySelectorAll('.total-population');

let average = 0;
let total = 0;
const elementsArr = [];

elements.forEach((item) => {
  elementsArr.push(item.textContent.split(',').join(''));
});

for (let i = 0; i < elementsArr.length; i++) {
  total = total + +elementsArr[i];
}

average = total / elementsArr.length;

averageElement[0].textContent = average.toLocaleString('en-US');
totalElement[0].textContent = total.toLocaleString('en-US');
