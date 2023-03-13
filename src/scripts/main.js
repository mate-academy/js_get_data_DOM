'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalItem = document.querySelector('.total-population');
const averageItem = document.querySelector('.average-population');

const arrCitizen = [...population].map((item) => {
  const el = (item.textContent).replaceAll(',', '');

  return (+el);
});

const totalNumber = arrCitizen.reduce((acc, item) => {
  return acc + item;
}, 0);

const averageNumber = totalNumber / (arrCitizen.length);

totalItem.textContent = totalNumber.toLocaleString('en-US');
averageItem.textContent = averageNumber.toLocaleString('en-US');
