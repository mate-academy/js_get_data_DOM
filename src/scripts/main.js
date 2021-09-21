'use strict';

const obj = [];

const population = document.querySelectorAll('.population');
const number = [...population].map(item => item.innerText);

for (let i = 0; i < number.length; i++) {
  const string = number[i].split(',').join('');

  obj.push(Number(string));
}

const total = obj.reduce((tot, amount) => tot + amount);

const average = total / obj.length;

const totale = document.querySelector('.total-population');

totale.innerHTML = total.toLocaleString('en-US');

const averagee = document.querySelector('.average-population');

averagee.innerHTML = average.toLocaleString('en-US');
