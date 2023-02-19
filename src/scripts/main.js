'use strict';

const textData = document.getElementsByClassName('population');
const totalValue = document.getElementsByClassName('total-population')[0];
const averageValue = document.getElementsByClassName('average-population')[0];

const list = [...textData]
  .map(text => Number(text.textContent.split(',').join('')));

const numberFormatter = Intl.NumberFormat('en-US');

totalValue.textContent = list.reduce((a, b) => a + b, 0);
averageValue.textContent = totalValue.textContent / list.length;

totalValue.textContent = numberFormatter.format(totalValue.textContent);
averageValue.textContent = numberFormatter.format(averageValue.textContent);
