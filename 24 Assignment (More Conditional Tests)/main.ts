let car = 'subaru' ;
let car2 = 'SUV' ;
let car3 = 'Subaru' ;
let cars = ['subaru' , 'sedan','hatchback'];

console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru'); // Output: True

console.log("Is car == 'SUV'? I predict False.")
console.log(car == 'SUV'); // Output: False

console.log("Is car.tolowerCase() == car2.toloweCase()? I predict True.")
console.log(car.toLowerCase() == car2.toLowerCase()); // Output: True

console.log("Is car == car3? I predict False.")
console.log(car == car3); // Output: False

console.log("Is car.length == car3.length? I predict True.")
console.log(car.length  == car3.length); // Output: True

console.log("Is car2 > car3? I predict False.")
console.log(car2 > car3); // Output: False

console.log("Is car2 >= car3? I predict False.")
console.log(car2 >= car3); // Output: False

console.log("Is car2 < car3? I predict True.")
console.log(car2 >= car3); // Output: True

console.log("Is car2 <= car3? I predict True.")
console.log(car2 <= car3); // Output: True

console.log("Is car2 == car3 && car2.length == car3.length?I predict False.")
console.log(car2 == car3 && car2.length == car3.length); // Output: False

console.log("Is car2 == car3 || car2.length == car3.length? I predict True.")
console.log(car2 == car3 || car2.length == car3.length); // Output: True

console.log("Is 'subaru' in cars? I predict True.")
console.log('subaru' in cars); // Output: True

console.log("Is 'SUV' in cars? I predict False.")
console.log('SUV' in cars); // Output: False

console.log("Is 'sedan' in cars? I Predict True.")
console.log('sedan' in cars); // Output: True

console.log("Is 'hatchback' in cars? I predict True.")
console.log('hatchback' in cars); // Output: True

console.log("Is 'truck' in cars? I predict False.")
console.log('truck' in cars); // Output: False

console.log("Is 'truck' not in cars? I predict True.")
console.log('truck' in cars); // Output: True
console.log("Is 'subaru' not in cars? I predict False.")
console.log('subaru' in cars); // Output: False


