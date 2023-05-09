'use strict';

const elem = document.querySelectorAll('.population');
const arr = [];

for (const el of elem) {
  arr.push(el);
}

const numberPeople = arr.map(item => item.innerText);
const newArray = numberPeople.map(str => str.split(',').join(''));
const numArray = newArray.map(str => parseFloat(str));
const total = numArray.reduce((accumulator, currentValue) =>
  accumulator + currentValue);
const average = (total / 10);

const totalString = total.toLocaleString('en-US');

const averageString = average.toLocaleString('en-US');

const totalInfo = document.querySelector('.total-population');
const averageInfo = document.querySelector('.average-population');

totalInfo.innerHTML = totalString;
averageInfo.innerHTML = averageString;
