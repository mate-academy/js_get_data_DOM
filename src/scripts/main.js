'use strict';

const doc = document.querySelectorAll('.population')

const sum = [...doc].map(x => +x.innerHTML.replaceAll(',', '')).reduce((a, b) => (a + b), 0);
const avg = sum / doc.length;

const ttl = document.getElementsByClassName('total-population')[0];
const average = document.getElementsByClassName('average-population')[0];

ttl.innerHTML = sum.toLocaleString('en-US');
average.innerHTML = avg.toLocaleString('en-US');
