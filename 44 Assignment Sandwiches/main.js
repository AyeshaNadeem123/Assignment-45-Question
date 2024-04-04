//project =44
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
function sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich ingredients:");
    for (var i = 0; i < items.length; i++) {
        console.log(" - ".concat(items[i]));
    }
}
console.log("Take your delicious sandwich  Ayesha Nadeem");
sandwich('Tomatoes', 'Ketchup', 'Chicken');
sandwich('Cheese', 'Mayonnise', 'Garlic Chicken');
sandwich('Lettuce', 'Butter', 'Eggs', 'Ketchup');
