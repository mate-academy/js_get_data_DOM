'use strict';

const population = document.getElementsByClassName('population');
const averPopulation = document.getElementsByClassName('average-population');
const totalPopulation = document.getElementsByClassName('total-population');

const text = [];

for (let i = 0; i < population.length; i++) {
  const newAmount = population[i].innerText.split(',').join('');

  text.push(+newAmount);
}

const total = text.reduce((acc, el) => {
  return acc + el;
});

totalPopulation[0].innerText = total.toLocaleString(); ;

const average = total / population.length;

averPopulation[0].textContent = average.toLocaleString();
