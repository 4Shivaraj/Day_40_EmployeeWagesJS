/*
UC-11.1 Ability to create Employee Payroll Data with id, name and salary
*/

class EmployeePayroll
    {
    //property
    id;
    salary;

    //Defining parameterizd constructor of class using constructor keyword
    constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    }
    //Getter and setter methods for properties of class
    get name() { return this._name };
    set name(name) { this._name = name };

    //Method to return string of values
    toString() {
        return `Id: ${this.id} \tName: ${this.name} \tSalary: ${this.salary}`
    }
}
//Created obj for class using parameterized conbstructor
let employPayroll = new EmployeePayroll(1, "Shivaraj", 78000);
console.log(employPayroll.toString());
//Using Set to update values of the properties of class
employPayroll.name = "Cheluvesha";
employPayroll.salary = 75000;
console.log(employPayroll.toString());

/*
UC11.1
Id: 1   Name: Shivaraj  Salary: 78000
Id: 1   Name: Cheluvesha        Salary: 75000
*/