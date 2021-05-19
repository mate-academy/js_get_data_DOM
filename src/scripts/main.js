'use strict';

const totalPop = document.getElementsByClassName('total-population');

const popul = Array.from(document.getElementsByClassName('population'))
  .map((pop) => Number(pop.innerText.replace(/,/g, '')));

Array.from(totalPop)[0].textContent = Number(popul
  .reduce((total, amount) => total + amount))
  .toLocaleString('en');

const averPop = document.getElementsByClassName('average-population');

Array.from(averPop)[0].textContent = Number((popul
  .reduce((total, amount) => total + amount) / popul.length)
  .toFixed(0))
  .toLocaleString('en');
