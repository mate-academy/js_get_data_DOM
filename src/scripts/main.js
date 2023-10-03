'use strict';

const list = document.querySelector('.list');
const total = document.querySelector('.total');
const average = document.querySelector('.average');

const stringArr = [...list.children]
  .map(item => item.children[1].textContent);

const numbersArr = stringArr.map(str => parseFloat(str.replace(/,/g, '')));

const totalCount = numbersArr.reduce((a, b) => a + b, 0);
const averageCount = totalCount / numbersArr.length;

total.children[0].textContent = totalCount.toLocaleString();
average.children[0].textContent = averageCount.toLocaleString();
