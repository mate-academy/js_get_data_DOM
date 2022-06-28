'use strict';

const list = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const numberArr = [...list].map(item =>
  parseInt(item.innerText.replace(/,/g, '')));
const total = numberArr.reduce((a, b) => a + b, 0);
const average = total / numberArr.length;

totalElement.innerText = total.toLocaleString('en-US');
averageElement.innerText = average.toLocaleString('en-US');
