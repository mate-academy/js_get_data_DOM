'use strict';

const list = [...document.querySelectorAll('.population')];

const arrNew = list.map(item => +item.innerText.replace(/,/g, ''));

const total = arrNew.reduce((sum, current) => sum + current, 0);

const average = total / arrNew.length;

const itemTotal = document.querySelector('.total-population');
const itemAverage = document.querySelector('.average-population');

itemTotal.innerHTML = total.toLocaleString('en');

itemAverage.innerHTML
  = average.toLocaleString('en');
