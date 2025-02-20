'use strict';

const population = [...document.querySelectorAll('.population')];

const num = Array.from(population).map((ele) => {
  const txt = ele.textContent.replace(/,/g, '');

  return +txt;
});

const total = num.reduce((acc, value) => acc + value, 0);
const average = total / num.length;

const averageCount = document.querySelector('.average-population');
const totalCount = document.querySelector('.total-population');

averageCount.textContent = average.toLocaleString();
totalCount.textContent = total.toLocaleString();
