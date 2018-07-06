// Excercise 1 Looping a Triangle
let temp = "";

for (let i = 1; i <= 7; i = i + 1) {
    for (let j = 1; j <= i; j = j + 1) {
        temp += "#";
    }
    console.log(temp);
    temp = "";
}

// Excercise 2 FizzBuzz
let strBuilder = '';

for (i = 1; i <= 100; i = i + 1) {
    if (i % 15 === 0) {
        strBuilder += 'FizzBuzz ';
    } else if (i % 3 === 0) {
        strBuilder += 'Fizz ';
    } else if (i % 5 === 0) {
        strBuilder += 'Buzz ';
    } else {
        strBuilder += i + ' ';
    }
}

console.log(strBuilder);

// Excercise 3 Chess Board
let chess = '';
let size = 8;

for (i = 0; i < 8; i += 1) {
    for (j = 0; j < 8; j += 1) {
        if (i % 2 === 0 && j % 2 !== 0 ||
            i % 2 !== 0 && j % 2 === 0
        ) {
            chess += '#';
        } else {
            chess += ' ';
        }
    }
    chess += '\n';
}


console.log(chess);

// Excercise 4 Recursion 
function findSolution(target) {
    function find(current, history) {
        if (current === target) {
            return history;
        }

        if (current >= target) {
            return null;
        }

        return find(current + 5, `(${history} + 5)`) ||
            find(current * 3, `${history} * 3`);
    }

    return find(1, '1');
}

console.log(findSolution(18));

// Excercise 5 Minimum 
const minFunc = (a, b) => a < b ? a : b;

console.log(minFunc(1, 10));

// Excercise 6 Recursion
const isEven = n => {
    if (n === 0) return true;
    if (n === 1) return false;
    if (n < 0) return isEven(-n);
    return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// Excercise 7 Bean Counting
const countChar = (str, char) => {
    let counter = 0;
    for (let c of str) {
        counter = c === char ? counter + 1 : counter;
    }

    return counter;
}

const countBs = str => countChar(str, 'B');

console.log(countBs('BBBAaBbs'));

// Excercise 8 REST parameters
const max = (...numbers) => {
    let max = numbers[0] ? numbers[0] : null;
    for (let n of numbers) {
        if (n > max) {
            max = n;
        }
    }

    return max;
}

console.log(max(4, 3, 2, 6, 7, 1)); // 7

// Excercise 9 Sum of Range
const range = (start, end, step = 1) => {
    let arr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) arr.push(i);
    } else {
        for (let i = start; i >= end; i += step) arr.push(i);
    }

    return arr;
}

const sum = numbers => {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }

    return sum;
}

console.log(sum(range(5, 2, -1)));
console.log(sum(range(1, 10, 2)));

// Excercise 10 Reverse Array 
const reverseArray = arr => {
    let newArr = [];
    for (let el of arr) {
        newArr.unshift(el);
    }
    return newArr;
}

const reverseArrayInPlace = arr => {
    for (let i = 0; i < Math.floor(arr.length / 2); i += 1) {
        let tmp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = tmp;
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));

// Exercise 11 A list
