'use strict';

const collection = document.querySelectorAll('.population');
const arrayOfPopulation = [];
let populationNum;

for (let i = 0; i < collection.length; i++) {
  const bufferArray = (collection[i].textContent).split(',');

  populationNum = +(bufferArray.join(''));

  if (!isNaN(populationNum)) {
    arrayOfPopulation[i] = populationNum;
  } else {
    arrayOfPopulation[i] = 0;
  }
}

const total = arrayOfPopulation.reduce((sum, value) => {
  return sum + value;
});

const totalElem = document.querySelector('.total-population');

totalElem.textContent = formatter('' + total);

const averagePopulation = total / collection.length;
const averageElem = document.querySelector('.average-population');

averageElem.textContent = formatter('' + averagePopulation);

function formatter(str = '') {
  let len; // amount of digits that is exposed to formattig
  let loopCounter;
  const arr = Array.from(str);

  if (str.includes('.')) {
    len = str.indexOf('.');
  } else {
    len = str.length;
  }

  if (len < 4) {
    return str;
  }

  /* calculate start point of "for"-loop === place for
   first comma (loopCounter); */
  const reminder = len % 3;

  if (reminder === 0) {
    loopCounter = 3;
  } else {
    loopCounter = reminder;
  }

  for (loopCounter; loopCounter < len; loopCounter += 4) {
    arr.splice(loopCounter, 0, ',');
  }

  return arr.join('');
}
