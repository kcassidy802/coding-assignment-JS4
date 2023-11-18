/* 1. (( This is the first quesetion on the assignment as instructed))    

Create an array called ages that contains the following 
values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in 
the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it 
programmatically.
ages[7] - ages[0] is not allowed!
(( Remember to print your results in console if needed!!)) */


let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
let lastIndexValue = ages.length - 1;
let result = ages[lastIndexValue] - ages[0];
console.log("subtracting last number in index with first:", result);




// 1.1 (( This is going to be the second part of the first question))  

// Add a new age to your array and repeat the step above to ensure it 
// is dynamic. 
// (works for arrays of different lengths).
// (( Remember to print your results in console if needed!!))


ages.push(8);
console.log("Adding new number to array:",ages);
let subtractAges = [ages.length - 1] - ages[0];
console.log("subtracting pushed array number with first index number:",subtractAges); 





// 1.2  (( This is going to be the third part of the first question))       

// Use a loop to iterate through the array and calculate the average age.
// (( Remember to print your results in console if needed!!))

let allAge = 0;
let allPeople = ages.length;
for (let i = 0; i < allPeople; i++){
    allAge += ages[i];
}
let ourAverage = allAge / allPeople;
console.log("average age:", ourAverage);




// /* 2. (( This is the second question for the assignment))

// create an array called names that contains the following 
// values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'. 
// (( Remember to print your results in console if needed!!))

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log("names array:", names);






// 2.1  (( This is the second part of question two

//     Use a loop to iterate through the array and calculate the 
// average number of letters per name.
//     (( Remember to print your results in console if needed!!))

let allLetters = 0;
let ourNames = names.length;
for (let i = 0; i < ourNames; i++) {
    allLetters += names[i].length;
}
let totalAverage = allLetters / ourNames;
console.log("average of array:", totalAverage);



// 2.2  (( This is going to be the third part for question two))

//  Use a loop to iterate through the array again and concatenate all 
// the names together, separated by spaces. 
//  (( Remember to print your results in console if needed!!))
// */

let ccNames = '';
for (let i = 0; i < names.length; i++) {
    ccNames += names[i];
    if (i < names.length - 1) {
        ccNames += ' ';
    }
    console.log("con-cacted names:", ccNames);
}



 
/* 3.(( This is going to the third question for the assignment))

How do you access the last element of any array? 
(( Remember to print your results in console if needed!!))
*/

console.log(ages[ages.length - 1]); 



/* 4. (( This is going to be the fourth question in my assignment))
How do you access the first element of any array? 
(( Remember to print your results in console if needed!!))
*/

console.log(ages[0]);




/* 5. ((This is going to be the fifth question in my assignment )) 
Create a new array called nameLengths. Write a loop to iterate over the 
previously created names array and add the 
length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array 
(( Remember to print your results in console if needed!!))
*/

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
nameLengths.push(names[i].length)
console.log("# of letters in name:", nameLengths)
}




/* 6. (( This is going to the the sixth question for the assignment)) 
Write a loop to iterate over the nameLengths array and calculate the 
sum of all the elements in the array.
(( Remember to print your results in console if needed!!))
*/

let totalNum = 0;
for 
    (let i = 0; i < nameLengths.length; i++){
    totalNum += nameLengths [i];
    console.log("sum of all elements:,", totalNum);
}


/* 7. (( This is going to be the seventh question for the assignment)) 
Write a function that takes two parameters, word and n, as arguments and 
returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to 
return 'HelloHelloHello').
(( Remember to print your results in console if needed!!))
*/

function contParam (word, n){
let contParam = word.repeat(n);
console.log("say hello 3 times:", contParam)
}

contParam("Hello", 3);




/* 8. (( This is going to be the eighth part of the assignment)) 
Write a function that takes two parameters, firstName and lastName,
 and returns a full name. 
The full name should be the first and the last name separated by a space.
(( Remember to print your results in console if needed!!))
*/

function createFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
let firstName = 'kyle';
let lastName = 'cassidy';
let myName = createFullName(firstName, lastName);
console.log(myName);




/* 9. (( This is going to be the ninth part of the assignment)) 
Write a function that takes an array of numbers and returns true if the
 sum of all the numbers 
in the array is greater than 100.
(( Remember to print your results in console if needed!!))
*/


let newestArray = [40, 60, 100, 1];

function listNewArray(array){
    let sum = 0;
    for ( let i =0; i < array.length; i++){
        sum += array[i];
    }
    return sum > 100

}

console.log("is my array greater then 100", newestArray)







/* 10. (( This is going to be the 10th question in the assignment))
 Write a function that takes an array of numbers and returns the average 
 of all the elements in the array.
 (( Remember to print your results in console if needed!!))
*/


function giveMeAverage(numbers) {
    if (numbers.length === 0) {
        return 0; 
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}

let numberArray = [100, 50, 75, 200 ];

let myNewAverage = giveMeAverage(numberArray);
console.log(myNewAverage); 








/* 11. (( This is going to be the 11th question in the assignment)) 
Write a function that takes two arrays of numbers and returns true if the 
average of the elements in 
the first array is greater than the average of the elements in the second array.
(( Remember to print your results in console if needed!!))
*/

let number1 = [100, 45, 55, 65];
let number2 = [5, 10, 15, 20];

function lastAverage(array1, array2){
    let total1 =0;
    let total2 =0;
    for (let number of number1){
        total1 += number;
    }

    for (let number of number2){
        total2 += number;
    }
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;
console.log("new averages", average1, average2);


if (number1 > number2);{
console.log("if first array average is greater", true);
    return true
}
}
lastAverage(number1, number2)




/* 12. (( This is going to the 12th and final question for JS4, Turkey TIME!!)) 
Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, 
and returns true if it is hot outside and if moneyInPocket is greater than 
10.50.
(( Remember to print your results in console if needed!!))
*/

function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
let warmWeather = true;
let myMoney= 13.50;
let canIHaveDrink = willBuyDrink(warmWeather, myMoney);
console.log(canIHaveDrink); 