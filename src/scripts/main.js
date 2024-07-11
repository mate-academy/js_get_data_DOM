'use strict';

// write your code here

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const population = document.getElementsByClassName('population');

const data = [];

for (const el of population) {
  const tmp = el.innerText;

  data.push(parseInt(tmp.replaceAll(',', '')));
}

const totalData = data.reduce((el, el2) => el + el2, 0);
const averageData = totalData / data.length;

total.innerHTML = totalData.toLocaleString('en-US');

average.innerHTML = averageData.toLocaleString('en-US');
