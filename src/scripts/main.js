'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const arrPopulations = [...populations]
  .map((population) => +((population.textContent).split(',').join('')));

const totalCountPeople = arrPopulations
  .reduce((prevPeople, people) => prevPeople + people, 0);

const averageCountPeople = Math.ceil((arrPopulations
  .reduce((prevPeople, people) => prevPeople + people, 0))
  / arrPopulations.length);

const numberFormatter = Intl.NumberFormat('en-US');
const formattedTotalCountPeople = numberFormatter.format(totalCountPeople);
const formattedAverageCountPeople = numberFormatter.format(averageCountPeople);

totalPopulation.textContent = formattedTotalCountPeople;
averagePopulation.textContent = formattedAverageCountPeople;
