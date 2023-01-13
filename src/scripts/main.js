'use strict';

// write your code here

const countries = document.querySelectorAll('.population');

const totalPeople = [...countries].map(country => country.innerText);

const totalNumber = totalPeople.map(string => +string.replaceAll(',', ''));

const totalSum = totalNumber.reduce((a, b) => a + b, 0);

const totalHtml = document.querySelector('.total-population');

const stringSum = totalSum.toLocaleString();

totalHtml.innerText = stringSum;

const average = document.querySelector('.average-population');

const averageString = (totalSum / totalNumber.length).toLocaleString();

average.innerText = averageString;
