'use strict';

const elements = [...document.querySelectorAll('.population')];

const texts = elements.map((el) => el.textContent);
const clean = texts.map((elem) => elem.replace(/[,\s\u00A0]+/g, ''));
const nums = clean.map((num) => Number(num));
const valid = nums.filter((number) => !Number.isNaN(number));

const total = valid.reduce((sum, element) => sum + element, 0);
const average = Math.round(total / valid.length);

const formatter = new Intl.NumberFormat('en-US');

document.querySelector('.average-population').textContent =
  `${formatter.format(average)}`;

document.querySelector('.total-population').textContent =
  `${formatter.format(total)}`;
