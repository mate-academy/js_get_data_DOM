'use strict';

const getData = document.querySelectorAll('.population');

let totalCalck = 0;

for (const i of getData) {
  const item = Number(i.textContent.replace(/,/g, ''));

  totalCalck += item;
}

const averageCalck = totalCalck / getData.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.append(totalCalck.toLocaleString('en-US'));
average.append(averageCalck.toLocaleString('en-US'));
