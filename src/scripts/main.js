'use strict';

// write your code here
const sp = document.querySelectorAll('.population');
const avareng = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

let totall = 0;
const coun = sp.length;
let count = 0;

sp.forEach((item) => {
  totall += Number(item.textContent.replace(/,/g, ''));
});
count = totall / coun;

avareng.textContent = Math.round(count).toLocaleString();
total.textContent = totall.toLocaleString();
