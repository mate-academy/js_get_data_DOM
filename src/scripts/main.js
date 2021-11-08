/* eslint-disable no-console */
'use strict';

const parsed = [
  ...document
    .body
    .querySelectorAll('.population')]
  .map(el =>
    Number(
      el
        .innerText
        .split(',')
        .join('')));

const total = parsed.reduce((prev, curr) => prev + curr, 0);

const average = total / parsed.length;

document
  .body
  .querySelector('.total-population')
  .innerText = `${total.toLocaleString()}`;

document
  .body
  .querySelector('.average-population')
  .innerText = `${average.toLocaleString()}`;
