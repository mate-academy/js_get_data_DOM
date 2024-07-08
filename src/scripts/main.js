'use strict';
// array of numbers of populations
const  populations = Array.from(document.querySelectorAll('.population'));

// function to count total populations
const totalSum = (array) => {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += parseInt(array[i].textContent.replaceAll(',',''));
  }

  return result;
}

//variables to define total and average sum of populations
const total = totalSum(populations);
const average = total / populations.length;
//replace 'calculate it' with final result
document.querySelector('.total-population').innerText = total.toLocaleString('en-US').replaceAll('.',',');
document.querySelector('.average-population').innerText = average.toLocaleString('en-US').replaceAll('.',',');

