'use strict';

const spans = document.querySelectorAll('.population');

const textData = [];

spans.forEach((span) => {
  textData.push(span.textContent);
});

const numberData = textData.map((text) => {
  if (parseFloat(text)) {
    return parseFloat(text);
  }

  return null;
});

const totalValue = numberData.reduce((num, count) => count + num, 0);
const averageValue = totalValue / numberData.length;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = averageValue.toLocaleString('en-US');
totalSpan.textContent = totalValue.toLocaleString('en-US');
