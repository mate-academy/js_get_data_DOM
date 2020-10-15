'use strict';

const listOfPopulation = document.querySelectorAll('.population');

const amountOfPeople = [...listOfPopulation].map(country => {
  return +country.innerText.replace(/,/g, '');
});

const sumOfPeople = amountOfPeople.reduce((acc, curVal) => acc + curVal);
const averagePeople = sumOfPeople / amountOfPeople.length;

document.querySelector('.total-population').innerText
= sumOfPeople.toLocaleString();

document.querySelector('.average-population').innerText
= averagePeople.toLocaleString();
