'use strict';

function chunkString(str) {
  const remainder = str.length % 3;

  const head = remainder ? [str.slice(0, remainder)] : [];

  const tail = str.slice(remainder).match(/.{1,3}/g) || [];

  return [...head, ...tail].join(',');
}

const populationArr = [...document.querySelectorAll('.population')].reduce(
  (acc, i) => {
    const num = Number(i.textContent.split(',').join(''));

    if (Number.isFinite(num)) {
      acc.push(num);
    }

    return acc;
  },
  [],
);

const count = populationArr.length;
const sum = populationArr.reduce((a, b) => a + b, 0);
const avg = count ? Math.round(sum / count) : 0;

document.querySelector('.total-population').textContent = chunkString('' + sum);

document.querySelector('.average-population').textContent = chunkString(
  '' + avg,
);
