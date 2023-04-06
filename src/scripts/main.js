'use strict';

const [...spanPop] = document.querySelectorAll('.population');

let totalText = document.querySelector('.total-population') ;
let averageText = document.querySelector('.average-population');

const arrNumbers = spanPop.map(people => Number(people.innerText.split(',').join('')));//

const totalPeople = arrNumbers.reduce((a, b) => a + b);

const average = totalPeople / spanPop.length;

function addSeparator(num) {
  const qwe = String(num).split('');
 
  for (let i = qwe.length - 1; i >= 0 ; i -= 3) {
    qwe[i - 3] += ',';

  }
 
  return qwe.join(''); 
}

totalText.innerText = addSeparator(totalPeople);

averageText.innerText = addSeparator(average);



// write your code here
