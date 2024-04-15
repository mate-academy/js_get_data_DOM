'use stript';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numbers = [...population].map((i) => {
  return +i.textContent.split(',').join('');
});

const sum = numbers.reduce((acc, cur) => acc + cur);

const average = sum / numbers.length;

totalPopulation.textContent = sum.toLocaleString('en-US');

averagePopulation.textContent = average.toLocaleString('en-Us');
