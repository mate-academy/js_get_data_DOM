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

const calcAver = document.querySelector('.average-population');
const calcTotal = document.querySelector('.total-population');

calcAver.textContent = `${averValuePeople.toLocaleString('en-US')}`;
calcTotal.textContent = totalPeople.toLocaleString('en-US');
