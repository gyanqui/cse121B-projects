/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInfo = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Gabriel Yanqui";

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = "../week02/images/gab-yan.jpg";

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Aji de Gallina", "Ceviche", "Papa Rellena"];

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Hiking", "Chess", "Calisthenic"];

// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({ place: "", length: "" });

// Step 8: For each property, add appropriate values as strings
myInfo.placesLived[0].place = "Cusco, Peru";
myInfo.placesLived[0].length = "3 years";

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({ place: "Lima, Peru", length: "15 years" });
myInfo.placesLived.push({ place: "Quito, Ecuador", length: "2 years" });
myInfo.placesLived.push({ place: "Lima, Peru", length: "3 years" });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").textContent = myInfo.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").src = myInfo.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById("photo").alt = myInfo.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favoriteFoodsList = document.getElementById("favorite-foods");
myInfo.favoriteFoods.forEach(food => {
    const listItem = document.createElement("li");
    listItem.textContent = food;
    favoriteFoodsList.appendChild(listItem);
});

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbiesList = document.getElementById("hobbies");
myInfo.hobbies.forEach(hobby => {
    const listItem = document.createElement("li");
    listItem.textContent = hobby;
    hobbiesList.appendChild(listItem);
});

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the placesLived property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
const placesLivedList = document.getElementById("places-lived");
myInfo.placesLived.forEach(place => {
    const dt = document.createElement("dt");
    dt.textContent = place.place;
    placesLivedList.appendChild(dt);

    const dd = document.createElement("dd");
    dd.textContent = place.length;
    placesLivedList.appendChild(dd);
});































/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// const myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
