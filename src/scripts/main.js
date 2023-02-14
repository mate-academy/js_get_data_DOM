'use strict';

const element = document.body.children[0];
const collectionOfNumbers = element.querySelectorAll('.population');
const arrayOfNumbers = [...collectionOfNumbers].map(number => {
  return +number.innerText.replaceAll(',', '');
});

const total = arrayOfNumbers.reduce((sum, current) => {
  return sum + current;
}, 0);
const average = total / arrayOfNumbers.length;

element.querySelector('.total-population').innerText
= total.toLocaleString('en-US');

element.querySelector('.average-population').innerHTML
= average.toLocaleString('en-US');
