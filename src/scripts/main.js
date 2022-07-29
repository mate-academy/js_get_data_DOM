'use strict';

const items = document.querySelectorAll('.population');

const texts = [...items].map(item => item.innerText);
const arr = [];

for (const num of texts) {
  const ojoj = num.replace(/[\s.,%]/g, '');

  arr.push(Number(ojoj));
}

const total = arr.reduce((sum, el) => sum + el, 0);
const average = arr.reduce((sum, el) => sum + el / arr.length, 0.0);

const x = document.querySelector('.total-population');

x.innerHTML = total.toLocaleString('de-DE');

const y = document.querySelector('.average-population');

y.innerHTML = average.toLocaleString('de-DE');
