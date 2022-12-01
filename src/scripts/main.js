'use strict';

const span = document.getElementsByClassName('population');

let average = 0;
let total = 0;

for (const item of span) {
  const text = item.innerText.replaceAll(',', '');

  total += +text;
}
average = total / span.length;

const averageClass = document.getElementsByClassName('average-population')[0];

const totalClass = document.getElementsByClassName('total-population')[0];

averageClass.innerText = average.toLocaleString('en-Us');
totalClass.innerText = total.toLocaleString('en-Us');
