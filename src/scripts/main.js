'use strict';

const data = [];

const population = document.querySelectorAll('.population');
const number = [...population].map(item => item.innerText);

for (let i = 0; i < number.length; i++) {
  const string = number[i].split(',').join('');

  data.push(Number(string));
}

const total = data.reduce((tot, amount) => tot + amount);

const average = total / data.length;

const totale = document.querySelector('.total-population');

totale.innerHTML = total.toLocaleString('en-US');

const averagee = document.querySelector('.average-population');

averagee.innerHTML = average.toLocaleString('en-US');
