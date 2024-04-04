"use strict";
// project =38
//Cities: Write a function called describe_city() that accepts the name of a city and its country.The function should print a sentence, such as karachi is in pakistan. Give parameter for the country a default value. 
// Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in "${country}".`);
}
describe_city("karachi");
describe_city("Balochistan");
describe_city("dubai", "Islamabad");
