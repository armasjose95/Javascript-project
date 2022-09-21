var number =5; // This is an in-line comment

/*This is a

Multi-line comment*/

number = 9;

/* Data Types
undefined, null, boolean, string, symbol, number, and object
*/

// 3 ways to declare a variable:

var myName = "Manuel";     // Can be used throughout program
myName = "Jose";           // Changing variable 

let ourName = "Ja Development"; // Only be used within the scope of where you declared that

const pi = 3.14;   // A variable that can never change


var a;  // Declaring a variable 
var b = 2; //Assigning a variable w/ =2 and decalring a variable w/ var b and = is the assignment operator not equals to 2. assignng b to 2
console.log(a)

a = 7;

b = a;

console.log(a)

//Initialize these three variables

var a = 5;
var b = 10;
var c = "I am a "

// Do not change code below this line

a = a + 3;
console.log(a)
b = b + 5;
console.log(b)
c = c + "String!";
console.log(c)

//Addition
var sum = 10 + 25;
console.log(sum)

//Subtraction
var difference = 48-10;
console.log(difference)

//Multiplication
var product = 2 * 2;
console.log(product)

//Division
var quotient = 55 / 11;
console.log(quotient)


//Incrementing Numbers
var myVar = 69;
myVar = myVar + 1; 
console.log(myVar)

//or You can run this way
var myVar = 70;
myVar++;
console.log(myVar)


//Decrementing Numbers
var myVar = 20
myVar = myVar-1;
console.log(myVar)

//or You can run this way
var myVar = 22
myVar--;
console.log(myVar)

//Decimal Numbers
var ourDecimal = 3.5
console.log(ourDecimal)

var myDecimal = 0.009
console.log(myDecimal)

//Multiply Decimals same as muliplying integers
var product = 2.2 * 2.2;
console.log(product)

//Divide Decimals 
var quotient = 4.4 / 2.2;
console.log(quotient)

// Finding A Remainder: 3 goes into 11 3 times, so 2 is the remainder. Remainder of the division of two months. Often used to determine if a # is even or odd
var remainder;
remainder = 11 % 3;
console.log(remainder)

//Compound Assignment with augmented   
var b = 12;
b = 9 + b;
console.log(b)

//or You can run this way(shortcut) Compound Assignment with augmented (addition)

var a = 3;
a += 12;
console.log(a)

//Compound Assignment with augmented (subtraction)
var a = 5;
a -= 2;
console.log(a)

//Compound Assignment with augmented (multiply)
var a = 5;
a *= 2;
console.log(a)

//Compound Assignment with augmented (division)
var a = 10;
a /= 2;
console.log(a)


//Declare String Variables

var firstName = "Jose";   //String Literals because "in between quotation marks"
console.log(firstName)
var lastName = "Armas";
console.log(lastName)

var myFirstName = "maria"
var myLastName = "Armas"


//Escaping Literal Quotes in Strings-escape a quote and first '"" is no longer considered the end of the string. Becomes a full string

var myStr = "I am a  \"double quoted\" string inside \"double quotes.\"";
console.log(myStr)

//Quoting Strings with Single quotes-use backtick to use single & double quotes in the string
var myStr = `'<a href="http://www.google.com" target="_blank">Link</a>'`;
console.log(myStr)

/*Escape sequences in strings

Code Output

\' single quote
\"" double qote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/

var myStr = "FirstLine\n\t\\ SecondLine\n\t\t\tThirdLine";
console.log(myStr)


////Concatenating Strings

//Concatenating Strings w/ + operator(have been added together/concatenated to be one long string)

var ourStr = "I come first. " + "I come second";
console.log(ourStr)

var myStr = "This is the start. " + "This is the end.";
console.log(myStr)

//Concatenating Strings w/ += operator

var ourStr = "I come first. ";
ourStr += "I come second";
console.log(ourStr)

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr)


//Constructing Strings w/ Variables

var myName = "Jose";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr)

var myCompany = "JA Development";
var companyStr = "My company name is " + myCompany + " and it is very successful!"
console.log(companyStr)


//Apending Variables to Strings(uses +=)

var anAdjective = "fun!";
var ourStr = "Learning to code is ";
ourStr += anAdjective;
console.log(ourStr)

var someAdjective = "good.";
var myStr = "The White Sox are ";
myStr += someAdjective;
console.log(myStr)

// Find Lenght of String


var firstNameLenght = 0;
var firstName = "Jose";
firstNameLenght = firstName.length;
console.log(firstNameLenght)

var lastNameLenght = 0;
var lastName = "Armas";
lastNameLenght = lastName.length;
console.log(lastNameLenght)


/*Bracket Notation to Find First Chaacter in String
-A way to get a character at a specefic index within a string
*/

var firstLetterofFirstName = "";
var firstName = "Jose";
firstLetterofFirstName = firstName[0];
console.log(firstLetterofFirstName)


/*String Immutability- Strings are immutable
-They can't be altered once created
-Doesn't mean they can't be changed
-Just that the indiviual chracters of a string literal can't be changed
*/


var myStr = "Jello World";
myStr = "Hello World";
console.log(myStr)

var myStr = "Red Sox";
myStr = "White Sox";
console.log(myStr)

//Bracket Notation to find Nth Character in String

var firstName = "Jose";
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName)


var lastName = "Armas";
thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName)

/*Bracket Notation to find Last Charcter in String
- Can use even if you don't know how many charcters are in the string 
*/

var firstName = "Jose";
var lastLetterOfFirstName = firstName[firstName.length - 1];
console.log(lastLetterOfFirstName)

//Bracket Notation to find Nth-to-last Charcter in String
var firstName = "Jose";
var secondToLastLetterOfFirstName = firstName[firstName.length-2];
console.log(secondToLastLetterOfFirstName)

var lastName = "Armas";
var thirdToLastLetterOfLastName = lastName[lastName.length-3];
console.log(thirdToLastLetterOfLastName)

/*Word Blanks-uses a function
-Function is called wordBlanks
-need to add spaces
*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"))
console.log(wordBlanks("Mazda", "white", "drove", "fast"))

//Store Multiple Values with Arrays

var ourArray = ["Jose" , 27]; 
console.log(ourArray)

var myArray = ["Maria", 1952];
console.log(myArray)


/*Nested Arrays-(Multidimensional Array)
-When one of the elements in an array is another array
-each element contains an array
*/

var ourArray = [['the universe', 42], ["everything", 95]];
console.log(ourArray)

/*Ex. shows first element in this array is anther ray with two elements of its own, same w 2nd element
-this is two arrays within another array
*/

var myArray = [["Bulls", 23], ["White Sox", 45]]
console.log(myArray)

//Access Array Data with Indexes
var ourArray = [50,60,70];
ourData = ourArray[0]
console.log(ourData)

var myArray = [16,18,21];
myData = myArray[1];
console.log(myData)

/*Modifying Array Data with Indexes
-You can use array indexes to modify arrays.
*/

var ourArray = [18,64,99];
ourArray[1] = 45;
console.log(ourArray)

var myArray = [18,64,99];
myArray[0] = 45;
console.log(myArray)


/*Access Multi-Dimensional Arrays with indexes
-Use a bracket notation to seletc an element in a multi-dimensional or array of arrays
*/

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];
console.log(myData)

//Grabbing 2nd element of the array for 1st bracket & 2nd bracket would be the index of the array within the array.

/*Manipulate Arrays with Push()
-You can have pinned data to the end of an array with the push function
*/

var ourArray = ["Konerko", 14 , "Homerun"];
ourArray.push(["Bat", "Homer"]);
console.log(ourArray)

var myArray = [["john", 23] , ["cat",2]];
myArray.push(["dog", 3]);
console.log(myArray)

var arr = [1,2,3];
arr.push(4);
console.log(arr)

/*Manipulate Arrays with Pop()
-We can remove final element from an array with the pop() function here
*/

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray)

var myArray = [["John" , 23], ["cat" , 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray)

/*Manipulate Arrays with Shift()
-We can remove first element from an array with the shift() function here
*/

var ourArray = ["Simpson", "H", ["dog"]];
var removedFromOurArray = ourArray.shift();
console.log(ourArray)

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();
console.log(myArray)

/*Manipulate Arrays with Unshift()
-Adds an element to the beginning of the aray
*/

var ourArray = ["Konerko", 14 , "bat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray)

var myArray = [["Konerko", 14], ["Vaughn", 25]];
myArray.shift();
myArray.unshift(["Abreu",79]);
console.log(myArray)


//Shopping list- Another ex. of a nested array

var myList = [["cereal", 3], ["milk", 2], ["bread", 3], ["juice", 2]];
console.log(myList)

/*Write Reusable Code with Functions
-Functions allow us to use reusable code in Javascript
-Everything inside bracket is ran anytime the function is called or invoked
*/

function ourReusableFunction () {
    console.log("Heyya, World");
}

ourReusableFunction();
ourReusableFunction();

function reusableFunction() {
    console.log("Cubs suck")
}

reusableFunction();

/* Passing values to Functions with Arguments
-Parameters are variables that act as place holdes for the values that are to be input to a function when it is called.
-Inside parenthesis can be any name, not letters
*/

function ourFunctionWithArguments(a,b) {
    console.log(a-b);
}
ourFunctionWithArguments(10,5);

function functionWithArgs(a, b) {
    console.log(a*b);
}
functionWithArgs(5,5);

/* Global Scope and Functions
-Scope refers to the visibility of variables
-Variables which are defined outside of a function block have global scope
-Global Scope means that they can be seen everywhere in your JS code
*/

var myGlobal = 10;

function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal
    }
    console.log(output);
}
fun1();
fun2();

/*Local Scope and Functions
-Variables which are declared within a function as well as the function parameters have local scope.
-Only visible within the function.
*/

function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}

myLocalScope();


/* Global vs Local Scope in Functions
-It's possible to have both local and global variables with the same name.
-Local variable takes precedent over the global variable.
*/

var outerWear = "T-shirt";

function myOutfit() {
    var outerWear = "sweater";

    return outerWear;
}
console.log(myOutfit());
console.log(outerWear);

/*Return a Value from a Function with Return
-Can return a vaue from a function with this return statement
*/

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));


function timesFive(num) {
    return num * 10;
}
console.log(timesFive(5))

/* Understanding Undefined Value Returned from a Function
-Functions can have returned statements but they don't have to.
*/

var sum = 0;
function addThree() {
    sum = sum + 3;
}
console.log(addThree())

// Assignmnet with a Returned Value

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed)

var processed = 2;
function processArg(num) {
    return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed)

/* Stand in Line
-You can add an item to the array that's passed in
-And then it's going to return the first item on the list
*/

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


/* Booleans
-Only two values: True or false
-No quotation marks around Boolean
*/

function welcomeToBooleans() {
    return true;
}
console.log(welcomeToBooleans)


/* Use Conditional Logic with If Statements
-An if statement is used to make decisions in code.
-If keyword tells JS to execute the code in the curly braces under certain conditions defined in the parenthesis. 
*/

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true!";
    }
    return "No, it's false!";
}

console.log(ourTrueOrFalse(true));

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was True!";
    }
    return "No, that was False!";
}

console.log(trueOrFalse(false));


/* Comparison with the Equality Operator 
-Many comparison operatpors in JS that will return a Boolean of true or false.
-Most common is the : Equality Operator. Often used in an if Statement.
*/

function testEquality(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEquality(10));


/* Comparison with the Strict Equality Operator 
-Doesn't do the type conversion
-Evaluate to true ex 3 === 3
-Evaluate to false ex 3 === '3'
*/

function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal"
}

console.log(testStrict(7));


/*Practice Comparing Different Values
*/

function compareEquality (a, b) {
    if (a == b) {
        return "Equal";
    }
    return "NoT Equal";
}

console.log(compareEquality(10, "10"));


function compareSecondEquality (a, b) {
    if (a === b) {
        return "Equal";
    }
    return "NoT Equal";
}

console.log(compareSecondEquality(10, "10"));


/*Comparisom w/ the Inequality Operatot
-
*/

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testNotEqual(10));



/*Comparisom w/ the Strict Inequality Operator
-
*/


function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));


// Comparisons w the Logical AND Operator 

function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }
    if (val > 10) {
        return "Over 10";
    }
    return "10 or under";
}

console.log(testGreaterThan(9));


// Comparisons w the Greater Than or Equal to Operator 

function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }
    if (val >= 10) {
        return "10 or Over";
    }
    return "Less than 10";
}

console.log(testGreaterOrEqual(10));

// Comparisons w the Less Than Operator 

function testLessThan(val) {
    if (val <25) {
        return "Under 25";
    }
    if (val < 55) {
        return "Under 55";
    }
    return "55 or Over";
}

console.log(testLessThan(10));

// Comparisons w the Less Than or Equal to Operator 

function testLessOrEqual(val) {
    if (val <=12) {
        return "Smaller Than or Equal to 12";
    }
    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }
    return "More Than 24";
}

console.log(testLessOrEqual(10));

/* Comparisons w the Logical And Operator 
-CHeck if 2 things are true at the same time
*/

function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(10));


// Comparisons w the Logical OR Operator 



function testLogcalOr(val) {
    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}
console.log(testLogcalOr(15));

/*Else Statements
-An alternate block of code can be executed when it's not true.
*/

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    }   else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(4));

/*Else  IF Statements
-If you have multiple conditions that need to be addressed.
-Way of chaining IF statements together. 
*/

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
console.log(testElseIf(7));

/*Logical Order in IF Else Statements
-When you're using else if statements order is very important.
-Once first condition is met, it doesn't even check for the rest of the conditions.
*/

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    }   else if (val <10) {
        return "Less than 10";
    }   else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(3));



/* Chaining If Else Statements
-Can chain IF and Else If Statements
*/

function testSize(num) {
    if (num < 5) {
        return "Tiny"
    }   else if (num < 10) {
        return "Small"
    }   else if (num < 15) {
        return "Medium"
    }   else if (num < 20) {
        return "Large"
    }   else {
        return "Huge"
    }
}

console.log(testSize(7));

/*Golf Code
Strokes     Return
1           "Hole-in-one!"
<= par - 2  "Eagle"
par-1       "Birdie"
*/

var names = ["Hole-in-one!", "Eagle", "Birdie"]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    }   else if (strokes <= par - 2) {
        return names [1]
    }   else if (strokes == par-1) {
        return names [2]
    }
}

console.log(golfScore(5,4));

/* Switch Statements
-Instead of using chained else if statements you can use a switch statemnt.
-Tests a value & can have many case statements which define various possible values.
*/

function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
                answer = "Delta";
                break;
    }
    return answer;
}

console.log(caseInSwitch(1));

/* Default Option In Switch Statements
-Default option is kind of like else in an if else statement.
*/

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bird";
            break;
        case "c":
            answer = "Cat";
            break;
        default:
            answer = "Stuff";
            break;
    }
        return answer;
}

console.log(switchOfStuff(7));


/* Multiple Identical Options in Switch Statements
-A switch statement where mupltiple inputs give the same output
-Omit the break statement
*/

function sequentialSizes(val) {
    var answer = "";
    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
    }
    return answer;
}

console.log(sequentialSizes(5));


/* Replacing If else statements w/ Switch
-Switch statement can be easier to write & understand.
 if ("bob") {
            answer = "Marley";
        }   else if (val === 42) {
            answer = "Jackie";
        }   else if (val === 1) {
            answer = "There is no #1";
        }   else if (val === 7){
            answer = "Ate Nine";
        }
}
Instead of this, do this below

*/

function chainToSwitch(val) {
    var answer = "";
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "Jackie";
            break;
        case 1: 
            answer = "There is no #1";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}


console.log(chainToSwitch("bob"));


/* Returning Boolean Values From Functions 
-Function to return a Boolean (T/F) Value
*/

function isLess(a,b) {
    return a < b;
}

console.log(isLess(10,15));

/* Returning Early Pattern from Functions
-Can leave fucntion anytime w/ a return statement.
*/

function abTest(a,b) {
    if (a < 0 || b < 0 ) {
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
console.log(abTest(-2,2));

/* Counting Cards
-
*/


var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:
            count ++;
            break;
        case 10:
        case "J":
        case "Q":
            count--;
            break;
    }
    var holdbet = 'Hold'
    if (count > 0) {
        holdbet = 'Bet'
    }
    return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

/* Build JS Objects
-Similar to arrays, instead of using indexes to access data, you use properties. 
*/
var ourDog = {
    "name": "Kurt",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};
console.log(ourDog);

/* Accessing Object Properties with Dot Notation
-Two main ways to access a property on an object
-1st is dot notation
*/

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
var hatValue = testObj.hat; 
var shirtValue = testObj.shirt;

console.log(hatValue);
console.log(shirtValue);

/* Accessing Object Properties with Bracket Notation
-Two main ways to access a property on an object
-2nd is bracket notation
*/

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

console.log(entreeValue);
console.log(drinkValue);



/* Accessing Object Properties with Variables
-Bracket Notation can also be used to look up object properties using variables.
*/

var testObj = {
    12: "Brady",
    18: "Manning",
    1: "Fields"
};
var playerNumber = 12;
var player = testObj[playerNumber];

console.log(player);


/* Updating Object Properties
-Can use dot notation to update object properties.
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "frends": ["everything!"]
};
ourDog.name = "Turner"

console.log(ourDog.name);



/* Add New  Properties to an Object
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "frends": ["everything!"]
};
ourDog.bark = "wuff";

console.log(ourDog);

/* Delete Properties from an Object
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "frends": ["everything!"],
    "bark" : "wuff"
};
delete ourDog.bark;

console.log(ourDog);



/* Using Objects for Lookup
-Objects can be thouht of as a key value storage like a dictionary.
-You can use an object to lookup values.
-Can replace switch statement and use the object for lookups.
*/

function phoneticLookup(val) {
    var result = "";
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta" : "Denver"
    };
    result = lookup[val];
    return result;
}

console.log(phoneticLookup("charlie"));



/* Testing Objects for Properties
-Can check if an object has a property with the hasown property method.
-If it doesn't have the property, it'll return "NOt Found"
*/


var myObj = {
    "gift": "pony",
    "pet": "dog",
    "bed": "pillow"
};
function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));


/* Manipulating Complex Objects 
-A JS object is a way to store flexible data
-Can store strings, numbers, and arrays and even other objects.
-Very similar to JSON.
*/

var myMusic = [
    {
        "artist": "Nirvana",
        "title": "Nevermind",
        "release_year": 1991,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "Arctic Monkeys",
        "title": "AM",
        "release_year": 2013,
        "formats": [
            "CD",
            "Youtube video",
            "LP"
        ]      
    }
]



/* Accessing Nested Objects 
-In order to access sub-properties of an object, you can chain together the dot or bracket notation.
*/

var myStorage = {
    "car": {
        "inside": {
            "glove box": "sunglasses",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);


/* Accessing Nested Arrays 
-Array bracket notation can be changed to access nested arrays.
*/

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "maple"
        ]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);



/* Record Collection-challenge
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
*/

var collection = {
    "2548": {
      "album": 'Slippery When Wet',
      "artist": 'Bon Jovi',
      "tracks": [
        'Let It Rock', 
        'You Give Love a Bad Name'
        ]
    },
    "2468": {
      "album": '1999',
      "artist": 'Prince',
      "tracks": [
        '1999',
        'Little Red Corvette'
        ]
    },
    "1245": {
      "artist": 'Robert Palmer',
      "tracks": []
    },
    "5439": {
      "album": 'ABBA Gold'
    }
  };
var collectionCopy = JSON.parse(JSON.stringify(collection));


function updateRecords(id, prop, value) {
    if (value === "") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));


//
//Loops allow you to run the same code multiple times.

/* Iterate with While Loops
-While Loops runs while a specified condition is true & stops when it's no longer true.
*/

var myArray = [];

var i = 0;
while(i < 5) {
    myArray.push(i);
    i ++;
}
console.log(myArray);


/* Iterate with For Loops
-Most common type of loop in JS
*/

var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

console.log(ourArray);


// Iterate Odd Numbers with a For Loop


var myArray = [];
for (var i =1; i < 10; i +=2) {
    myArray.push(i)
}

console.log(myArray);


// Iterate Even Numbers with a For Loop

var ourArray = [];
for (i = 0; i < 10; i +=2) {
    ourArray.push(i)
}
console.log(ourArray);



// Count backwards with a For Loop
var ourArray = [];
for (i = 10; i > 0; i -=2) {
    ourArray.push(i)
}
console.log(ourArray);


/* Iterate Through an Array with a For Loop
-Common in JS to iterate through the contents of an array.
*/

var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;
for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}
console.log(ourTotal);




var myArr = [2,3,4,5,6];
var total = 0;
for (var i =0; i <myArr.length; i++) {
    total +=myArr[i];
}

console.log(total);



/* Nesting For Loops
-If you have a multidimensional or nested array, you can use nested for loops to access all the array elements.
-Multidimensional array is an array with  arrays inside the array.
*/

function multiplyAll(arr) {
    var product = 1;

    for (var i=0; i< arr.length; i++) {
        for (var j=0; j < arr[i].length; j++) {
            product *= arr [i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2], [3,4], [5,6,7]]);
console.log(product);





/* Iterate with Do.... While Loops
-A Do While Loop will always run at least one time and then it will check the condition.
-Will repeat the loop as long as the condition is true.
*/

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while(i < 5)

console.log(i, myArray);



/*Profile Lookup: Coding Challenge
-An array of objects in our contacts list
-Each object is one of our contacts.
-Create lookUpProfile function where we pass in a name of the property & will return value of that property.
-If the name that's passed in does not corespond to any contacts, then it should return "No such contact".
-If no property should return "No Such Property".
*/

var contacts = [
    {
        "firstName": "Zach",
        "lastName": "Lavine",
        "number": "8",
        "likes": ["Pizza", "Coding", "Brownies"]
    },
    {
        "firstName": "Demar",
        "lastName": "DeRozan",
        "number": "11",
        "likes": ["Tacos", "Running", "Cookies"]
    },
    {
        "firstName": "Lonzo",
        "lastName": "Ball",
        "number": "0",
        "likes": ["Wings", "Gaming", "Cake"]
    }
];
function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i ++) {
        if (contacts[i].firstName === name){
            return contacts[i][prop]
        }
    }
    return "No such contact";
}
var data = lookUpProfile("Zach" , "number");
console.log(data);




/* Generate Random Fractions
-Create a random deciaml number in JS.
-Always a # between 0 & 1. Could be 0, just not 1.
*/

function randomFraction() {


    return Math.random();
}

console.log(randomFraction());


/* Generate Random Whole Numbers
-Always a # between 0 & number you enter. Could be 0, just not 1.
*/

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum());


/* Generate Random Whole Numbers within a Range

*/

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
}

var myRandom = randomRange(5,15);

console.log(myRandom);


/* Use the parseInt Function
-Takes a string and returns an integer.
-If string can't be converted into an integer then it returns in NaN(Not a Number)
*/

function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56")); 



/* Use the parseInt Function with a Radix
-Radix specifies the base of the number in the string.
-Base 2 binary(binary one of the most common ones to use). Default is base 10.
*/

function convertToInteger(str) {
    return parseInt(str, 2);
}

console.log(convertToInteger("10011"));



/* Use the Conditional (Ternary) Operator
-Like a one line if else expression.
conditon ? statement-if-true : statement-if-false;
*/

function checkEqual(a,b) {
    return a === b ? true : false;
}

// you really wouldn't write this out. Would write return a ===n;

console.log(checkEqual(1,2));

/* Use Multiple Conditional (Ternary) Operators
-can nest them within each other which gives them even more power.
conditon ? statement-if-true : statement-if-false;
*/

function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));



/* Differences between the Var and Let keywords
-Let does not you declare a variable twice.
-Many people only use let & const and never use var to declare vairables.
-Usually dont want to declare a variable two times in the same scope.
*/

let catsName = "Kitty";
let quote;
catsName = "Kat";
console.log(catsName);

/*
    "use strict"
    -Enables strict mode which catches common coding mistakes and unsafe actions.
    -A lot of people use "Use Strict" at the top of a full JS file or just in a function to catch coding mistakes. 

*/




/*Compare Scopes of the Var and Let Keywords
-When you declare a variable with var, it is declared globally or locally if declared inside a function.
-The scope of let is limited to the blcok statement or expression that it was declared in. 
*/

//var

function checkScope() {
    "use strict";
    var i = "function scope";
    if (true) {
        var i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();

//let

function checkScope() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
}

checkScope();