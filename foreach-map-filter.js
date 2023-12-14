
function doubleValues(arr){
    let newArray = [];
    arr.forEach(function(value){
        newArray.push(value * 2);
    });
    return newArray;
}

function onlyEvenValues(arr){
    return arr.filter(function(number){
        return number % 2 === 0;
    });
}

function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function(value) {
        newArray.push(value[0] + value[value.length -1]);
    });
    return newArray;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(item) {
        item[key] = value;
    });
    return arr;
}

function vowelCount(str){
    let result = {};
    let vowels = "aeiou";

   str.toLowerCase().split("").forEach(function(letter){
    if (vowels.includes(letter)) {
        result[letter] = (result[letter] || 0) + 1;
    }
   });
   return result;
}

function doubleValuesWithMap(arr) {
    let newArray = [];
    return arr.map (function(val){
        return val * 2;
    })
}

function valTimesIndex(arr){
    let newArray = [];
    return arr.map (function(value, i) {
        return value * [i];
    })
    return newArray;
}

function extractKey(arr, key){
    let newArray = [];
    arr.map(function(value){
        newArray.push(value[key])
    });
    return newArray;
}

function extractFullName(arr){
    let newArray = [];
    return arr.map(function(value){
    return  value.first + " " +  value.last
});
}

function filterByValue(arr, key) {
    let newArray = [];
    return arr.filter(function(value){
        return value[key] === true;
    })
    return newArray;
}

function find(arr, searchValue) {
    return arr.filter(function(value){
        return value === searchValue;
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(value) {
        return value[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowels = 'aeiou'
    return str.toLowerCase().split("").filter (function(value) {
        return vowels.indexOf(value) === -1;
    })
    .join("");
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter(function(value){
        return value % 2 !== 0;
    })
    .map(function(value){
        return value * 2;
    });
}
