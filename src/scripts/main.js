'use strict';

function chunkString(str) {
  const remainder = str.length % 3;

  const head = remainder ? [str.slice(0, remainder)] : [];

  const tail = str.slice(remainder).match(/.{1,3}/g) || [];

  return [...head, ...tail].join(',');
}

const populationArr = [...document.querySelectorAll('.population')].reduce(
  (acc, i) => {
    acc.push(+i.textContent.split(',').join(''));

    return acc;
  },
  [],
);

document.querySelector('.total-population').textContent = chunkString(
  '' + populationArr.reduce((acc, i) => acc + i),
);

document.querySelector('.average-population').textContent = chunkString(
  '' +
    Math.round(
      populationArr.reduce((acc, i) => acc + i, 0) / populationArr.length,
    ),
);
