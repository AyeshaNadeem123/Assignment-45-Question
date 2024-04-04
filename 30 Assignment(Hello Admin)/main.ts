let  users: string [] = ['Ayesha', 'Admin', 'Hira', 'Sameer', 'Abdul Rafay',];

for(let user of users){
    if(user === "admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }

else{
    console.log(`Hello ${user}, thank you for logging in again.`)
}
}