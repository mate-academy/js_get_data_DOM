'use strict';

const list = document.querySelectorAll('.population');
const texts = [...list].map(item => +item.innerText.split(',').join(''));
const total = texts.reduce((acc, num) => acc + num, 0);
const average = total / texts.length;
const totalPopul = document.querySelector('.total-population');
const averagePopul = document.querySelector('.average-population');

totalPopul.innerText = total.toLocaleString('en');
averagePopul.innerText = average.toLocaleString('en');
