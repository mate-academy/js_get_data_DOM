'use strict';

const populations = [...document.getElementsByClassName('population')];
const total = populations.reduce((sum, item) => {
  const itemPopulation = parseInt(item.innerText.replace(/,/g, ''));

  return sum + (isNaN(itemPopulation) ? 0 : itemPopulation);
}, 0);

const fn = (className, n) =>
  (document.getElementsByClassName(className)[0].innerText =
    n.toLocaleString());

fn('total-population', total);
fn('average-population', Math.round(total / populations.length));
