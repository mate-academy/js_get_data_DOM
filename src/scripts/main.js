'use strict';

function calculateSum() {
  return arr.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
}

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total');
const average = document.querySelector('.average');

const arr = [...population].map((x) => {
  return +x.innerText.replace(/,/gi, '');
});

average.innerText = (calculateSum() / arr.length).toLocaleString('en');

total.innerText = calculateSum().toLocaleString('en');
