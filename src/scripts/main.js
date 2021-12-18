'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalPopul = document.querySelector('.total-population');
const averagePopul = document.querySelector('.average-population');
const value = [...population].map(item => +item.innerText.split(',').join(''));
const total = value.reduce((a, b) => a + b);
const average = total / value.length;


totalPopul.innerText = separator(total);
averagePopul.innerText = separator(average);

function separator(numb) {
  const arr = String(numb).split('');
  console.log(arr)

  for (let i = arr.length - 3; i > 0; i = i - 3) {
    arr.splice(i, 0, ',');
  }

  return arr.join('');
}