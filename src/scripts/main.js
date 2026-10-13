'use strict';

// write your code here
// get all span elements with the class "population" and convert it to an array
const populationSpan = [...document.querySelectorAll('span.population')];

// declare a variable
let sumPopulation = 0;

// use array method calculate sum of population
populationSpan.forEach(
  (span) =>
    (sumPopulation += Number.parseInt(span.textContent.replaceAll(',', ''))),
);

const avgPopulation = sumPopulation / populationSpan.length;

// get span element with the class "total-population"
const total = document.querySelector('span.total-population');

// get span element with the class "average-population"
const average = document.querySelector('span.average-population');

// overwrite the text inside the span elements for total and average population
total.innerText = sumPopulation.toLocaleString();
average.innerText = avgPopulation.toLocaleString();
