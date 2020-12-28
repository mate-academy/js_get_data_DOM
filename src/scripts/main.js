'use strict';

let total = 0;
let i = 0;
const nodes = document.querySelectorAll('span.population');
const totalNode = document.querySelector('span.total-population');
const averageNode = document.querySelector('span.average-population');

for (i; i < nodes.length; i++) {
  total += (+(nodes[i].innerText).split(',').join(''));
};

totalNode.innerText = total.toLocaleString('en-EN');
averageNode.innerText = (total / nodes.length).toLocaleString('en-EN');
