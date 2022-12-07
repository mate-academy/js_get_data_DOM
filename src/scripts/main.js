'use strict';

const popul = [...document.querySelectorAll('.population')].map(population =>
  Number(population.textContent.split(',').join('')));

const total = popul.reduce((prev, current) => prev + current, 0);
const totalNode = document.querySelector('.total');

totalNode.textContent = `Total: ${total.toLocaleString('en-US')}`;

const avarage = total / popul.length;
const averageNode = document.querySelector('.average');

averageNode.textContent = `Avarage: ${avarage.toLocaleString('en-US')}`;
