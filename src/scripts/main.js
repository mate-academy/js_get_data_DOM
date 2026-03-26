'use strict';

const population = document.querySelectorAll('.population');
const populationList = [...population];
const result = [];

populationList.forEach((element) => {
  const raw = element.textContent.trim();
  const cleaned = raw.replace(/\s+/g, '').replace(/,/g, '');
  const num = Number(cleaned);

  result.push(num);
});

const nums = result.filter((num) => Number.isFinite(num));
const total = nums.reduce((sum, people) => sum + people, 0);
const average = nums.length ? Math.round(total / nums.length) : 0;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const fmt = (v) => new Intl.NumberFormat('en-US').format(v);

totalPopulation.textContent = fmt(total);
averagePopulation.textContent = fmt(average);
