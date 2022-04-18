'use strict';

const population = document.querySelectorAll('.population');
const values = [...population].map(item => +item.innerText.split(',').join(''));
const total = values.reduce((sum, num) => sum + num);
const avarege = total / values.length;

const totalPopulation = document.querySelector('.total-population');
const avaragePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString('ja-JP');
avaragePopulation.innerText = avarege.toLocaleString('ja-JP');
