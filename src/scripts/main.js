'use strict';

// ------ Finding the sum and the average value --------------

const populationValues = [...document.querySelectorAll('.population')]
  .map((item) => {
    return +(item.textContent
      .split(',')
      .filter((i) => i !== ',')
      .join(''));
  });

const total = (populationValues
  .reduce((sum, current) => sum + current, 0));

const average = total / populationValues.length;

// ------ Getting the sum and the average value with separators --------------

function addCommas(number) {
  const value = '' + number;
  const resultArray = [];

  let counter = value.length;

  while (counter > 0) {
    let end = counter;

    counter -= 3;

    let start = counter;

    if (counter < 0) {
      start = 0;
      end = counter + 3;
    }

    resultArray
      .push(value
        .slice(start, end)
      );
  }

  return resultArray
    .reverse()
    .join(',');
}

const totalString = addCommas(total);

const averageString = addCommas(average);

// ------ Adding the sum and the average value in HTML --------------

document.querySelector('.total-population').innerHTML = totalString;

document.querySelector('.average-population').innerHTML = averageString;
