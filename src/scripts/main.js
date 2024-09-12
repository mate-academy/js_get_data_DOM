'use strict';

// const items = document.querySelectorAll('.population');
const popular = Array
  .from(document.querySelectorAll('.population'))
  .map(item => {
    return +item.innerText.split(',').join('');
  });

const total = popular.reduce((accum, item) => {
  return item + accum;
});
const average = total / popular.length;
const spanTotal = document.querySelector('.total-population');
const averageTotal = document.querySelector('.average-population');

spanTotal.innerText = total;

averageTotal.textContent = average;
