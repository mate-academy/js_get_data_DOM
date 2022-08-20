'use strict';

// const collectionOfSpan = document.querySelectorAll('.population');

const arrayOfSpan
= [...document.querySelectorAll('.population')].map(span => span.innerText);

const arrayOfNumbers = arrayOfSpan.map(string => {
  const number = string.split(',').join('');

  if (typeof (+number) === 'number') {
    return +number;
  }
});

const total = arrayOfNumbers.reduce((prev, curret) => prev + curret);
const average = total / arrayOfNumbers.length;

const totalParagraph = document.querySelector('.total-population');
const averageParagraph = document.querySelector('.average-population');

totalParagraph.innerText = total.toLocaleString('en-US');
averageParagraph.innerText = average.toLocaleString('en-US');
