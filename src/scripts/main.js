'use strict';

const populationSpan = [...document.querySelectorAll('.population')];
let totalNum = 0;

for (const ch of populationSpan) {
  const stringWithoutComma = ch.innerText.replaceAll(',', '');
  const parseToInt = parseInt(stringWithoutComma);

  totalNum += parseToInt;
}

const averageNum = Math.round(totalNum / populationSpan.length);

document.querySelector('.total-population').outerHTML =
  totalNum.toLocaleString('en-GB');

document.querySelector('.average-population').outerHTML =
  averageNum.toLocaleString('en-GB');
