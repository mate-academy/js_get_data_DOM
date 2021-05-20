'use strict';

const items = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const aver = document.querySelector('.average-population');

const arrayItems = [...items].map(item =>
  Number(item.innerText.split(',').join('')));
const sumNumber = arrayItems.reduce((a, b) => a + b);
const sum = sumNumber.toLocaleString().replace(/\s/g, ',');
const average = (sumNumber / arrayItems.length).toLocaleString()
  .replace(/\s/g, ',');

total.innerText = sum;
aver.innerText = average;
