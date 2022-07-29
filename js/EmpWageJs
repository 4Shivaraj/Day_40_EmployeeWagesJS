console.log("Welcome to the Employee Wage Problem");

///////////////////////////////UC-4///////////////////////////////
//Calculating Wages for a Month assuming 20 Working Days in a Month
const IS_FULL_TIME=1;
const IS_PART_TIME=2;
EMP_RATE_PER_HR=20;
const MAX_WORKING_DAYS=20;
let empHrs =0;
let totalEmpWage=0;

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
for(let day=1;day<=MAX_WORKING_DAYS;day++)
{
    empCheck = Math.floor(Math.random()*10)%3;
    empWage=EMP_RATE_PER_HR*getWorkHours();
    console.log("UC2-Employee Wage for day-"+day+" = "+empWage);
    totalEmpWage+=empWage;
}
console.log("UC4-Total Employee Wage:"+totalEmpWage);