// Practice 1

if (1 + 1 > 5){
    console.log("True fact!");
}
else{
    console.log("LIES!");
}

if (4 * 5 <= 20){
    console.log("True fact!");
}
else{
    console.log("LIES!");
}

if (6-2 >= 0){
    console.log("True fact!");
}
else{
    console.log("LIES!");
}

//Practice 2

var likesDogs = true;

if (likesDogs === true){
    console.log("You're a dog person!");
}
else{
    console.log("You're a cat person!");
}

// Practice 3

var birthYear = 1998;

if (1912 <= birthYear && birthYear <= 1921){
    console.log("You're part of the Depression Era. You tend to tend to be conservative, compulsive savers,maintain low debt and use more secure financial products like CDs versus stocks. You tend to feel a responsibility toward leaving a legacy to your children. Other characteristics include being patriotic, orienting toward work before pleasure, respect for authority, and having a sense of moral obligation.");
}
else if (1922 <= birthYear && birthYear <= 1927){
    console.log("You're part of the World War II generation. You shared a common goal of defeating the Axis powers with your comrades.");
}
else if(1928 <= birthYear && birthYear <= 1945){
    console.log("You're part of the Post-War Cohort. You had significant opportunities in jobs and education as the War ended and a post-war economic boom struck America. However, the growth in Cold War tensions, the potential for nuclear war and other never before seen threats led to levels of discomfort and uncertainty throughout the generation. Members of this group value security, comfort, and familiar, known activities and environments.");
}
else if (1946 <= birthYear && birthYear <= 1954){
    console.log("You're part of the Boomers I or the Baby Boomers generation. The first Boomer segment is bounded by the Kennedy and Martin Luther King assassinations, the Civil Rights movements and the Vietnam War. You were likley in or protested the War. You also likely had good economic opportunities and were largely optimistic about the potential for America and their own lives, the Vietnam War notwithstanding.");
}
else if (1955 <= birthYear && birthYear <= 1965){
    console.log("You're part of the Boomers II generation or Generation Jones. Unfortunately, your generation is the first of many to have suffered from the long shadow cast by Boomers I. This first post-Watergate generation lost much of its trust in government and optimistic views the Boomers I maintained. Economic struggles including the oil embargo of 1979 reinforced a sense of “I’m out for me” and narcissism and a focus on self-help and skepticism over media and institutions is representative of attitudes of this cohort. While Boomers I had Vietnam, Boomers II had AIDS as part of their rites of passage. The youngest members of the Boomer II generation in fact did not have the benefits of the Boomer I class as many of the best jobs, opportunities, housing etc. were taken by the larger and earlier group.");
}
else if (1966 <= birthYear && birthYear <= 1976){
    console.log("You're part of Generation X! Sometimes referred to as the “lost” generation, this was the first generation of “latchkey” kids, exposed to lots of daycare and divorce.")
}
else if (1977 <= birthYear && birthYear <= 1994){
    console.log("You're a part of Generation Y, known as Echo Boomers or Millenniums.");
}
else if (1995 <= birthYear && birthYear <= 2012){
    console.log("You're part of Generation Z! You likely have a highly sophisticated media and computer environment and will be way more Internet savy than your Gen Y forerunners. K bye!")
}
else{
    console.log("IDK what you are man...You were born in a time before we started categorzing society like this. Or we just don't have a name for ya yet.")
}

//Practice 4
var person = {
    name: "Swathi Mukkamala",
    pLanguage: "English"
}

if (person.pLanguage === "English"){
    console.log("Hello,", person.name, "!");
}
else if (person.pLanguage === "Spanish"){
    console.log("¡Hola,", person.name, "!");
}
else if (person.pLanguage === "French"){
    console.log("Bonjour,", person.name, "!");
}
else{
    console.log("Hello,", person.name, "!");
}

//Practice 5
var time = "12:00 AM";
var isHungry = true;

if (time === "7:30 AM" && isHungry === true){
    console.log("Time for breakfast!");
}
else if(time === "12:00 PM" && isHungry === true){
    console.log("Time for lunch!");
}
else if ((time === "7:00 PM" || time === "8:00 PM") &&isHungry === true){
    console.log("Time for dinner!");
}
else if (isHungry === true){
    console.log("Time for a snack!");
}
else{
    console.log("Have a cookie anyway!");
}

//Practice 6
var grade = 99;

if (grade >= 0 && grade <= 69){
    console.log("You got an F");
}
else if (grade >= 70 && grade <=76){
    console.log("You got a D");
}
else if (grade >= 77 && grade <=84){
    console.log("You got a C");
}
else if (grade >= 84 && grade <=92){
    console.log("You got a B");
}
else if (grade >= 93 && grade <=100){
    console.log("You got an A");
}

//Challenge
var weatherData = {
    "query": {
     "count": 1,
     "created": "2018-12-06T20:52:22Z",
     "lang": "en-US",
     "results": {
      "channel": {
       "units": {
        "distance": "mi",
        "pressure": "in",
        "speed": "mph",
        "temperature": "F"
       },
       "title": "Yahoo! Weather - Nome, AK, US",
       "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
       "description": "Yahoo! Weather for Nome, AK, US",
       "language": "en-us",
       "lastBuildDate": "Thu, 06 Dec 2018 11:52 AM AKST",
       "ttl": "60",
       "location": {
        "city": "Nome",
        "country": "United States",
        "region": " AK"
       },
       "wind": {
        "chill": "14",
        "direction": "68",
        "speed": "36"
       },
       "atmosphere": {
        "humidity": "90",
        "pressure": "989.0",
        "rising": "0",
        "visibility": "11.0"
       },
       "astronomy": {
        "sunrise": "11:38 am",
        "sunset": "4:7 pm"
       },
       "image": {
        "title": "Yahoo! Weather",
        "width": "142",
        "height": "18",
        "link": "http://weather.yahoo.com",
        "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"
       },
       "item": {
        "title": "Conditions for Nome, AK, US at 11:00 AM AKST",
        "lat": "64.499474",
        "long": "-165.405792",
        "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/",
        "pubDate": "Thu, 06 Dec 2018 11:00 AM AKST",
        "condition": {
         "code": "15",
         "date": "Thu, 06 Dec 2018 11:00 AM AKST",
         "temp": "28",
         "text": "Blowing Snow"
        },
        "forecast": [
         {
          "code": "16",
          "date": "06 Dec 2018",
          "day": "Thu",
          "high": "29",
          "low": "25",
          "text": "Snow"
         },
         {
          "code": "26",
          "date": "07 Dec 2018",
          "day": "Fri",
          "high": "27",
          "low": "22",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "08 Dec 2018",
          "day": "Sat",
          "high": "22",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "34",
          "date": "09 Dec 2018",
          "day": "Sun",
          "high": "7",
          "low": "-11",
          "text": "Mostly Sunny"
         },
         {
          "code": "28",
          "date": "10 Dec 2018",
          "day": "Mon",
          "high": "3",
          "low": "-11",
          "text": "Mostly Cloudy"
         },
         {
          "code": "28",
          "date": "11 Dec 2018",
          "day": "Tue",
          "high": "10",
          "low": "2",
          "text": "Mostly Cloudy"
         },
         {
          "code": "26",
          "date": "12 Dec 2018",
          "day": "Wed",
          "high": "9",
          "low": "5",
          "text": "Cloudy"
         },
         {
          "code": "28",
          "date": "13 Dec 2018",
          "day": "Thu",
          "high": "14",
          "low": "8",
          "text": "Mostly Cloudy"
         },
         {
          "code": "30",
          "date": "14 Dec 2018",
          "day": "Fri",
          "high": "13",
          "low": "-3",
          "text": "Partly Cloudy"
         },
         {
          "code": "30",
          "date": "15 Dec 2018",
          "day": "Sat",
          "high": "7",
          "low": "-3",
          "text": "Partly Cloudy"
         }
        ],
        "description": "<![CDATA[<img src=\"http://l.yimg.com/a/i/us/we/52/15.gif\"/>\n<BR />\n<b>Current Conditions:</b>\n<BR />Blowing Snow\n<BR />\n<BR />\n<b>Forecast:</b>\n<BR /> Thu - Snow. High: 29Low: 25\n<BR /> Fri - Cloudy. High: 27Low: 22\n<BR /> Sat - Mostly Cloudy. High: 22Low: 8\n<BR /> Sun - Mostly Sunny. High: 7Low: -11\n<BR /> Mon - Mostly Cloudy. High: 3Low: -11\n<BR />\n<BR />\n<a href=\"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-2460286/\">Full Forecast at Yahoo! Weather</a>\n<BR />\n<BR />\n<BR />\n]]>",
        "guid": {
         "isPermaLink": "false"
        }
       }
      }
     }
    }
   }

