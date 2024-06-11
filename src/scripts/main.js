'use strict';

const populationElems = document.querySelectorAll('.population');

const sumAllPeople = [...populationElems]
  .map((country) => country.innerHTML.split(',').join(' '))
  .map((people) => Number(people.split(' ').join('')))
  .reduce((sum, people) => sum + people, 0);

document.querySelector('.total-population').innerHTML =
  sumAllPeople.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML = (
  sumAllPeople / populationElems.length
).toLocaleString('en-US');
