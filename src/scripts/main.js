'use strict';

const listing = document.querySelectorAll('.population');

const listArry = [...listing].map((list) => list.innerHTML);

const totalPop = listArry.reduce(
  (sum, currentPeople) => sum + +currentPeople.split(',').join(''),
  0
);

const averagePop = totalPop / listArry.length;

const elementTotal = document.body.children[0].children[2].children[0];

elementTotal.innerHTML = totalPop.toLocaleString('en-US');

const elementAveg = document.body.children[0].children[3].children[0];

elementAveg.innerHTML = averagePop.toLocaleString('en-US');
