console.log("Welcome to the Employee Wage Problem");

///////////////////////////////UC-7///////////////////////////////
//Use the Daily Wage Array perform following operations using Array Helper Functions
/*
a. Calc total Wage using Array forEach or reduce method
b. Show the Day along with Daily Wage using Array map helper function
c. Show Days when Full time wage of 160 were earned using filter function
d. Find the first occurrence when Full Time Wage was earned using find function
e. Check if Every Element of Full Time Wage is truly holding Full time wage
f. Check if there is any Part Time Wage
g. Find the number of days the Employee Worked
*/

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
console.log("UC6-EmpWage Array:"+empWageArray);

///////////////////////////////UC-7A using Foreach Helper Function///////////////////////////////
//The forEach() method calls a function for each element in an array.
//The forEach() method is not executed for empty elements

console.log("UC7A using Foreach Helper Function")
let totalwage=0;
function GetTotalWage(dailywage)
{
    totalwage+=dailywage
}
empWageArray.forEach(GetTotalWage);
console.log("Total Wage Using Foreach Method:"+totalwage);

///////////////////////////////UC-7A1 using Reduce Helper Function///////////////////////////////
//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result
//Will Be Provide Total Array As Input But Outome Is Single value 

console.log("UC-7A1 using Reduce Helper Function")
function GetTotalWageUsingReduce(total,dailywage)
{
    total+=dailywage
    return total;
}
console.log("Total Wage Using Reduce Helper Function "+empWageArray.reduce(GetTotalWageUsingReduce))

///////////////////////////////UC-7B using Map Helper Function Display Wage Along With Day///////////////////////////////
//map() creates a new array from calling a function for every array element.
//map() calls a function once for each element in an array.
//map() does not execute the function for empty elements.

console.log("UC7B using Map Helper Function")
let count=0;
function GetDailyWageAlongWithDay(dailywage)
{
    count++;
    return "Day"+count+":"+dailywage
}
let empWageMap = empWageArray.map(GetDailyWageAlongWithDay)

console.log("UC7B Display Along Wage with Day using Map Helper Function\n"+empWageMap)

///////////////////////////////UC-7C Show Days when Full time wage of 160 were earned using filter function///////////////////////////////
//The filter() method creates a new array filled with elements that pass a test provided by a function.
//The filter() method does not execute the function for empty elements.
//The filter() method does not change the original array.

console.log("UC7C using Filter Helper Function");
function GetFullTimeDay(dailywage)
{
    return dailywage.includes("160")
}
let fullTimeDays=empWageMap.filter(GetFullTimeDay)
console.log("UC7C Display FullTimne Alog With Days"+fullTimeDays);

///////////////////////////////UC-7D Find the first occurrence when Full Time Wage was earned using find function///////////////////////////////
//The find() method returns the value of the first element that passes a test.
//The find() method executes a function for each array element.
//The find() method returns undefined if no elements are found.

console.log("UC7D using Find Helper Function");
let firstOccuranceOfFullTImeWage=fullTimeDays.find(GetFullTimeDay)
console.log("UC7D First Occurrence When Full Time Wage"+firstOccuranceOfFullTImeWage);

///////////////////////////////UC-7E Check if Every Element of Full Time Wage is truly holding Full time wage///////////////////////////////
//The every() method returns true if the function returns true for all elements.
//The every() method returns false if the function returns false for one element.

console.log("UC7E using Every Method Helper Function");
let checkingForFullTime=fullTimeDays.every(GetFullTimeDay)
console.log("UC7E Checking Every Element Full Time Or Not?\n"+checkingForFullTime);

///////////////////////////////UC-7F Check if there is any Part Time Wage///////////////////////////////
//The some() method executes the callback function once for each array element.
//The some() method returns true (and stops) if the function returns true for one of the array elements.
//The some() method returns false if the function returns false for all of the array elements.

console.log("UC7F using Some Method Helper Function");
function GetPartTimeDay(dailywage)
{
    return dailywage.includes("80")
}
let CheckingForPartTime=empWageMap.some(GetPartTimeDay);
console.log("UC7F-Checking Any Element Is PartTime Or Not?\n"+CheckingForPartTime)

///////////////////////////////UC-7G Find the number of days the Employee Worked///////////////////////////////
//The reduce() method executes a reducer function for array element.
//The reduce() method returns a single value: the function's accumulated result
//Will Be Provide Total Array As Input But Outome Is Single value 

console.log("UC-7G using Reduce Helper Function") 
function GetNumberOfWorkingDay(numOfDays,dailywage)
{
    if(dailywage > 0)
    numOfDays++
    return numOfDays;
}
console.log("UC7G-Counting Number Of Working Days\n"+empWageArray.reduce(GetNumberOfWorkingDay))




/*
-----------------------------------------------------------------------------------------------
Welcome to the Employee Wage Problem
UC1-Employee is Absent
UC2-Employee Wage for day-1 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-2 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-3 = 80
UC1-Employee is Absent
UC2-Employee Wage for day-4 = 0
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-5 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-6 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-7 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-8 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-9 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-10 = 160
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-11 = 80
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-12 = 80
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-13 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-14 = 160
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-15 = 80
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-16 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-17 = 160
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-18 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-19 = 0
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-20 = 160
-----------------------------------------------------------------------------------------------
UC4-Total Employee Monthly Wage:1520
-----------------------------------------------------------------------------------------------
UC5-Total Days:20 and Total Working Hours:76
-----------------------------------------------------------------------------------------------
UC6-EmpWage Array:0,0,80,0,160,0,0,0,80,160,80,80,80,160,80,80,160,160,0,160
-----------------------------------------------------------------------------------------------
UC7A using Foreach Helper Function
Total Wage Using Foreach Method:1520
-----------------------------------------------------------------------------------------------
UC-7A1 using Reduce Helper Function
Total Wage Using Reduce Helper Function 1520
-----------------------------------------------------------------------------------------------
UC7B using Map Helper Function
UC7B Display Along Wage with Day using Map Helper Function   
Day1:0,Day2:0,Day3:80,Day4:0,Day5:160,Day6:0,Day7:0,Day8:0,Day9:80,Day10:160,Day11:80,Day12:80,Day13:80,Day14:160,Day15:80,Day16:80,Day17:160,Day18:160,Day19:0,Day20:160
-----------------------------------------------------------------------------------------------
UC7C using Filter Helper Function
UC7C Display FullTimne Alog With DaysDay5:160,Day10:160,Day14:160,Day17:160,Day18:160,Day20:160
-----------------------------------------------------------------------------------------------
UC7D using Find Helper Function
UC7D First Occurrence When Full Time WageDay5:160
-----------------------------------------------------------------------------------------------
UC7E using Every Method Helper Function
UC7E Checking Every Element Full Time Or Not?
true
-----------------------------------------------------------------------------------------------
UC7F using Some Method Helper Function
UC7F-Checking Any Element Is PartTime Or Not?
true
-----------------------------------------------------------------------------------------------
UC-7G using Reduce Helper Function
UC7G-Counting Number Of Working Days
13
-----------------------------------------------------------------------------------------------
*/
