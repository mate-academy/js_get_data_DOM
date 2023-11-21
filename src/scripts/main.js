'use strict';

// write your code here

const populationspans = document.querySelectorAll('.population');
const totalspan = document.querySelector('.total-population');
const averagespan = document.querySelector('.average-population');

let countries = 0;
let total = 0;

populationspans.forEach((country) => {
  const people = Number(country.innerHTML.replaceAll(',', ''));

  total += people;
  countries++;
});

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = (total / countries).toLocaleString('en-US');

totalspan.innerText = formattedTotal;
averagespan.innerText = formattedAverage;
