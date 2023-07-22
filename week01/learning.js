const one = 1;
let two = "2";
const three = "e";
// const result = one + two; I changed the const to a let, because then we will have to modify the variable

let result = one + two;

console.log(result);
output("ln7", result);
// we can manually change the type of some strings. parseInt(string) will change a number that is a string into an actual number. Use it on our two variable
result = one + parseInt(two);
// output("ln10", result); I changed the output function to use console.log instead, since the output function relies on a DOM element to be present and may not work in some contexts.

console.log("ln10", result);

// We didn't get any output from line 9 above. What change would you need to make to get it to work? Make the change. Hint...in the bottom left corner of the window there is a button 'Console'. Click it.

// what about multiplication?
result = one * two;
output("ln16", result);
// was the result what you expected?

// what about this? Explain what is happening. What does NaN mean?
result = one * three;
output("ln21", result);

// let's try changing the value of two
too = 4;

result = one + two;
output("ln27", result);
// did we get the value we expected? Why didn't it work?
// try adding 'use strict'; to the first line of our code then look at the console again. Fix the error.

const myArray = [1,2,3,5];
//add the number 4 to the end of the array

console.log(myArray);
// it would be nice if our numbers were in the correct order. We will learn how to sort later, for now let's remove the last two items in the array and then add them back in the correct numerical order.




console.log(myArray);


// The code below is used to aid in displaying the results.
function output(line, content) {
  const outputElement = document.querySelector(".output");
  outputElement.innerHTML += `<p>${line} : ${content}</p>`;
}
