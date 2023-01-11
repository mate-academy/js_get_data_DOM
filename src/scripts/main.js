'use strict';

// write your code here

const countries = document.querySelectorAll('.population');

const totalPeople = [];

for (let i = 0; i < countries.length; i++) {
  const temp = [countries[i]].map(country => country.innerText);

  totalPeople.push(temp[0]);
}

const total = totalPeople.map(string => string.replaceAll(',', ''));

const totalNumber = total.map(string2 => +string2);

const totalSum = totalNumber.reduce((a, b) => a + b, 0);

const totalHtml = document.querySelector('.total-population');

totalHtml.innerText = totalSum;

const average = document.querySelector('.average-population');

average.innerHTML = totalSum / totalNumber.length;
