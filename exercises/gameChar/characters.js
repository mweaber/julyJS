// Creating a Clue like game with Objects and Arrays

// Defining an object to simulate the cards inside the envelope
const newGame = {};


// New game culprit
newGame.culprit = "??";

// Here we use the bracket notation to create an array of objects that would be our weapons. We also define the type of weapon and location it belongs

newGame["weapons"] = [
  { type: "lead pipe", location: "Garage" },
  {type: "candlestick", location: "Dining Room"},
  {type: "book", location: "Office"},
];

// Here we define an empty array and then manually add a suspect. Following that we use an array method to push a second person into that array

newGame.suspects = []

newGame.suspects[0] = "Prof. Plum"
newGame.suspects.push("Mr. Green");

console.log(newGame);


