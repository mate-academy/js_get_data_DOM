'use strict';

const population = document.getElementsByClassName('population');
const total = [...population]
 .map(item => parseFloat(item.innerHTML.replaceAll(',', '')))
  .reduce((a, b) => a + b);
const average = total / [...population].length
document.getElementsByClassName('total-population')[0].innerHTML = total.toLocaleString('en-US');
document.getElementsByClassName('average-population')[0].innerHTML = average.toLocaleString('en-US');