'use strict';

const list = document.querySelectorAll('.population');
const total = [...list].reduce(
  (acc, item) => acc + Number(item.innerText.replace(/,/g, '')),
  0
);

const average = total / [...list].length;

const totalString = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const averageString = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').innerHTML = totalString;

document.querySelector('.average-population').innerHTML = averageString;
