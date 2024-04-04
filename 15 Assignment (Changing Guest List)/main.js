var dinnerGuests = ["Kamtan khan Tessori", "Sir Okasha Aijaz", "Daniyal Negori",];
console.log(" regret to inform you that ".concat(dinnerGuests[2], " can't make it to dinner."));
dinnerGuests.splice(2, 1);
dinnerGuests.push("Ayesha");
console.log("New dinner guest list:");
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear ".concat(dinnerGuests[1], ", I would like to invite you to dinner."));
}
