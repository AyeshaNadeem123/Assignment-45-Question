// project =43
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians(Magicians) {
    //print the list of magicians
    Magicians.forEach(function (Magicians) { return console.log(Magicians); });
}
function make_greatCopy(magicians) {
    //Add 'the great' to each magicians name and return a new array
    var greatMagicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var Magician = magicians_1[_i];
        greatMagicians.push(Magician + "the great");
    }
    return greatMagicians;
}
//Original list of magicians
var originalMagicians = [
    "Ayesha", "Hira", "Dua"
];
console.log("\nOriginal list of magicians:");
showMagicians(originalMagicians);
//Add 'the great' to each magician's name and store in a new array 
var greatMagicians = make_greatCopy(originalMagicians);
console.log("\nModified list of magicians with 'the great':");
showMagicians(greatMagicians);
//Original list of magicians remains unchanged
console.log("\nOriginal list of magicians remains unchanged:");
showMagicians(originalMagicians);
