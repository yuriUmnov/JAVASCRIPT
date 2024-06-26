
const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

function convert (amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

// promotion(convert(500, usdCurr));
const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined);

// Место для первой задачи

function sayHello(name) {
    let res = 'Hello ' + name;
    return res
}
let greeting = sayHello('Anton')
console.log(greeting);

// Место для второй задачи
function returnNeighboringNumbers(num) {
    
    result = [num - 1, num, num + 1];
    return result;
}   
returnNeighboringNumbers(5);

// Место для третьей задачи
// function getMathResult(base, times) {
//     if (typeof times !== 'number' || times <= 0) {
//         return base;
//     }
//     const resultArray = [];
//     for (let i = 1; i <= times; i++) {
//         resultArray.push(base * i);
//     }
//     return resultArray.join('---')
// }
// console.log(getMathResult(3, 10));

function getMathResult(num, times) {
    if(typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}

getMathResult(10, 5);




