'use strict';

const populations = document.querySelectorAll('.population');

const texts = [...populations].map(item => +item.innerText.split(',').join(''));

const total = texts.reduce((sum, num) => sum + num, 0);

const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');

spanTotal.innerText = total.toLocaleString('en-US');
spanAverage.innerText = (total / texts.length).toLocaleString('en-US');
