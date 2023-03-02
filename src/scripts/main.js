'use strict';

const sources = document.getElementsByClassName('population');

const allPopulations = [...sources].map(country =>
  +country.innerText.split(',').join(''));

const totalNumbers = allPopulations.reduce((accum, current) =>
  accum + current, 0).toString().split('');

const averageNumbers = (totalNumbers.join('') / allPopulations.length)
  .toString().split('');

function separateByThousand(arr) {
  let str = '';

  for (let i = arr.length - 1; i >= 0; i--) {
    if ((arr.length - i) % 3 === 0 && i !== 0) {
      str += arr[i];

      str += ',';
    } else {
      str += arr[i];
    }
  }

  return str.split('').reverse().join('');
}

document.getElementsByClassName('total-population')[0].innerText
  = separateByThousand(totalNumbers);

document.getElementsByClassName('average-population')[0].innerText
  = separateByThousand(averageNumbers);
