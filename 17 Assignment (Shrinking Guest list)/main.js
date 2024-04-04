var dinnerGuests = ["Sir Zia", "Kamran khan Tessori", "Sir Okasha Aijaz", "Noor", "Ayesha"];
console.log("I can only invite two people for dinner.");
while (dinnerGuests.length > 2) {
    var Noor = dinnerGuests.pop();
    console.log("Sorry, ".concat(Noor, ", I can't inviteyou to dinner."));
}
console.log("Dear ".concat(dinnerGuests[0], ", you're still invited to dinner."));
console.log("Dear ".concat(dinnerGuests[1], ", you're still invited to dinner."));
dinnerGuests.splice(0, 2);
console.log("My dinner guest list:", dinnerGuests);
