'use strict';

// write your code here
const element = document.querySelectorAll('.population');

const arr = [...element].map(item => item.innerHTML);

const str = arr.join(' ');

let newStr = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] !== ',') {
    newStr += str[i];
  }
}

const arrRes = newStr.split(' ');

const res = arrRes.map(item => parseInt(item));

const total = res.reduce((acc, item) => acc + item);

// eslint-disable-next-line no-unused-vars
const average = total / res.length;
