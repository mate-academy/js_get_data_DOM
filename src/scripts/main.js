'use strict';

const items = document.querySelectorAll('.population');
const num = [...items].map(item => Number(item.innerText.replaceAll(',', '')));
const total = num.reduce((num1, num2) => num1 + num2).toLocaleString();
const average = (total.replaceAll(',', '') / num.length).toLocaleString();
const totalString = document.querySelector('.total-population');
const averageString = document.querySelector('.average-population');

totalString.innerText = total;
averageString.innerText = average;
