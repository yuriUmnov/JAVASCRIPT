"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Error');
}

// const num = 50;
// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('a lot of');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error');

const num = 50;

switch (num) {
    case 49:
        console.log('falses');
        break;
    case 100:
        console.log('falses');
        break;
    case 51:
        console.log('this is trues');
        break;
    default:
        console.log('not this time');
        break;
}