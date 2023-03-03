'use strict';

const values = document.getElementsByClassName('population');
const textNumber = [];

function formatNumberInText(number) {
  const options = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  };

  return number.toLocaleString('en-US', options);
};

const normalizeNumber = (str) => {
  return parseFloat(str.replace(/,/g, ''));
};

for (let i = 0; i < values.length; i++) {
  textNumber.push(normalizeNumber(values[i].textContent));
}

const totalNumber = textNumber.reduce((a, b) => a + b);
const avgNumber = totalNumber / values.length;

const total = formatNumberInText(totalNumber);
const avg = formatNumberInText(avgNumber);

const totalHTML = document.getElementById('total-p');
const avgHTML = document.getElementById('avg-p');

totalHTML.textContent = total;
avgHTML.textContent = avg;
