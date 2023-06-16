'use strict';
// select class 'population'

const population = document.querySelectorAll('.population');

// get array of population values

const arrayOfAges = [...population].map(code => code.innerText);

// function, that removes commas and converts string to a number

const numConvert = (chars) => {
  const noCommas = chars.split(',').reduce((acc, item) => acc + item);

  return +noCommas;
};

// get array of population numbers

const arrayOfAgesConverted = arrayOfAges.map(numConvert);

// total number

const total = arrayOfAgesConverted.reduce((acc, item) => acc + item);

// average number

const average = total / arrayOfAgesConverted.length;

// find code to replace value

const totalItem = document.querySelector('.total-population');
const averageItem = document.querySelector('.average-population');

// insert results on apage: total and average

totalItem.innerText = total.toLocaleString();
averageItem.innerText = average.toLocaleString();
