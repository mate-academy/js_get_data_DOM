'use strict';

const values = document.getElementsByClassName('population');
const textNumber = [];

function sortTextNumber(array) {
  for (let i = 0; i < array.length; i++) {
    textNumber.push(array[i].innerText);
  }
}

function formatNumberInText(number) {
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return number.toLocaleString('en-US', options);
};

sortTextNumber(values);

const format = textNumber.map(item => parseFloat(item.replace(/,/g, '')));

const totalNumber = format.reduce((a, b) => a + b);
const avgNumber = totalNumber / values.length;

const total = formatNumberInText(totalNumber);
const avg = formatNumberInText(avgNumber);

const totalHTML = document.getElementById('total-p');
const avgHTML = document.getElementById('avg-p');

totalHTML.textContent = total;
avgHTML.textContent = avg;
