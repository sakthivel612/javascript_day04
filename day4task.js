// 1 . Do the below programs in anonymous function & IIFE

// a . Print odd numbers in an array
// anonymous function
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var oddnumbers = function(){
    for(i=0;i<array.length;i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }
oddnumbers();

output : 1
3
5
7
9
11
13
15


// IIFE
(function(array){
    for(var i=0;i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i])
            } 
        }
})([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

output : 1
3
5
7
9
11
13
15


// b . Convert all the strings to title caps in a string array
// anonymous
var str = ['sakthivel', 'mathavan', 'vijay'];

var caps = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr;
}

var result = caps(str);
console.log(result);

ouput : [ 'Sakthivel', 'Mathavan', 'Vijay' ]


// IIFE
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    console.log(str);
  })("sakthi is my name");

output:   [ 'Sakthi', 'Is', 'My', 'Name' ]


// c.Sum of all numbers in an array 
// anonymous 
var array = [1,2,3,4,5,6,7,8,9,10]
var sum = function(){
    var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
             sum = sum + array[i];
        }
           console.log(sum);
    }
sum();

output : 55



// IIFE
(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          console.log(sum);
    })([1,2,3,4,5,6,7,8,9,10])

    output : 55



// d.Return all the prime numbers in an array
// Anonymous Function
var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
 var primnumber =  function(){
      numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      console.log(numArray);
  }
primnumber();

output : [1,  2,  3, 5, 7, 11, 13]


// IIFE  
(function(numArray){
     numArray = numArray.filter((number) => {
       for(var i=2;i<=Math.sqrt(number);i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

output : [1,  2,  3, 5, 7, 11, 13]



// e. Return all the palindromes in an array
// Anonymous Function

let stringsArray = ['racecar', 'level', 'hello', 'madam', 'world'];

var palindrome = function () {
    for (let str of stringsArray) {
        let strReverse = str.split('').reverse().join('');
        if (str === strReverse) {
            console.log("The string is a palindrome: " + str);
        } else {
            console.log("The string is not a palindrome: " + str);
        }
    }
}

palindrome();

output:

The string is a palindrome: racecar
The string is a palindrome: level
The string is not a palindrome: hello
The string is a palindrome: madam
The string is not a palindrome: world


// IIFE
(function (str) {
    var palnumber = str.split('').reverse().join('');
    var isPalindrome = true;

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== palnumber[i]) {
            isPalindrome = false;
            break; // Break out of the loop as soon as a mismatch is found
        }
    }

    if (isPalindrome) {
        console.log("The string is a palindrome: " + str);
    } else {
        console.log("The string is not a palindrome: " + str);
    }
})('racecar');

output : The str is a palindrome: racecar



// f. Return median of two sorted arrays of the same size.
// anonymous
var array = [1,2, 3, 3, 4, 5, 6, 6];

var findMedian = function() {
    var sortedArray = [...new Set(array)].sort();
    var length = sortedArray.length;

    if (length % 2 === 0) {
        // If the array length is even, average the two middle elements
        var middle1 = sortedArray[length / 2 - 1];
        var middle2 = sortedArray[length / 2];
        var median = (middle1 + middle2) / 2;
        console.log("The median is: " + median);
        return median;
    } else {
        // If the array length is odd, return the middle element
        var middle = sortedArray[Math.floor(length / 2)];
        console.log("The median is: " + middle);
        return middle;
    }
}

findMedian();

output : The median is: 3.5



// IIFE
(function(array) {
    var sortedArr = [...new Set(array)].sort();
    var length = sortedArr.length;

    if (length % 2 === 0) {
        // If the array length is even, average the two middle elements
        var middle1 = sortedArr[length / 2 - 1];
        var middle2 = sortedArr[length / 2];
        var median = (middle1 + middle2) / 2;
        console.log("The median is: " + median);
        return median;
    } else {
        // If the array length is odd, return the middle element
        var middle = sortedArr[Math.floor(length / 2)];
        console.log("The median is: " + middle);
        return middle;
    }
})([1, 2, 3, 3, 4, 5, 6, 6]);

output : The median is: 3.5




// g . Remove duplicates from an array
// anonymous
var array = [1, 2, 3, 3, 4, 5, 6, 6];
var sortedArr = function () {
    var dup = [...new Set(array)].sort(function (a, b) {
        return a - b;
    });
    console.log(dup);
};
sortedArr();

output : [ 1, 2, 3, 4, 5, 6 ]



// IIFE
(function (array) {
    var sortedArr = [...new Set(array)].sort(function (a, b) {
        return a - b;
    });
    console.log(sortedArr);
})([1, 2, 3, 3, 4, 5, 6, 6]);

output : [ 1, 2, 3, 4, 5, 6 ]




// h . Rotate an array by k times
// anonymous
var numarray = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

var rotateArray = function () {
    var rotatedArray = [...numarray]; // Create a copy of the original array

    for (let i = 0; i < k; i++) {
        rotatedArray.unshift(rotatedArray.pop());
    }

    console.log(rotatedArray);
}

rotateArray();

output : [5, 6, 7, 1, 2, 3, 4]



// IIFE
(function (array) {
    var rotateArray = [...array];  // Create a copy of the original array
    var k = 3;

    for (var i = 0; i < k; i++) {
        rotateArray.unshift(rotateArray.pop());
    }

    console.log(rotateArray);
})([1, 2, 3, 4, 5, 6, 7]);

output : [5, 6, 7, 1, 2, 3, 4]




// 2 . Do the below programs in arrow functions.
// a .Print odd numbers in an array

// arrow function
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);

output : [1,  3,  5,  7, 9, 11, 13, 15]



// b .Convert all the strings to title caps in a string array
// arrow function
var str = ["sakthivel", "mathavan", "vijay"];

titleCase = () => {
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].toLowerCase().charAt(0).toUpperCase() + str[i].slice(1);
    }

    console.log(str.join(', '));
}

titleCase();

output : Sakthivel, Mathavan, Vijay


// c .Sum of all numbers in an array
// arrow function
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
sum = () => {
    var totalSum = 0;
    for (var i = 0; i < array.length; i++) {
        totalSum += array[i];
    }
    console.log(totalSum);
}

sum();

output : 55



// d . Return all the prime numbers in an array
// arrow function
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
PrimeNumber = () => {
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    console.log(numArray);
}

PrimeNumber();

output : [1,  2,  3, 5, 7, 11, 13]


// e .Return all the palindromes in an array
let strArray = ['racecar', 'level', 'hello', 'madam', 'world'];

palindrome = () => {
    for (let str of strArray) {
        let strReverse = str.split('').reverse().join('');
        if (str === strReverse) {
            console.log("The string is a palindrome: " + str);
        } else {
            console.log("The string is not a palindrome: " + str);
        }
    }
}

palindrome();

// output:

The string is a palindrome: racecar
The string is a palindrome: level
The string is not a palindrome: hello
The string is a palindrome: madam
The string is not a palindrome: world


