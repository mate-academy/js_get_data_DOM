'use strict';

const stringPeople = document.querySelectorAll('.population');
const numberPeople = [];

for (const ch of stringPeople) {
  numberPeople.push(+ch.innerText.split(',').join(''));
};

let totalPeople = 0;

for (const ch of numberPeople) {
  totalPeople += ch;
}

const averValuePeople = totalPeople / numberPeople.length;

const resultAver = [];
const srtingAverPeople = String(averValuePeople).split('');
let countOne = 0;

for (let i = srtingAverPeople.length - 1; i >= 0; i--) {
  if (countOne === 3 || countOne === 6 || countOne === 9) {
    resultAver.unshift(',');
  }
  resultAver.unshift(srtingAverPeople[i]);
  countOne++;
}

const resultTotal = [];
const srtingTotalPeople = String(totalPeople).split('');
let count = 0;

for (let i = srtingTotalPeople.length - 1; i >= 0; i--) {
  if (count === 3 || count === 6 || count === 9) {
    resultTotal.unshift(',');
  }
  resultTotal.unshift(srtingTotalPeople[i]);
  count++;
}

const calcAver = document.querySelector('.average-population');
const calcTotal = document.querySelector('.total-population');

calcAver.textContent = `${resultAver.join('')}`;
calcTotal.textContent = resultTotal.join('');

// return numberPeople;
