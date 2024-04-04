
let animals: string[] = ["lion", "elephant", "giraffe", "zebra", "kangaroo"];

console.log("Original order:")
console.log(animals);

console.log("\nAlphabetical order:")
console.log(animals.sort());


console.log("\nReverse alphabetical order:")
console.log(animals.sort().reverse());

console.log("\nReversed order:")
animals.reverse();
console.log(animals);

console.log("\nSorted in alphabetical order:")
animals.sort();
console.log(animals);

console.log("\nSorted in reverse alphabetical order:")
animals.sort().reverse();
console.log(animals);

console.log("\nSorted in reverse alphabetical order:")

animals.sort().reverse();
console.log(animals);

console.log("\nNumber of animals:", animals.length);

console.log("\nNumber of animals:" , animals.length);

animals.push("koala");
console.log("\nAfter adding an animal:")
console.log(animals);

animals.splice(animals.indexOf("giraffe"), 1);
console.log("\nAfter removing an animal:")
console.log(animals);