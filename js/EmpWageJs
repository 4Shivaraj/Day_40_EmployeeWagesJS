console.log("Welcome to the Employee Wage Problem");

///////////////////////////////UC-6///////////////////////////////
//Store the Daily Wage along with the Total Wage 
//- Save in an Array the Daily Wage
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HOURS=160;
let empHrs =0;
let totalEmpWage=0;
let day=1;  
let workingHrs=0;
let empWageArray = new Array();

function getWorkHours()
{
    switch(empCheck)
    {
    case IS_FULL_TIME:
        console.log("UC1-Employee is Present in Full Time")
        empHrs=8;
        return empHrs;
    case IS_PART_TIME:
        console.log("UC1-Employee is Present in Part Time")
        empHrs=4;
        return empHrs;
    default:
        console.log("UC1-Employee is Absent");
            empHrs=0;
            return empHrs;
    }
}
while(day<=MAX_WORKING_DAYS && workingHrs<=MAX_WORKING_HOURS)
{
    empCheck = Math.floor(Math.random()*10)%3;
    empWage=EMP_RATE_PER_HR*getWorkHours();
    console.log("UC2-Employee Wage for day-"+day+" = "+empWage);
    totalEmpWage+=empWage;
    day++
    workingHrs+=empHrs;
    empWageArray.push(empWage)
}
console.log("UC4-Total Employee Monthly Wage:"+totalEmpWage);
console.log("UC5-Total Days:"+(day-1) + " and Total Working Hours:"+workingHrs);
console.log("UC6-EmpWage Array:"+empWageArray)


/*
Welcome to the Employee Wage Problem
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-1 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-2 = 160
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-3 = 160
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-4 = 80
UC1-Employee is Absent
UC2-Employee Wage for day-5 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-6 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-7 = 80
UC1-Employee is Absent
UC2-Employee Wage for day-8 = 0
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-9 = 160
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-10 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-11 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-12 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-13 = 160
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-14 = 80
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-15 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-16 = 160
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-17 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-18 = 160
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-19 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-20 = 0
UC4-Total Employee Monthly Wage:1840
UC5-Total Days:20 and Total Working Hours:92
UC6-EmpWage Array:80,160,160,80,0,0,80,0,160,160,0,80,160,80,80,160,80,160,160,0
*/