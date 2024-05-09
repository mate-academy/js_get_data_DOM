'use strict';

const populationCollection = document.querySelectorAll('span.population');
const populationArray = [...populationCollection];

const total = populationArray.reduce((sum, element) => {
  return sum + Number(element.innerHTML.replace('/,/g', ''), 0);
});

const average = total / populationArray.length;

const numberFormatter = Intl.NumberFormat('en-US');

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = numberFormatter.format(total);
averageSpan.textContent = numberFormatter.format(average);
