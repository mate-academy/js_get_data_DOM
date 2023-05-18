'use strict';

const listing = document.querySelectorAll('.population');

const listArry = [...listing].map(list => list.innerHTML);

let totalPop = 0;

for (const newlist of listArry) {
  const popState = newlist.split(',').join('');

  totalPop += +popState;
}

const averagePop = totalPop / listArry.length;

const elementTotal = document.body.children[0].children[2].children[0];

elementTotal.innerHTML = totalPop.toLocaleString('en');

const elementAveg = document.body.children[0].children[3].children[0];

elementAveg.innerHTML = averagePop.toLocaleString('en');
