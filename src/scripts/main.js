'use strict';

const collectionOfSpan = document.querySelectorAll('.population');
const arrayOfSpan = [...collectionOfSpan].map(span => (
  +span.textContent.replace(/,/g, '')));
const total = arrayOfSpan.reduce((a, b) => a + b);
const average = total / collectionOfSpan.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total;
averageSpan.textContent = average;
