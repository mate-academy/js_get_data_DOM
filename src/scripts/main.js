'use strict';

const population = document.getElementsByClassName('population');

const numbers = Array.from(population).map((element) => {
  const elem = element.textContent;
  const repl = elem.replaceAll(/[, ]/g, '');

  return Number(repl);
});

const total = numbers.reduce((sum, number) => sum + number, 0);
const average = Math.round(total / population.length);

const avg = document.getElementsByClassName('average-population')[0];

avg.innerHTML = average.toLocaleString('en-US');

const totl = document.getElementsByClassName('total-population')[0];

totl.innerHTML = total.toLocaleString('en-US');
