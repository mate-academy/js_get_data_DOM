'use strict';

const people = document.querySelectorAll('span.population');
const nombersOfPopulation = [];

people.forEach((person) => {
  const text = person.textContent;
  const number = parseInt(text.replace(/,/g, ''));

  nombersOfPopulation.push(number);
});

const total = nombersOfPopulation.reduce((sum, current) => sum + current, 0);
const average = total / nombersOfPopulation.length;

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
