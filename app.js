// 1.1. What is the difference between a parameter and an argument?
// The values that are declared within a function when the function is called are known as an argument. Whereas, the variables that are defined when the function is declared are known as a parameter.    reference:https://byjus.com/gate/difference-between-argument-and-parameter-in-c-and-c-plus-plus/#:~:text=Argument%20Vs.,are%20known%20as%20a%20parameter.
// 1.2. Within a function, what is the difference between return and console.log?
// console. log is function that logs passed in argument to console. return is keyword, which part of the return statement, used to end function execution.    reference: freecodecamp.org 
// 1. 3. What are the implications of the ability of a function to return a value?
// When the function completes (finishes running), it returns a value, which is a new string with the replacement made.    reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values
// 2. calculateCube
function calculateCube(num) {
    return num ** 3
}
console.log(calculateCube(3))

// 3. isAVowel
function isAVowel(letter) {
    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') return true;
    return false;
}
console.log(isAVowel('a'));   //expecting true


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
}
console.log(getTwoLengths('array', 'object')); // I'm expecting [5, 6]


// 5. sumArray
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }
    return sum;
 }
 console.log(sumArray([1, 2, 3, 4, 5])); // I'm expecting 15

// or I could also do this also
// function sumArray(arr) {
//     let sum = 0;
//     arr.forEach(num => {
//         sum += num;
//     });
//     return sum;
// }



// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
    }
    console.log(checkPrime(3));  //expecting true


// // 6.2 printPrimes
function printPrimes(num) {
    let prime = [];
    for(let i = 2; i <= num; i++) {
      if(checkPrime(i)) {
        prime.push(i);
      }
    }
    return prime;
  }
  console.log(printPrimes(5)); // I'm expecting [2, 3, 5]

// // 7. printLongestWord
// function printLongestWord(arr) {
//     // YOUR CODE HERE
// }

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};