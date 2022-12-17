'use strict';

// write your code here
const items = document.querySelectorAll('.population');
const texts = [...items].map(item =>
  Number(item.innerText.split(',').join('')));

const total = texts.reduce((acc, cur) => acc + cur, 0);
const aver = Math.round(total / texts.length);

const spanTotal = document.getElementsByClassName('total-population');

spanTotal[0].innerHTML = total.toLocaleString('en');

const spanAver = document.getElementsByClassName('average-population');

spanAver[0].innerHTML = aver.toLocaleString('en');
