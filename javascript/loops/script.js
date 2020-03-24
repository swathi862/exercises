// Practice 1

var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"];

for (var i = 0; i <= cohortOneStudents.length-1; i++){
    console.log(cohortOneStudents[i]);
}

//Practice 2
var interests = ["running", "crafting", "reading", "gallivanting", "binge-watching Netflix shows"];

// for (var i = 0; i <= interests.length-1; i++){
//     console.log("One of my interests is: ",interests[i]);
// }

//Practice 3

for (var i = 0; i <= interests.length-1; i++){
    if(interests[i] === "gallivanting"){
        console.log("My absolute favorite interest is: ",interests[i]);
    }
    else{
        console.log("One of my interests is: ",interests[i]);
    }
}

//Practice 4 (5)

var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];

for (var i = 0; i <= harryPotterTitles.length-1; i++){
    console.log("Harry Potter",harryPotterTitles[i]);
}

//Practice 5 (6)

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

for (var i = 0; i<= grades.length-1; i++){
    if (grades[i] >= 0 && grades[i] <= 69){
        console.log("You got an F");
    }
    else if (grades[i] >= 70 && grades[i] <=76){
        console.log("You got a D");
    }
    else if (grades[i] >= 77 && grades[i] <=84){
        console.log("You got a C");
    }
    else if (grades[i] >= 84 && grades[i] <=92){
        console.log("You got a B");
    }
    else if (grades[i] >= 93 && grades[i] <=100){
        console.log("You got an A");
    }
}

//Practice 7 (6)
 var i = 2;

 var sentence = "";
while (i < 10){
    // console.log(i);
    sentence = `${sentence} ${i}!`;
    i = i + 2;
}

console.log(`${sentence} Who do we appreciate?!`);

//console.log(`What's 2 + 2? ${2 + 2}`)
//$ is a sentence interperlator; you can add non-string elements to string outputs

//Practice 8 (7)

var grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92];

var high = grades[0];
var low = grades[0];

for (var i = 0; i <=grades.length; i++){
    // if (low !== 0 && grades[i] < low){
    //     low = grades [i];
    // }
    // else if (high !== 0 && grades[i] > high){
    //     high = grades[i];
    // }
    // else if(low === 0 || high === 0){
    //     low = grades[i];
    //     high = grades[i];
    // }
    if (grades[i] < low){
        low = grades [i];
    }
    else if (grades[i] > high){
        high = grades[i];
    }
}
console.log(`${high} is the highest grade`);
console.log(`${low} is the highest grade`);

//Practice 9

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];