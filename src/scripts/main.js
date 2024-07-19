'use strict';

const populationsQueries = [...document.querySelectorAll('.population')];
const populations = [];

for (let i = 0; i < populationsQueries.length; i++) {
  populations.push(+populationsQueries[i].textContent.split(',').join(''));
}

// #region total
const total = populations.reduce((sum, num) => sum + num);
const totalArray = String(total).split('');
const totalStrArray = [];

switch (totalArray.length % 3) {
  case 1:
    totalStrArray.push(totalArray[0]);
    break;
  case 2:
    totalStrArray.push(totalArray[0] + totalArray[1]);
    break;
}

for (let i = totalArray.length % 3; i < totalArray.length; i += 3) {
  totalStrArray.push(totalArray[i] + totalArray[i + 1] + totalArray[i + 2]);
}

const totalString = totalStrArray.join(',');
// #endregion

// #region average
const average = total / populations.length;
const averageArray = String(average).split('');
const averageStrArray = [];

switch (averageArray.length % 3) {
  case 1:
    averageStrArray.push(averageArray[0]);
    break;
  case 2:
    averageStrArray.push(averageArray[0] + averageArray[1]);
    break;
}

for (let i = averageArray.length % 3; i < averageArray.length; i += 3) {
  averageStrArray.push(
    averageArray[i] + averageArray[i + 1] + averageArray[i + 2],
  );
}

const averageString = averageStrArray.join(',');
// #endregion

document.querySelector('.total-population').textContent = totalString;
document.querySelector('.average-population').textContent = averageString;
