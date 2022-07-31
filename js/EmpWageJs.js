console.log("Welcome to the Employee Wage Problem");

///////////////////////////////UC-9///////////////////////////////
/*
Use the Daily Wage Map and Daily Hour Map perform following operations using Arrow Functions
a. Calc total Wage and total hours worked
b. Show the full workings days, part working days and no working days
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
let empWageMapObject = new Map();  //UC8
let empDayAndHoursMapObject = new Map(); //UC9A
let nonWorkingDaysArray = new Array(); //UC9B
let partWorkingDaysArray = new Array(); //UC9B
let fullWorkingDaysArray = new Array(); //UC9B


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
    empWageMapObject.set(day,empWage);  //UC8
    empDayAndHoursMapObject.set(day,empHrs); //UC9
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

///////////////////////////////UC-8 Store the Day and the Daily Wage along with the Total Wage ///////////////////////////////

console.log("UC-8 Storing Day and Dailywage in Map Object") 
//For Calculating Total Wage We Already Have A Function,
//To Use that function we have to Convert map into array,
//since map is not supoorted with array helper functions
//To Fetch only values we used empwageobject.values
console.log("In Map Object\nDay: "+(day-1)+" TotalWage:"+ Array.from(empWageMapObject.values()).reduce(GetTotalWageUsingReduce,0))

///////////////////////////////UC-9A Using Arrow Function Calc total Wage and total hours worked ///////////////////////////////
console.log("UC9-In Map Object Method Using Arrow Function") 
console.log("UC9A-Total Wage Using wage map object: \n"+(day-1)+" TotalWage:"+ (Array.from(empWageMapObject.values())).filter(wage=>wage>0).reduce(GetTotalWageUsingReduce,0))
console.log("UC9A-Total Hours Using Hours map object: \n "+ (Array.from(empDayAndHoursMapObject .values())).reduce(GetTotalWageUsingReduce,0));

///////////////////////////////UC-9BShow the full workings days, part working days and no working days///////////////////////////////
console.log("UC9B-Show the full workings days, part working days and no working days") 
console.log("HrsMap:\n"+(Array.from(empDayAndHoursMapObject.values())).join(" "))
empDayAndHoursMapObject.forEach(    
    (value,key,map) => 
    {
        if( value == 8 ) 
        fullWorkingDaysArray.push(key);
        else if( value == 4 ) 
        partWorkingDaysArray.push(key);
        else 
        nonWorkingDaysArray.push(key);
})
console.log("UC9B-FullTime work days: "+fullWorkingDaysArray);
console.log("UC9B-PartTime work days: "+partWorkingDaysArray);
console.log("UC9B-NonTime work days: "+nonWorkingDaysArray);



/*
Welcome to the Employee Wage Problem
UC1-Employee is Absent
-----------------------------------------------------------------------------------------------
UC2-Employee Wage for day-1 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-2 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-3 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-4 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-5 = 80
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-6 = 80
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-7 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-8 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-9 = 80
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-10 = 80
UC1-Employee is Absent
UC2-Employee Wage for day-11 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-12 = 0
UC1-Employee is Absent
UC2-Employee Wage for day-13 = 0
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-14 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-15 = 0
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-16 = 160
UC1-Employee is Absent
UC2-Employee Wage for day-17 = 0
UC1-Employee is Present in Part Time
UC2-Employee Wage for day-18 = 80
UC1-Employee is Absent
UC2-Employee Wage for day-19 = 0
UC1-Employee is Present in Full Time
UC2-Employee Wage for day-20 = 160
-----------------------------------------------------------------------------------------------
UC4-Total Employee Monthly Wage:1040
-----------------------------------------------------------------------------------------------
UC5-Total Days:20 and Total Working Hours:52
-----------------------------------------------------------------------------------------------
UC6-EmpWage Array:0,0,0,0,80,80,160,0,80,80,0,0,0,160,0,160,0,80,0,160
-----------------------------------------------------------------------------------------------
UC7A using Foreach Helper Function
Total Wage Using Foreach Method:1040
-----------------------------------------------------------------------------------------------
UC-7A1 using Reduce Helper Function
Total Wage Using Reduce Helper Function 1040
-----------------------------------------------------------------------------------------------
UC7B using Map Helper Function
UC7B Display Along Wage with Day using Map Helper Function
Day1:0,Day2:0,Day3:0,Day4:0,Day5:80,Day6:80,Day7:160,Day8:0,Day9:80,Day10:80,Day11:0,Day12:0,Day13:0,Day14:160,Day15:0,Day16:160,Day17:0,Day18:80,Day19:0,Day20:160   
-----------------------------------------------------------------------------------------------
UC7C using Filter Helper Function
UC7C Display FullTimne Alog With DaysDay7:160,Day14:160,Day16:160,Day20:160
-----------------------------------------------------------------------------------------------
UC7D using Find Helper Function
UC7D First Occurrence When Full Time WageDay7:160
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
9
-----------------------------------------------------------------------------------------------
UC-8 Storing Day and Dailywage in Map Object
In Map Object
Day: 20 TotalWage:1040
-----------------------------------------------------------------------------------------------
UC9-In Map Object Method Using Arrow Function
UC9A-Total Wage Using wage map object:
20 TotalWage:800
UC9A-Total Hours Using Hours map object:
 40
UC9B-Show the full workings days, part working days and no working days
HrsMap:
0 8 0 8 0 4 0 0 0 0 8 0 0 0 0 0 4 4 0 4
UC9B-FullTime work days: 3,5,12
UC9B-PartTime work days: 7,18,19,21
UC9B-NonTime work days: 2,4,6,8,9,10,11,13,14,15,16,17,20
------------------------------------------------------------------------------------------  -----
*/
