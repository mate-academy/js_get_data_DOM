'use strict';

// write your code here

const matches = document.getElementsByClassName('population');
const newMatches = Array.from(matches, x =>
  Number(x.innerHTML.replace(/,/g, '')));
const total = newMatches.reduce((a, b) => a + b);
const average = total / newMatches.length;
const totalV = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const averageV = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.getElementsByClassName('total-population')[0].innerText = totalV;
document.getElementsByClassName('average-population')[0].innerText = averageV;
