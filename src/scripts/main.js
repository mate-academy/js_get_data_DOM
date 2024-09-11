'use strict';

const span = [...document.documentElement.querySelectorAll('span')];
let sum = 0;

const total = span.find(
  (element) => element.getAttribute('class') === 'total-population',
);

const average = span.find(
  (element) => element.getAttribute('class') === 'average-population',
);

const length = span.filter((element) => {
  if (element.getAttribute('class') === 'population') {
    sum += +element.textContent.split(',').join('');

    return element;
  }
}).length;

total.textContent = sum.toLocaleString('en-US');
average.textContent = (sum / length).toLocaleString('en-US');
