'use strict';

const removeCommas = (string) => (
  string.replace(/,/g, '')
);

const getSumOfArray = (array) => (
  array.reduce((accumulative, current) => accumulative + current, 0)
);

const getAverageNumOfArray = (array) => {
  const sum = getSumOfArray(array);
  const { length } = array;

  return sum / length;
};

const getSeparatedNumber = (number) => {
  const stringifiedNumber = number.toString();
  const numberPlaces = stringifiedNumber.match(/.{1,3}(?=(.{3})*$)/g);

  return numberPlaces.join(',');
};

const changeInnerHTML = (element, value) => {
  element.innerHTML = value;
};

const populationElements = [...document.getElementsByClassName('population')];
const totalPopulationElement = document.querySelector('.total-population');
const avragePopulationElement = document.querySelector('.average-population');

const populationData = populationElements.map(({ innerText }) => (
  Number(removeCommas(innerText))
));
const totalPopulation = getSumOfArray(populationData);
const averagePopulation = getAverageNumOfArray(populationData);

changeInnerHTML(totalPopulationElement, getSeparatedNumber(totalPopulation));
changeInnerHTML(avragePopulationElement, getSeparatedNumber(averagePopulation));
