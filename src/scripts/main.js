'use strict';

// write your code here
const items = document.querySelectorAll('.population');

const texts = [...items].map(item => item.innerText);
const arr = [];

for (const num of texts) {
  const key = num.replace(/[\s.,%]/g, '');

  arr.push(Number(key));
}

const total = arr.reduce((sum, el) => sum + el, 0);
const average = arr.reduce((sum, el) => sum + el / arr.length, 0.0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total.toLocaleString('de-DE');

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average.toLocaleString('de-DE');
