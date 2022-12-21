'use strict';

// write your code here

const population = [...document.querySelectorAll('.population')]
  .map(person => +(person.textContent.split(',').join('')));

const total = population.reduce((previous, current) => previous + current, 0); 
const fullNode = document.querySelector('.total-population');
fullNode.textContent = `${total.toLocaleString()}`;

const average = total / population.length;

const averageNode = document.querySelector('.average-population');


averageNode.textContent = `${average.toLocaleString()}`;
