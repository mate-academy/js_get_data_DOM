'use strict';

const population = document.querySelectorAll('.population');
const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

const populationElements = [];
let summ = 0;
const totalSumm = [];
const averageSumm = [];

population.forEach((el) => {
  populationElements.push(el.textContent);
});

for (const item of populationElements) {
  summ += +item.split(',').join('');
}

const avSumm = Math.floor(summ / populationElements.length);

if (summ.toString().length % 3 !== 0) {
  const arr = summ.toString().split('');
  let newWord = '';

  for (let i = 0; i < arr.length; i++) {
    newWord += arr[i];

    if (totalSumm[0] === undefined) {
      if (newWord.length === summ.toString().length % 3) {
        totalSumm.push(newWord);
        newWord = '';
      }
    }

    if (newWord.length === 3) {
      totalSumm.push(newWord);
      newWord = '';
    }
  }
} else {
  const arr = summ.toString().split('');
  let newWord = '';

  for (let i = 0; i < arr.length; i++) {
    newWord += arr[i];

    if (newWord.length === 3) {
      totalSumm.push(newWord);
      newWord = '';
    }
  }
}

if (avSumm.toString().length % 3 !== 0) {
  const arr = avSumm.toString().split('');
  let newWord = '';

  for (let i = 0; i < arr.length; i++) {
    newWord += arr[i];

    if (averageSumm[0] === undefined) {
      if (newWord.length === avSumm.toString().length % 3) {
        averageSumm.push(newWord);
        newWord = '';
      }
    }

    if (newWord.length === 3) {
      averageSumm.push(newWord);
      newWord = '';
    }
  }
} else {
  const arr = avSumm.toString().split('');
  let newWord = '';

  for (let i = 0; i < arr.length; i++) {
    newWord += arr[i];

    if (newWord.length === 3) {
      averageSumm.push(newWord);
      newWord = '';
    }
  }
}

total.textContent = totalSumm.join(',');
average.textContent = averageSumm.join(',');
