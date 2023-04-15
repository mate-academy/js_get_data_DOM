'use strict';

const population = document.querySelectorAll('.population');

const callback = (prev, x) => {
  return prev + +(x.innerHTML.split(',').join(''));
};

const total = [ ...population ].reduce(callback, 0);

const average = total / population.length;

function toFormat(data) {
  let resultString = data.toString();
  const result = [];

  do {
    if (resultString.length % 3) {
      result.push(resultString.slice(0, resultString.length % 3));
      resultString = resultString.slice(resultString.length % 3);
    }
    result.push(resultString.slice(0, 3));
    resultString = resultString.slice(3);
  } while (resultString.length > 0);

  return result.join(',');
}

document.querySelector('.total-population').innerHTML = toFormat(total);
document.querySelector('.average-population').innerHTML = toFormat(average);
