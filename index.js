// Functional Programming in JS

// ES6 Destructuring
const { first, second } = { first: 1, second: 2 };

console.log(first, second);

// Declaring variable and then assigning those variables the values we want.

// Advanced Deep Arrays

let [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
// console.log("a:", a, "b:", b, "c:", c, "d:", d);
// a is 1, b is 2, c is [[3, 4], 5], and d is 6

// List Transformations:

const game = {};

game["suspects"] = [];

game.suspects.push({
  name: "Rusty",
  color: "orange",
});

game.suspects[1] = {
  name: "Miss Scarlet",
  color: "red",
};

// console.log(game['suspects']);

for (let i = 0; i < game['suspects'].length; i++) {
    const element = game['suspects'][i];
    console.log(element)
    // Have to ['suspects'] because that array is never defined. 
}

game['suspects'].forEach(element => {
    console.log(element)
});