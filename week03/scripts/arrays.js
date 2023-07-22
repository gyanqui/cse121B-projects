// example 1
const steps = ["one", "two", "three"];
const stepsHtml = steps.map(function (step) {
  return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = stepsHtml.join();


// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 25;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log("myArray")


const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});


// same thing with an arrow function
// const shortWords = words.filter((word) => word.length < 6);



// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpa = pointsTotal / gpaPoints.length;

// example 2
// this is the same thing as above, but with an arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;