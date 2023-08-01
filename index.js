// index.js

// Define the cats array and initialize it with the initial values
let cats = ["Milo", "Otis", "Garfield"];

// Define the destructivelyAppendCat function
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Define the destructivelyPrependCat function
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Define the destructivelyRemoveLastCat function
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Define the destructivelyRemoveFirstCat function
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Define the appendCat function
function appendCat(name) {
  // Create a new array with the original cats array and the new name
  let newCats = [...cats, name];
  return newCats;
}

// Define the prependCat function
function prependCat(name) {
  // Create a new array with the new name and the original cats array
  let newCats = [name, ...cats];
  return newCats;
}

// Define the removeLastCat function
function removeLastCat() {
  // Create a new array with all elements except the last one from the original cats array
  let newCats = cats.slice(0, -1);
  return newCats;
}
// Define the removeFirstCat function
function removeFirstCat() {
    // Create a new array with all elements except the first one from the original cats array
    let newCats = cats.slice(1);
    return newCats;
  }
