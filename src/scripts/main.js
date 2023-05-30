'use strict';

const popTags = document.querySelectorAll('.population');
let items = [];

popTags.forEach(element => {
  const text = element.innerText;

  items.push(text);
});

items.map(n => n.toLocaleString('en-Us'));
items = items.map(str => parseFloat(str.replace(/,/g, '')));

const totalPop = items.reduce((sum, currentVal) => sum + currentVal, 0);
const averagePop = totalPop / items.length;

const totalPopTag = document.querySelector('.total-population');
const averagePopTag = document.querySelector('.average-population');

totalPopTag.innerText = totalPop.toLocaleString('en-US');
averagePopTag.innerText = averagePop.toLocaleString('en-US');
