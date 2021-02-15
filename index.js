//We want to COMPLETELY reverse an array by flipping the order of the entries AND flipping the order of characters in each element.

//1) a) Define a 'reverseCharacters' function. Give it one parameter, which will be the string to reverse.
//b) Within the function, split the string into an array, then reverse the array.
//c) Use join to create the reversed string and return that string from the function.
//d) Below the function, define and initialize a variable to hold a string.
//e) Use console.log(reverseCharacters(myVariableName)); to call the function and verify that it correctly reverses the characters in the string.
//f) Use method chaining to reduce the lines of code within the function.

let arr = ['hello', 'world', 123, 'orange'];

//2) The 'split' method does not work on numbers, but we want the function to return a number with all the digits reversed (e.g. 1234 converts to 4321 and NOT the string "4321")
//a) Add an if statement to your reverseCharacters function to check the typeof the parameter.
//b - d) If typeof is ‘string’, return the reversed string as before. If typeof is ‘number’, convert the parameter to a string, reverse the characters, then convert it back into a number. Return the reversed number.
//e) Be sure to print the result returned by the function to verify that your code works for both strings and numbers. Do this before moving on to the next exercise.

function reverseCharacters(str) {
  if(typeof str === "string"){
    return str.split("").reverse().join("");
    } else {
    return Number(String(str).split("").reverse().join(""));
  }
}

//console.log(reverseCharacters(arr[2]));
//console.log(arr.length);


//3) Create a new function with one parameter, which is the array we want to change. The function should:
//a) Define and initialize an empty array.
//b) Loop through the old array.
//c) For each element in the old array, call reverseCharacters to flip the characters or digits.
//d) Add the reversed string (or number) to the array defined in part ‘a’.
//e) Return the final, reversed array.
//f) Be sure to print the results from each test case in order to verify your code.


let arrayTest1 = ['apple', 'potato', 'Capitalized Words'];
let arrayTest2 = [123, 8897, 42, 1168, 8675309];
let arrayTest3 = ['hello', 'world', 123, 'orange'];



function reverseArray(arr) {
  let reversed = [];
  for (i = 0; i < arr.length; i++){
    reversed.push(reverseCharacters(arr[i]));
  }
     return reversed.reverse();
}

console.log(reverseArray(arrayTest3));


//Bonus 4-5

function funPhrase(str){
let newStr = '';
  if(str.length <= 3){
    newStr = str.slice(str.length - 1);
  } else {
    newStr = str.slice(0,3);
  }
  return `We put the ${newStr} in ${str}.`
}


let str = 'Functions rock!';

console.log(funPhrase(str));

//Bonus 6

function calculateAreaOfRectangle(length, width){
  let rectangleArea = 0;
  if(!width){
    rectangleArea = (length**2);
    return rectangleArea;
  } else {
    rectangleArea = (length*width);
    return rectangleArea;
  }
}
console.log(`The area is ${calculateAreaOfRectangle(8,2)} cm^2.`);