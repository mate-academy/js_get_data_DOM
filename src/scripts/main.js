'use strict';

const spanElement = document.getElementsByClassName('population');
const totalElement = document.getElementsByClassName('total-population')[0];
const averageElement = document.getElementsByClassName('average-population')[0];

let sum = 0;

for (const item of spanElement) {
  const spanElementContent = item.innerHTML.replace(/,/g, '');

  sum += parseInt(spanElementContent);
}

const avg = sum / spanElement.length;

totalElement.innerHTML = `${sum.toLocaleString('en-US')}`;
averageElement.innerHTML = `${avg.toLocaleString('en-US')}`;
