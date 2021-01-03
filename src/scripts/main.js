'use strict';

const countries = document.querySelectorAll('span.population');

const countriesPop = [...countries]
  .map(country => +country.innerText
    .split(',')
    .join(''));

const total = document.querySelector('span.total-population');

total.innerText = countriesPop.reduce((a, b) => a + b);

const average = document.querySelector('span.average-population');

average.innerText = total.innerText / countriesPop.length;

total.innerText = total.innerText.replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1,');

average.innerText = average.innerText
  .replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1,');
