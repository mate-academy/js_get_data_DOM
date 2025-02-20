'use strict';

// write your code here
const dataSpans = document.querySelectorAll('.population');
let dataCount = 0;
let total = 0;

dataSpans.forEach(el => {
  const amount = Number(el.innerHTML.replaceAll(',', ''));

  total += amount;
  dataCount++;
});

const formattedTotal = total.toLocaleString('en-US');
const average = (total / dataCount).toLocaleString('en-US');

const totalSpan = document.querySelector('.total > .total-population');
const averageSpan = document.querySelector('.average > .average-population');

totalSpan.innerText = formattedTotal;
averageSpan.innerText = average;
