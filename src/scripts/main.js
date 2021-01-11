'use strict';

const textData = document.querySelectorAll('.population');

const numberData = [ ...textData ]
  .map(text => +text.textContent.replace(/,/g, ''));

const total = numberData.reduce((a, b) => a + b);

const average = total / numberData.length;

const totalPage = document.querySelector('.total-population');

totalPage.textContent = total.toLocaleString();

const averagePage = document.querySelector('.average-population');

averagePage.textContent = average.toLocaleString();
