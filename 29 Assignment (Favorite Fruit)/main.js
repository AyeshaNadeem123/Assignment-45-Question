// Favorite Fruit:Make a array of your favorite fruits,and then write a series of independent if statements that check for certain fruitsin your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.if the fruit is in your array,the if block should print a statement, such as you really like bananas!
var favoritefruit = ["Strawberry", "Mango", "Watermelon"];
if (favoritefruit.includes("Strawberry")) {
    console.log("you really like Strawberry");
}
if (favoritefruit.includes("Mango")) {
    console.log("you really like Mango");
}
if (favoritefruit.includes("avocado")) {
    console.log("you really like avocado");
}
else {
    console.log("avocado not in your favorite list");
}
if (favoritefruit.includes("Watermelon")) {
    console.log("you really like Watermelon");
}
if (favoritefruit.includes("Banana")) {
    console.log("you really like Banana");
}
else {
    console.log("Banana not in your favorite list");
}
