'use strict';

function separator(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const populationSpans = document.getElementsByClassName('population');

const populationData = [];

for (let i = 0; i < populationSpans.length; i++) {
  const text = populationSpans[i].textContent;

  populationData.push(parseFloat(text.replace(/,/g, '')));
}

// eslint-disable-next-line max-len
const total = (populationData.reduce((a, b) => a + b, 0));
const avg = total / populationData.length;

const totalSpans = document.getElementsByClassName('total-population')[0];
const avgSpans = document.getElementsByClassName('average-population')[0];

totalSpans.innerText = separator(total);
avgSpans.innerText = separator(avg);
