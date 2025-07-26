'use strict';

const span = document.querySelectorAll('.population');
let result = 0;
let count = 0;

span.forEach((el) => {
  let text = el.textContent.trim();

  text = text.replace(/,/g, '');

  if (isFinite(text)) {
    result += Number(text);
    count++;
  }
});

const average = count > 0 ? result / count : 0;

const formattedTotal = result.toLocaleString();

const formattedAverage = average.toLocaleString(undefined, {
  maximumFractionDigits: 0,
});

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

if (averageSpan) {
  averageSpan.textContent = formattedAverage;
}

if (totalSpan) {
  totalSpan.textContent = formattedTotal;
}
