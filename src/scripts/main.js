'use strict';

const numeral = require('numeral');

const spans = document.querySelectorAll('.population');
const totalField = document.querySelector('.total-population');
const averageField = document.querySelector('.average-population');
const populations = [];

spans.forEach(span => {
  populations.push(
    Number(span.textContent.split(',').join(''))
  );
});

const total = populations.reduce((a, b) => a + b);
const average = total / populations.length;

totalField.textContent = numeral(total).format();
averageField.textContent = numeral(average).format();
