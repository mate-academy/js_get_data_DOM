'use strict';

// write your code here
const arr = [];

const popul = document.querySelectorAll('.population');
const numb = [...popul].map(item => item.innerText);

for (let i = 0; i < numb.length; i++) {
  const str = numb[i].split(',').join('');

  arr.push(Number(str));
}

const total = arr.reduce((tot, amount) => tot + amount);

const average = total / arr.length;

const totale = document.querySelector('.total-population');

totale.innerHTML = total.toLocaleString('en-US');

const averagee = document.querySelector('.average-population');

averagee.innerHTML = average.toLocaleString('en-US');
