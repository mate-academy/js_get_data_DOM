'use strict';

const subject = document.querySelector('ol');
const allSubjectSpans = subject.querySelectorAll('span');

const arrayOfPopulations = [];

allSubjectSpans.forEach((item) => {
  arrayOfPopulations.push(+item.textContent.replaceAll(',', ''));
});

const totalPopulation = arrayOfPopulations.reduce(
  (item1, item2) => item1 + item2,
  0,
);

const averagePopulation = totalPopulation / arrayOfPopulations.length;

const totalElementsCollection =
  document.getElementsByClassName('total-population');

const totalElementContent = totalElementsCollection[0];

totalElementContent.replaceWith(totalPopulation.toLocaleString('en-US'));

const averageElementsCollection =
  document.getElementsByClassName('average-population');

const averageElementContent = averageElementsCollection[0];

averageElementContent.replaceWith(averagePopulation.toLocaleString('en-US'));
