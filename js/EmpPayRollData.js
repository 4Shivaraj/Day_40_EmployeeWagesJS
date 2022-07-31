/*
UC13.Ability to check the name starts with capital and has at least 3 characters - Use Regex Pattern - Use Try Catch in case of Error
*/

class EmployeePayroll
    {
    //property
    id;
    salary;
    gender;
    startDate;

    //Defining parameterizd constructor of class using constructor keyword
    constructor(...params) {
    this.id = params[0];
    this.name = params[1];
    this.salary = params[2];
    this.gender = params[3];
    this.startDate = params[4];
    }
    //Getter and setter methods for properties of class
    get name() { return this._name };
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
        {
            this._name = name;
        }
        else throw 'Name is Incorrect!'; 
        }

    //Method to return string of values
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary},\tGender: ${this.gender}, \tStart Date: ${empDate}`;
    }
}
//Created obj for class using parameterized conbstructor
let employPayroll = new EmployeePayroll(1, "Shivaraj", 78000);
console.log(employPayroll.toString());
//Using Set to update values of the properties of class
try{
    employPayroll.name = "Ch";
    employPayroll.salary = 75000;
}
catch(ex){
    console.error(ex);
}
console.log(employPayroll.toString());
let newEmployeePayroll = new EmployeePayroll(2, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayroll.toString());

/*
UC 13: 
Id: 1   Name: Shivaraj  Salary: 78000,  Gender: undefined,      Start Date: undefined
Name is Incorrect!
Id: 1   Name: Shivaraj  Salary: 78000,  Gender: undefined,      Start Date: undefined
Id: 2   Name: Terrisa   Salary: 30000,  Gender: F,      Start Date: August 1, 2022
*/