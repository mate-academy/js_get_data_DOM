'use strict';

const elements = document.querySelectorAll('.population');

const sum = [...elements].reduce((prev, element) => prev
+ (Number(element.innerText.replace(/,/g, ''))), 0);

const average = sum / [...elements].length;

const sumStr = sum.toLocaleString();
const averageStr = average.toLocaleString();

function getNewValue(classNameValue,
  textContentValue, classParentElement, classPrevElement) {
  const parentElement = document.querySelector(classParentElement);
  const prevValue = document.querySelector(classPrevElement);
  const item = document.createElement('span');

  item.className = classNameValue;

  item.textContent = textContentValue;

  prevValue.remove();

  parentElement.append(item);
}

getNewValue('total-population', sumStr, '.total', '.total-population');

getNewValue('average-population',
  averageStr, '.average', '.average-population');
