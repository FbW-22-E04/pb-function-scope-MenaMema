function expo(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    for (let i = 1; i <= b; i++) console.log(a ** i);
  }
}

expo(3, 5);

// console.log();

let fruit = "pineapple";
function printFavouriteFruit() {
  fruit = "peach";
  console.log("my favourite fruit is", fruit);
}

printFavouriteFruit(fruit);

function exponent(a, b) {
  let result = a ** b;
  console.log(result);
}

exponent(2, 8);
