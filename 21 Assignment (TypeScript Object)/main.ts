// Employee interface to define the object type
interface Employee {
    emp_name: string;
    department: string;
    joining_date: Date;
}

//Creating an object of the Employee type
let emp: Employee = {
emp_name: "Ayesha Nadeem",
department:"Weaving",
joining_date: new Date(),
};

// printing the object information
console.log(
    "The joining date of the " +
    emp.emp_name +
    " into the " +
    emp.department + 
    " department is " + 
    emp.joining_date
)