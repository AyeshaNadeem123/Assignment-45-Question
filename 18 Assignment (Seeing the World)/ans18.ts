const places: string[] = ["Quaidabad, Malir" , "Landhi,Sher peo", "johar Mord, Nippa", "Karachi University, Ned University"]
console.log("Original order:", places);



console.log("Alphabetical order:", places.slice().sort());

console.log("Original order again:", places);

console.log("Reverse alphabetical order:", places.slice().sort().reverse());

places.reverse();
console.log("Original orderagain:", places);


places.sort();
console.log("Alphabetical order:", places);

places.sort((a, b) => b.localeCompare(a)); 
places.reverse();
console.log("Reversed order:" , places);

places.reverse();
console.log("Original order again:", places);
places.sort();
console.log("Alphabetical order:" , places);

places.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:" , places)


