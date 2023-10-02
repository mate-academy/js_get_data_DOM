'use strict';

const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');
const allEllements = document.getElementsByClassName('population');

const sum = [...allEllements]
  .map(element => +(element.innerHTML.replace(/,/g, '')))
  .reduce((acc, el) => acc + el, 0);

totalPop.innerHTML = sum.toLocaleString('en');
averagePop.innerHTML = (sum / allEllements.length).toLocaleString('en');
