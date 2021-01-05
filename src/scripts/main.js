'use strict';

// write your code here
const list = document.querySelectorAll('.population');

const populationArray = [...list].map(item => {
  return +item.innerText.split(',').join('');
});

const total = document.querySelector('.total-population');

const sumPeople = populationArray.reduce((a, b) => a + b);

total.innerText = sumPeople.toLocaleString('en');

const average = document.querySelector('.average-population');

average.innerText = (sumPeople / populationArray.length).toLocaleString('en');
