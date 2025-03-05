'use strict';

const elements = document.querySelectorAll('.population');
const arrElements = Array.from(elements).map((element) =>
  parseInt(element.innerText.replace(/,/g, '')),
);

const total = arrElements.reduce((acc, curr) => acc + curr, 0);
const avg = Math.round(total / arrElements.length);

function numToString(el) {
  return el.toLocaleString();
}

document.querySelector('.total-population').innerHTML = numToString(total);
document.querySelector('.average-population').innerHTML = numToString(avg);
