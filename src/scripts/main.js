'use strict';

'use strict';

const popelements = document.querySelectorAll('.population');

let total = 0;


for (let i = 0; i < popelements.length; i++) {
  const current = Number(popelements[i].textContent.replaceAll(',', ''));
  total += current;
}

const average = Math.round(total / popelements.length);

const arraytotal = String(total);

const pagetotal = arraytotal.split('')
      .reduceRight((acc, char, index, array) => {
        const positionFromEnd = array.length - 1 - index;

        if (positionFromEnd > 0 && positionFromEnd % 3 === 0) {
      return char + ',' + acc;
        }
        return char + acc;
      }, '');

const arrayaverage = String(average);

const pageaverage = arrayaverage.split('')
      .reduceRight((acc, char, index, array) => {
        const positionFromEnd = array.length - 1 - index;

        if (positionFromEnd > 0 && positionFromEnd % 3 === 0) {
      return char + ',' + acc;
        }
        return char + acc;
      }, '');


const totalOutput = document.querySelector('.total-population');
const totalOutput1 = document.querySelector('.average-population');

totalOutput.textContent = pagetotal;
totalOutput1.textContent = pageaverage;
