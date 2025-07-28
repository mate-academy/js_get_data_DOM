'use strict';
/* eslint-disable function-paren-newline */

// write your code here
const spans = document.querySelectorAll('.population');

let cleanSpans = Array.from(spans);

cleanSpans = cleanSpans.map((span) =>
  Number(span.innerText.replaceAll(',', '')),
);

const total = cleanSpans.reduce((result, num) => {
  return result + num;
}, 0);

const average = Math.round(total / cleanSpans.length);

document.querySelector('.average-population').innerText =
  average.toLocaleString();

document.querySelector('.total-population').innerText = total.toLocaleString();
