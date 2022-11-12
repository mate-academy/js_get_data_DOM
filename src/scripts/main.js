'use strict';

// write your code here
const population = document.querySelectorAll('.population');

const transformToNumber = [...population]
  .map(item => +item.innerText.replace(/,/g, ''));

const total = transformToNumber.reduceRight((a, b) => a + b);

document.getElementsByClassName('total-population')[0]
  .textContent = total.toLocaleString('en-US');

document.getElementsByClassName('average-population')[0]
  .textContent = (total / transformToNumber.length).toLocaleString('en-US');
