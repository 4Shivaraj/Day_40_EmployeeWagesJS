console.log("Welcome to the Employee Wage Problem");

///////////////////////////////UC-5///////////////////////////////
//Calculate Wages till a condition of total working hours of 160 or max days of 20 is reached for a month
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
const EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
const MAX_WORKING_HOURS=160;
let empHrs =0;
let totalEmpWage=0;
let day=1;
let workingHrs=0;

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
}
console.log("UC4-Total Employee Monthly Wage:"+totalEmpWage);
console.log("UC5-Total Days:"+(day-1) + " and Total Working Hours:"+workingHrs);