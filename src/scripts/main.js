'use strict';

// write your code here
const list = document.getElementsByClassName('list')[0];

const countryList = [];

for (const el of list.children) {
  const population = (el.children[1].innerHTML).split(',').join('');

  countryList.push(+population);
}

const total = document.querySelector('.total');

const average = document.querySelector('.average');

total.children[0].textContent = countryList.reduce((a, b) => {
  return +a + +b;
}, 0).toLocaleString('en-US');

average.children[0].textContent = (countryList.reduce((a, b) => {
  return +a + +b;
}, 0) / countryList.length).toLocaleString('en-US');
