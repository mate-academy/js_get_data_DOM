'use strict';

const nodeListState = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const states = [...nodeListState].map(state => {
  const conversionToNumber = state.innerHTML.split(',').join('');

  return +conversionToNumber;
});

const totalPopulation = states.reduce((accumulator, currentState) => {
  return accumulator + currentState;
}, 0);

total.innerHTML = totalPopulation.toLocaleString('en-US');
average.innerHTML = (totalPopulation / states.length).toLocaleString('en-US');
