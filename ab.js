// values and datatypes///////////////////////////////////////////
/*
(1) create a javascript file, using javascript comments,list all the datatypes of javascript and specify a example
for each of them......

/*
(i)    string
ex- "i am happy to join pw skills"

(ii)   bigint
ex- 1024n

(iii)  number
           1) integer: 9
           2) float  : 4.5
           3)infinity: number.positive_infinity  ,  number.negative_infinity
           4) not a number: NaN

(iv)   boolean
ex- true / false

(v)    undefined
ex-  undefined

(vi)   null
ex- null

(vii)  symbol
ex- symbol ("pw skills")

(viii) object
ex-  i) array ["puneet" , 2023 , null , true]
    ii) object {name:puneetbajpai , course: full stack devlopement}

 */


 //   2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.  
 /*
 let arr1 ["mobile" , "bluetooth" , "waterbottle", "facewash" , "fair_cream" , "home_theater" ,
           
             "pen" , "laptop" , "touch_pen" , "hard_disk"];

*/
/////////////////////////////////////////////////////////////////////////////////////////////////////
/*
3) Create an object of a student registry of 5 students whose key is the registration number and the value is
the student name. Registration number starts from 1 and continues.

let obj1 = {
    1: "puneet" ,
    2: "aman" ,
    3: "suman" ,
    4: "yash" ,
    5: "vandy" ,
};
////////////////////////////////////////////////////////////////////////////////////////////////////////
 */
//------------------------------------------ values and typeof-----------------------------------------
/*
1) Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
value stored.
*/
//string

let var1 = ("my name is puneet bajpai");
console.log(typeof var1);

//number

let var2 = (50);
console.log(typeof var2);

//bigint

let var3 = (1024n);
console.log(typeof var3);

//boolean
let var4 = (true);
console.log(typeof var4);

//undefined

let var5 = (undefined);
console.log(typeof var5);

//null
let var6 = (null);
console.log(typeof var7);

//symbol
let var7 = symbol ("puneet bajpai");
console.log(typeof var7);

// object

// 1) array
let array1 = ["puneet" ,1420 , true , null];
console.log(typeof array1);

// 2) object

let object = {name:"puneet" , age: 23 ,
              intrest:"full stack devlopement"};
console.log(typeof object);

/*
2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages
*/
// valid variables
//(i)
// let firstname ="puneet";
// console.log (firstname);

// //(ii)
// let lastname = "bajpai";
// console.log(lastname);

// invalid variables

//(i)
// let 1name = "aman";
// console.log(1name);

//(ii)
// let 2name = "bajpai";
// console.log(2name);


/* Oprators

1) Write a program that prints the multiplication table in the textbook format of any number specified.

*/

let number = 6;

console.log(`${number} * 1 = ${ number * 1}`);
console.log(`${number} * 2 = ${ number * 2}`);
console.log(`${number} * 3 = ${ number * 3}`);
console.log(`${number} * 4 = ${ number * 4}`);
console.log(`${number} * 5 = ${ number * 5}`);
console.log(`${number} * 6 = ${ number * 6}`);
console.log(`${number} * 7 = ${ number * 7}`);
console.log(`${number} * 8 = ${ number * 8}`);
console.log(`${number} * 9 = ${ number * 9}`);
console.log(`${number} * 10 = ${ number * 10}`);



/* 2
Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.
*/

let num1 = 6;
let num2 = 10;

//addition 

console.log(`the addition of two no is ${num1 + num2}` );

//subtraction
console.log(`the subtraction of two no is ${num1 - num2}` );

//multiplication 

console.log(`the multiplication of two no is ${num1 * num2}` );

//division 
console.log(`the divide of two no is ${num1 / num2}` );

//modulus
console.log(`the resukt of two modulo operation of num1 and num2 is ${num1 % num2}` );

//exponential
console.log(`the exponential of num1 and num2 is ${num1 ** num2}` );



/*
Write a program to find out the perimeter of a rectangle. Print the results to the consol
*/

let length = 10;
let width = 20;
let perimeterofarectangle = 
	2 * (length + width);

console.log(`the parineter of the rectangle with length: ${length} and width: ${width} is ${perimeterofarectangle}  `);

/*
Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.
*/
// Equal
let num10 = 40;
let num11 = 50;
console.log (num10 == num11);

//
let num12 = 10;
let num13 = 10;
console.log(num12 == num13);

// Not Equal

let num14 = 40;
let num15 = 50;
console.log(num10 != num11);

//
let num16 = 50;
let num17 = 50;
console.log(num15 != num16);

// Strictly Equal

let num18 = 50;
let num19 = 50;
console.log(num18 === num19);

//
let num20 = 50;
let num21 = "50";
console.log(num20 === num21);

// Strictly not Equal

let num22 = 10;
let num23 = 12;
console.log(num22 !== num23);

//
let num24 = 10;
let num25 = 10;
console.log(num24 !== num25);

// Greater than 
let num26 = 25;
let num27 = 27;
console.log(num26 < num27);

//
let num28 = 28;
let num29 = 29;
console.log(num28 > num29);

// greater than or equal to

let num30 = 31;
let num31 = 30;
console.log(num30 >= num31);

//
let num32 = 32;
let num33 = 33;
console.log(num32 >= num33);

// less than and less than Equal to

let num34 = 35;
let num35 = 34;
console.log(num34 < num35);
//
let num36 = 36;
let num37 = 37;
console.log(num36 < num37);

// less that and equal to
let num38 = 38;
let num39 = 39;
console.log(num38 >= num39);

//
let num40 = 41;
let num41 = 40;
console.log(num40 >= num41);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////What are Conditions, If, If-else, if-else-if////////////////////////////////////////////

//1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
// traffic light is red print the vehicles must stop.

let trafficlight = "orange";

if (trafficlight == "red"){
    console.log("vehical must stop");
} else if (trafficlight == "yellow"){
    console.log(" go slow");
} else if (trafficlight == "green"){
    console.log(" go and drive safely");
} else {
    console.log(" invalid light");
}
//////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a program to print the largest of 2 numbers.
let number1 = 20;
let number2 = 30;

if (number1 > number2){
    console.log("number1 is greater than number2");
} else{
    console.log("number2 is greater than number1");
}
/////////////////////////////////////////////////////////////////////////////////////////////////
/*
3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
the numbers divisible by 3 or 5.
*/
let num =5;

if (num % 5 == 0 && 3 == 0){
    console.log("fizzBuzz");
} else if (num % 3 == 0){
    console.log("fizz")
} else if (num % 5 == 0){
    console.log("Buzz");
} else {
    console.log("invalid input");
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////switch case/////////////////////////////////////////////
/*
1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of
days untill the weekrnd.

*/
const day = "tuesday";
let daysuntilweekend;

switch (day) {
    case "monday" :
        console.log("there are 5 days untill the weekend");
        break;
    case "tuesday" :
        console.log("there are 4 days untill the weekend");
        break;
    case "wednesday" :
        console.log("there are 3 days untill the weekend");
        break;
    case "thursday" :
        console.log("there are 2 days untill the weekend");
        break;
    case "friday" :
        console.log("there are 1 days untill the weekend");
        break;
    case "saturday" :
        console.log("there are 0 days untill the weekend");
        break;
    default:
        daysuntilweekend = "invalid day";
        break;    
}
/////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the
// year.

const monthnumber = 1;

switch (monthnumber) {
    case 1:
        console.log("january");
        break;

    case 2:
        console.log("february");
        break;

    case 3:
        console.log("march");
        break;

    case 4:
        console.log("april");
        break;

    case 5:
        console.log("may");
        break;

    case 6:
        console.log("june");
        break;

    case 7:
        console.log("july");
        break;

    case 8:
        console.log("august");
        break;

    case 9:
        console.log("september");
        break;

    case 10:
        console.log("october");
        break;

    case 11:
        console.log("november");
        break;

    case 12:
        console.log("december");
        break;
    default:
        console.log("invalid month number");    
}
//////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////ternary conditions///////////////////////////////////////////
//1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.

let numb = 0;
numb == 0
 ? console.log("the number is zero")
 : numb > 0
 ? console.log("the number is greater then zero")
 : console.log('the number is lesser than zero');
//////////////////////////////////////////////////////////
// 2. Create a program that takes in two numbers and prints the larger one.

let numb1 = 10;
let numb2 = 10;

numb1 == numb2
? console.log("both the number are equal")
: numb1 > numb2
?console.log("the larger number among the two numbers is ${numb1}")
:console.log("the larger number among the two numbers is ${numb2}");
///////////////////////////////////////////////////////////////////////////////
/////////////////////loops////////////////////////////////
// 1. Write a program that generates the multiplication table in the textbook format for a given number.

let numbe = 5;

for (let i = 1; i <= 10; i++){
    console.log('${numbe} * ${i} = ${numbe * 1}');
}
/////////////////////////////////////////////////////////////////////////
// 2. Write a program that prints all the positive even numbers till the number specified.

let no = 10;

for (let i = 1; i <= number; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}
////////////////////////the assignment is ended///////////////////////////////////////