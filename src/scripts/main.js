'use strict';

const elements = document.querySelectorAll("span.population");
let sum = 0;
let count = 0;

for(let elem of elements){
  count ++;
  let str = elem.innerHTML;
  str = str.split(',').join('');

  if(!isNaN(str)){
      sum += Number(str);
  }
}

const total = document.querySelector("span.total-population");
total.innerHTML = sum;
const aveRage = document.querySelector("span.average-population");
aveRage.innerHTML = sum/count;
