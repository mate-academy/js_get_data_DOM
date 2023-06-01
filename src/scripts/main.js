'use strict';

const popTags = document.querySelectorAll('.population');
const items = [...popTags].map(element => {
  const text = element.innerText;

  return parseFloat(text.replace(/,/g, ''));
});

const totalPop = items.reduce((sum, currentVal) => sum + currentVal, 0);
const averagePop = totalPop / items.length;

const totalPopTag = document.querySelector('.total-population');
const averagePopTag = document.querySelector('.average-population');

totalPopTag.innerText = totalPop.toLocaleString('en-US');
averagePopTag.innerText = averagePop.toLocaleString('en-US');
