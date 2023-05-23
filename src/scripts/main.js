'use strict';

const elements = document.querySelectorAll('.population');

const countries = [...elements].map(item => item.innerText);

const newArray = countries.map(str => str.split(',').join(''));

const newNumber = newArray.map(string => parseFloat(string));

const sum = newNumber.reduce(
  (result, currentValue) => result + currentValue, 0
);

const total = document.querySelector('.total-population');

const newText = sum;

total.textContent = newText.toLocaleString();

const average = document.querySelector('.average-population');

const newData = sum / newNumber.length;

average.textContent = newData.toLocaleString();
