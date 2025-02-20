'use strict';

const spans = document.querySelectorAll('.population');

let sum = 0;

spans.forEach((span) => {
  const number = parseFloat(span.innerText.replace(/,/g, ''));

  if (!isNaN(number)) {
    sum += number;
  }
});

const average = sum / spans.length;

document.querySelector('.total-population').innerText = sum.toLocaleString();

document.querySelector('.average-population').innerText =
  average.toLocaleString(undefined, { maximumFractionDigits: 0 });
