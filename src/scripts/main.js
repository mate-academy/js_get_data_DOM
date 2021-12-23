'use strict';

const list = document.querySelectorAll('span' && '.population');
const values = [...list];
const value = values.map(a => +a.innerText.split(',').join(''));
const total = value.reduce((prev, a) => {
  const newValue = prev + a;

  return newValue;
});

const average = total / value.length;

const totalHtml = document.querySelectorAll('span' && '.total-population');
const averageHtml = document.querySelectorAll('span' && '.average-population');

totalHtml[0].innerText = total.toLocaleString('en');
averageHtml[0].innerText = average.toLocaleString('en');
