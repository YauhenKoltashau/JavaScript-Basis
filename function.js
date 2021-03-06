// Shopping List
  const myList = [["audi", 10], ["bmw", 7], ["vw", 20], ["honda", 5], ["tesla", 3]];
  
// Write Reusable JavaScript with Functions
  //Create a function called reusableFunction which prints the string Hi World to the dev console.
  //Call the function.
  function reusableFunction() {
    console.log("Hi World")
  }
  reusableFunction()
  
// Passing Values to Functions with Arguments
  //Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
  //Call the function with two numbers as arguments.
  function functionWithArgs(elem1, elem2) {
  console.log(elem1 + elem2)
  }
  functionWithArgs(10, 45) 

// Return a Value from a Function with Return
  //Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.
  //function timesFive(arg) 
  {
  return arg * 5 
  }
  
// Global Scope and Functions
  //Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
  //Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.
  let myGlobal = 10;
  function fun1() {
  oopsGlobal = 5;
  }
  
// Local Scope and Functions
  function myLocalScope() {
  const myVar = 5
  console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
// Global vs. Local Scope in Functions
  const outerWear = "T-Shirt";
  function myOutfit() {
  const outerWear = "sweater"
  return outerWear;
  }
  myOutfit();
  
// Understanding Undefined Value returned from a Function
  // Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.
  let sum = 0;
  function addThree() {
  sum = sum + 3;
  }
  
  function addFive() {
  sum = sum + 5
  };
  
  addThree();
  addFive();
  
// Assignment with a Returned Value
  // Call the processArg function with an argument of 7 and assign its return value to the variable processed.
  let processed = 0;
  
  function processArg(num) {
  return (num + 3) / 5;
  }
  processed = processArg(7)
  
// Stand in Line
  // Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
  // Add the number to the end of the array, then remove the first element of the array.
  // The nextInLine function should then return the element that was removed.
  function nextInLine(arr, item) {
    arr.push(item)
    let removedNum = arr.shift()
    return removedNum;
  }
