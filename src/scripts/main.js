'use strict';

const spans = document.querySelectorAll('.population');
const numberSpans = [...spans].map(span =>
  Number(span.textContent.replace(/,/g, '')));

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const totalPopulation = numberSpans.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

const averagePopulation = totalPopulation / numberSpans.length;

totalSpan.innerHTML = totalPopulation.toLocaleString('en-US');
averageSpan.innerHTML = averagePopulation.toLocaleString('en-US');
