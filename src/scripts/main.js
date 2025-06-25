'use strict';

const countries = document.getElementsByClassName("population");

let sum = 0;

for (let i = 0; i < countries.length; i++) {
  const text = countries[i].textContent.replace(/,/g, '');
  const number = Number(text);

  if (!isNaN(number)) {
    sum += number;
  }
}
const average = sum / countries.length;

const formattedSum = sum.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.getElementsByClassName("total-population")[0].textContent = formattedSum;
document.getElementsByClassName("average-population")[0].textContent = formattedAverage;

