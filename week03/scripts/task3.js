/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(num1, num2){
// Step 2: In the function, return the sum of the parameters number1 and number2
    return num1 + num2;
};

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumber(){
    const firstNum = parseInt(document.querySelector("#addend1").value);
    console.log("FIRST NUMBER:", firstNum)
    const secondNum = parseInt(document.querySelector("#addend2").value);
    console.log("SECOND NUMBER:", secondNum)
// Step 4: Assign the return value to an HTML form element with an ID of sum
    const sum = add(firstNum, secondNum);
    console.log("SUM:", sum)
    document.querySelector("#sum").value = sum;
};
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener('click', addNumber);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtract = function(num1, num2) {
    return num1 - num2;
};
const subtractNumbers = function(){
    const minuend = parseInt(document.querySelector("#minuend").value);
    console.log("MINUEND:", minuend)
    const subtrahend = parseInt(document.querySelector("#subtrahend").value);
    console.log("SUBSTRAHEND:", subtrahend)

    const difference = subtract(minuend, subtrahend);
    console.log("DIFFERENCE:", difference)
    document.querySelector("#difference").value = difference;
};
document.querySelector("#subtractNumbers").addEventListener('click', subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (factor1, factor2) => {
    return factor1 * factor2;
};  
const multiplyNumbers = () => {
    const firstFactor = parseInt(document.querySelector("#factor1").value);
    console.log("FIRST FACTOR:", firstFactor)
    const secondFactor = parseInt(document.querySelector("#factor2").value);
    console.log("SECOND FACTOR:", secondFactor)

    const product = multiply(firstFactor, secondFactor);
    console.log("PRODUCT:", product)
    document.querySelector("#product").value = product;
};
document.querySelector("#multiplyNumbers").addEventListener('click', multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (num1, num2) => {
    return num1 / num2;
};

const divideNumbers = () => {
    const dividend = parseInt(document.querySelector("#dividend").value);
    console.log("DIVIDEND:", dividend)
    const divisor = parseInt(document.querySelector("#divisor").value);
    console.log("DIVISOR:", divisor)

    const quotient = divide(dividend, divisor);
    console.log("QUOTIENT:", quotient)
    document.querySelector("#quotient").value = quotient;
};
document.querySelector("#divideNumbers").addEventListener('click', divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent  = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const array = Array.from({length: 25}, (_, i) => i + 1);
console.log(array)

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").textContent = array;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
function findOdds(value) {
    return value %2 != 0;
}
const oddFiltered = array.filter(findOdds);
console.log(oddFiltered)

document.querySelector("#odds").textContent = oddFiltered

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
function findEvens(value) {
    return value %2 == 0;
}
const evenFiltered = array.filter(findEvens);
console.log(evenFiltered)
document.querySelector("#evens").textContent = evenFiltered

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
function getSumOfArray(array) {
    return array.reduce((acumulator, currentValue) => acumulator + currentValue);
}
const sumOfArray = getSumOfArray(array);
console.log(sumOfArray);
document.querySelector("#sumOfArray").textContent = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
function multiplyArrayByTwo(array) {
    return array.map(num => num * 2);
}
const multiplied = multiplyArrayByTwo(array);
console.log(multiplied)
document.querySelector("#multiplied").textContent = multiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
function sumMultipliedArray(array) {
    return multiplied.reduce((acumulator, currentValue) => acumulator + currentValue);
}
const sumOfMultiplied = sumMultipliedArray(array);
console.log(sumOfMultiplied)
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;