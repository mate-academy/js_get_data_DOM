'use strict';

const people = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

console.log(people);

const totalPeople = [...people]
.map(el => Number(el.textContent.split(',').join('')))
.reduce((sum, elem) => sum + elem);

const avgPeople = totalPeople / people.length;

total.textContent = totalPeople.toLocaleString("en-US");
average.textContent = avgPeople.toLocaleString("en-US");
