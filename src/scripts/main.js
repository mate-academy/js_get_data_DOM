'use strict';

const separate = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const totalPopulationNode = document.querySelector('.total-population');
const averagePopulationNode = document.querySelector('.average-population');
const population = [...document.querySelectorAll('.population')].map(
  item => +item.innerText.split(',').join(''));
const total = population.reduce((acc, el) => acc + el, 0);

totalPopulationNode.innerText = separate(total);

averagePopulationNode.innerText = separate(total / population.length);
