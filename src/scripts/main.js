'use strict';

let queryPopulation = document.querySelectorAll('.population');

let total = 0;
let count = 0;

const texts = [...queryPopulation].map(item => {
   const str = item.innerHTML.split(',');
   const str1 = str.join('');
   const num = Number(str1); 
 
   total += num;
   count ++;
   
   return item.innerHTML;
});

const average = total / count;

let average_element = document.querySelector('.average-population');
let total_element = document.querySelector('.total-population');

total_element.innerHTML = total.toLocaleString();
average_element.innerHTML = average.toLocaleString();

