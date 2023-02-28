'use strict';

const popArr = document.querySelectorAll('.population');
let total = 0;

for (const item of popArr) {
  total += +item.textContent.split(',').join('');
}

const average = total / popArr.length;

function DecimalFormat(number) {
  const stringArr = `${number}`.split('');
  const numbArr = [];

  while (stringArr.length >= 3) {
    numbArr.unshift(stringArr.splice(-3, 3).join(''));
  }

  if (stringArr.length > 0) {
    const rest = stringArr.length;

    numbArr.unshift(stringArr.splice(-rest, rest).join(''));
  }

  return numbArr.join(',');
}

const totalForm = DecimalFormat(total);
const averageForm = DecimalFormat(average);

document.querySelector('.total-population').textContent = totalForm;
document.querySelector('.average-population').textContent = averageForm;
