// Guide to Learn JS

/**
 Arrays
 */

let arr = [10, 20, 30, 40, 50];

// Array methods
/**
 * array index--->  arr[indexNumber]
 * length
 * push
 * pop
 * shift
 * unshift
 * 
 * -----
 * Iteration
 * 
 * 
 * -----
 * map
 * filter
 * find
 * forEach
 * reduce
 * indexOf
 * includes
 * 
 * Arrow function
 * .......
 * Mutable and immutable data
 */

// array indexing
// console.log(arr[13])

//array length
// console.log(arr.length)

//push - add an element to an array (end of array)
// console.log(arr, 'before')
// arr.push(100)

// console.log(arr, 'after push method')

//pop - removes the last element from an array
// console.log(arr, 'before')
// arr.pop();
// console.log(arr, 'after')

//shift - remove the element in an array
// console.log(arr, 'before')
// arr.shift()
// console.log(arr, 'after')

//Unshift - remove the element in an array
// console.log(arr, 'before')
// arr.unshift('doe')
// console.log(arr, 'after')

// Iteration
// for loop

/**
 * for(initialization, condition, incrementing/ decrementing){
 *  code goes here
 * }
 */

console.log(arr.length, 'length of array')


// for(let i=0; i < arr.length; ++i){

//     console.log(arr[i], `is in position ${i}`);

//     let addNumber = arr[i] + 100;
//     console.log(addNumber, 'added  100')
// }

// for in --- iterating element index

// for(let i in arr){
//     console.log(i, 'for in');
//     let el = arr[i];
//     console.log(el, 'element using for in')
// }




// for of --- iterating element

// for(let el of arr){
//     console.log(el, 'for of')
// }

// Includes



// console.log(passedStudentsId.includes('STUTERN02'))

function isPassed(studentId){
    let passedStudentsId = ['STUTERN01', 'STUTERN01', 'STUTERN02'];
    return passedStudentsId.includes(studentId.toUpperCase().trim())
}

console.log(isPassed(" sTUtERN01 "))


