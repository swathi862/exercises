//Practice 1: Calculator
// function add(num1, num2){
//     console.log(num1 + num2);
// }

// function subtract(num1, num2){
//     console.log(num1 - num2);
// }

// function multiply(num1, num2){
//     console.log(num1 * num2);
// }

// function divide(num1, num2){
//     console.log(num1 / num2);
// }

// add(8,2);
// add(9,23);
// add(432,568);

// subtract(54,13);
// subtract(567,324);
// subtract(453,12);

// multiply(3,2);
// multiply(4,3);
// multiply(45,12);

// divide(12,3);
// divide(324,3);
// divide(12,5);

//Practice 2: Calculator Refactor
function add(num1, num2){
    var sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    var difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    var product = num1 * num2;
    return product;
}

function divide(num1, num2){
    var quotient = num1 / num2;
    return quotient;
}

var sum1 = add(8,2);
var sum2 = add(9,23);
var sum3 = add(432,568);
console.log(sum1,sum2,sum3);

var difference1 = subtract(54,13);
var difference2 = subtract(567,324);
var difference3 = subtract(453,12);
console.log(difference1,difference2,difference3);

var product1 = multiply(3,2);
var product2 = multiply(4,3);
var product3 = multiply(45,12);
console.log(product1,product2,product3);

var quotient1 = divide(12,3);
var quotient2 = divide(324,3);
var quotient3 = divide(12,5);
console.log(quotient1,quotient2,quotient3);

//Practice 3: Greetings Pt.2

function greetings(name, pLanguage){
    if (pLanguage === "English"){
        console.log(`Hello, ${name}!`);
    }
    else if (pLanguage === "Spanish"){
        console.log(`¡Hola, ${name}!`);
    }
    else if (pLanguage === "French"){
        console.log(`Bonjour, ${name}!`);
    }
    else{
        console.log(`Hello, ${name}!`);
    }
}

greetings("Miguel", "Spanish");

//Practice 4: Sandwich Maker

function sandwich(breadType, sandwichName, isToasted){
    if (isToasted === true){
        var order = `You ordered a toasted ${sandwichName} on ${breadType}.`
    }
    else{
        var order = `You ordered a ${sandwichName} on ${breadType}.`
    }
    return order;
}

console.log(sandwich("honey oat","veggie sub sandwich", false));
console.log(sandwich("wheat","meatball sub sandwich", true));
console.log(sandwich("honey oat","BLT sub sandwich", true));

//Practice 5: The Rock's Hobbies

var dwayneObject = {
    firstName: "Dwayne",
    nickName: "The Rock",
    lastName: "Johnson",
    favoriteFood: "Eggs",
    hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building muscle mass"]
  }
  
  function printHobbies(){
    for(var i = 0; i < dwayneObject.hobbies.length; i++){
        console.log(dwayneObject.hobbies[i]);
    }
  }

  printHobbies();

  //Practice 6: New Years Eve Party
  var partyGuests = [
    {
      name: "Sam",
      age: 18
    },
    {
      name: "Jerry",
      age: 45
    },
    {
      name: "Lila",
      age: 29
    },
    {
      name: "Mary",
      age: 68
    },
    {
      name: "Todd",
      age: 10
    }
  ]
  
  function ageChecker(){
    for(var i = 0; i < partyGuests.length; i++){
        if (partyGuests[i].age >= 21){
            console.log(`${partyGuests[i].name} is old enough to drink.`)
        }
        else{
            console.log(`${partyGuests[i].name} is NOT old enough to drink.`)
        }
    }
  }

  ageChecker();

  //Try getting "Jery, Lila, and Mary can drink. Sam and Todd are too young." as one result?

  //Practice 7: Celsius to Fahrenheit

  function cToF(celsius){
    var Fdegree =(celsius*1.8) + 32;
    console.log(`You entered ${celsius} degrees Celsius. That converts to ${Fdegree} degrees Fahrenheit.`);
  }

  function FToC(fahrenheit){
    var Cdegree =(fahrenheit-32)/1.8;
    console.log(`You entered ${fahrenheit} degrees Fahrenheit. That converts to ${Cdegree} degrees Celsius.`);
  }

  cToF(32);
  FToC(90);

  //How to make a float an integer/how to round to whole number

  //Practice 8: It All Adds Up!
  var outsideArray =  [4, 7, 8008, 11, 9, -1];

  var sum = 0;

  function addThemUp(array){
      for(var i = 0; i < array.length; i++){
          sum = sum + array[i]; 
      }
      return sum;
  }

  var mySum = addThemUp(outsideArray);
  console.log(mySum);

    //How to make sure the parameter only accepts an array? Only an array of numbers?

  //Practice 9: Law of Averages
  var scoresToAverage =  [22, 34, 62, 11, 90, 88, 70, 65, 22, 89, 85, 39, 71, 92, 98, 84];

  var sum = 0;

  function findAverage(array){
    for(var i = 0; i < array.length; i++){
        sum = sum + array[i]; 
    }
    var average = sum/array.length;
    return average;
  }

  var myAverage = findAverage(scoresToAverage);
  console.log(myAverage);

  //Practice 10: Shipping Calculator
  var cost = 0;
  function shippingCalc(packageWeight, distance, oversized){
    cost = parseInt((packageWeight * distance)/100);
        if(oversized === true){
            cost = cost + 10;
        }
    var total = `The total shipping for your package is $${cost}.`
    return total;
  }

  var calculate = shippingCalc(20,100,true);
  console.log(calculate);
