/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const newName = "Gabriel Yanqui";

// Step 2: place the value of the name variable into the task2.html file inside of the element with an id of "name"
const nameElement = document.querySelector("#name");
nameElement.textContent = newName;

// Step 3: declare and instantiate a variable to hold the current year
const year = new Date().getFullYear();

// Step 4: place the value of the current year variable into the task2.html file inside of the element with an id of "year"
const yearElement = document.querySelector("#year");
yearElement.textContent = year;

// Step 5: declare and instantiate a variable to hold the name and location of your picture
const picture = "images/gab-yan.jpg";

// Step 6: place the value of the picture variable into the task2.html file in the "src" attribute of the img element
const pictureElement = document.querySelector("#picture");
pictureElement.setAttribute("src", picture);

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const favoriteFoods = ["Burgers", "Aji de Gallina", "Pachamanca", "Ceviche"];

// Step 2: Use JavaScript to modify the element who's id is "food" found in the task2.html file.
const foodElement = document.querySelector("#food");
foodElement.textContent = favoriteFoods.join(", ");

// Step 3: declare and instantiate a variable to hold another favorite food
const anotherFavoriteFood = "Sushi";

// Step 4: add the variable holding another favorite food to the favorite food array
favoriteFoods.push(anotherFavoriteFood);

// Step 5: Update the element who's id is "food" with the updated favorite foods array
foodElement.textContent = favoriteFoods.join(", ");

// Step 6: remove the first element in the favorite foods array
favoriteFoods.shift();

// Step 7: Update the element who's id is "food" with the updated favorite foods array
foodElement.textContent = favoriteFoods.join(", ");

// Step 8: remove the last element in the favorite foods array
favoriteFoods.pop();

// Step 9: Update the element who's id is "food" with the updated favorite foods array
foodElement.textContent = favoriteFoods.join(", ");


// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").value = currentYear;