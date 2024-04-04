const dinnerGuests: string[] = ["Sir Zia", "Kamran khan Tessori", "Sir Okasha Aijaz"];

console.log("Original dinner guest list:");
for (let i = 0; i < dinnerGuests.length; i++){
    console.log(`Dear ${dinnerGuests[i]}, I would like to invite you to dinner.`);
}

dinnerGuests.unshift("Noor");
dinnerGuests.splice(Math.floor(dinnerGuests.length / 2), 0, "iqra");

dinnerGuests.push("Ayesha");

console.log("I found a bigger dinner table, so I can invite more guests!");

console.log("New dinner guest list:");
for (let i = 0; i < dinnerGuests.length; i++){
    console.log(`Dear ${dinnerGuests[1]}, I would like to invite you to dinner.`);
}