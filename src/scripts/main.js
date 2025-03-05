'use strict';

const body = document.body;
const nodeList = body.querySelectorAll('.pupulation');
/* Nodelist  типу масив*/
const array = Array.from(nodeList);

let total = array.reduce((accum, item) => {
  return accum + +item.textContent;
},0);

let average = total / array.length;

let formattedTotal = total.toLocaleString();
let formattedAverage = average.toLocaleString();


document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;

