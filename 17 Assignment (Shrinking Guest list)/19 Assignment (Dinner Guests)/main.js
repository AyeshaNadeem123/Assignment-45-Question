var dinnerGuests = ["Kamran khan Tesorri", "Sir Okasha", "Daniyal Naggori", "Noor", "Ayesha", "usman"];
console.log("I'm inviting ".concat(dinnerGuests.length, " people to dinner."));
while (dinnerGuests.length > 2) {
    var Muzammil = dinnerGuests.pop();
    console.log("Sorry, ".concat(Muzammil, ", I can't invite you to dinner."));
}
console.log("Dear ".concat(dinnerGuests[0], ", you're still invited to dinner."));
console.log("Dear ".concat(dinnerGuests[1], ", you're still invited to dinner."));
dinnerGuests.splice(0, 2);
console.log("My dinner guest list:", dinnerGuests);
