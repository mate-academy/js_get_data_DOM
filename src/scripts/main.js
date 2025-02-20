'use strict';

// write your code here
const numberOfPeople = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let populations = [];

numberOfPeople.forEach((span) => {
  const text = span.textContent;
  const cleanedText = +text.replace(/,/g, '');

  populations = [...populations, cleanedText];
});

const total = populations.reduce((sum, current) => sum + current, 0);
const average = total / populations.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
