const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `
    });
    return str;
}
showFamily(family);
// console.log(showFamily(family));
// Семья состоит из: Peter Ann Alex Linda
//Семья пуста

// 2


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    })
}

standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string'){
        return "Errors!!!!!!!!"
    }
    return str.split('').reverse().join('');
}
reverse(someString);
// console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }
    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'USD'));
