'use strict';

let data = document.getElementsByClassName('population');

data = [...data].map(tag =>
  Number(tag.innerText.split(',').join('')),
);

const totalPop = data.reduce((sum, num) => sum + num);
const averagePop = totalPop / data.length;

document.querySelector('.total-population')
  .innerText = formatBigNumber(totalPop);

document.querySelector('.average-population')
  .innerText = formatBigNumber(averagePop);

function formatBigNumber(num) {
  let resNum = '';
  let counter = 0;

  const initialNum = num.toString();

  for (let i = initialNum.length - 1; i >= 0; i--) {
    const sym = initialNum[i];

    if (counter === 3) {
      counter = 0;
      resNum = ',' + resNum;
    }

    resNum = sym + resNum;
    counter++;
  }

  return resNum;
}
