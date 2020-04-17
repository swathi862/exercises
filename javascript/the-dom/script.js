
//Practice 1: Movie Poster

var movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
}

document.querySelector("#title").innerHTML = `
<h1> 
    ${movieObject.title}
</h1>`;

document.querySelector("#genre").innerHTML = `
<h2> 
    ${movieObject.genre}
</h2>`;

document.querySelector("#release-date").innerHTML = `
<h3> 
    ${movieObject.releaseDate}
</h3>`;

//Practice 2: Dowtown Restaraunts

var downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];

for (var i = 0; i < downtownRestaurants.length; i++) {
    document.querySelector("#restaurants-list").innerHTML += `
        <li>${downtownRestaurants[i]}</li>`
}

//Practice 3: Sandwich Toppings

var sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"];

function readToppings(array) {
    for (var i = 0; i < array.length; i++) {
        document.querySelector("#sandwich-container").innerHTML += `
            <li>${array[i]}</li>`
    }
}

readToppings(sandwichToppings);

//Practice 4: Movie Schedule

var movieSchedule = [
    {
        title: "Ralph Breaks the Internet",
        rating: "PG",
        currentlyPlaying: true,
        poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
        title: "The Grinch",
        rating: "G",
        currentlyPlaying: true,
        poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
        title: "A Star is Born",
        rating: "R",
        currentlyPlaying: false,
        poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
    {
        title: "Bohemian Rhapsody",
        rating: "PG-13",
        currentlyPlaying: true,
        poster: "https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png"
    },
    {
        title: "Fantastic Beasts: The Crimes of Grindlewald",
        rating: "PG-13",
        currentlyPlaying: true,
        poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
        title: "Robin Hood",
        rating: "PG-13",
        currentlyPlaying: false,
        poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        rating: "PG-13",
        currentlyPlaying: true,
        poster: "https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png"
    }
]

// for(var i = 0; i < movieSchedule.length; i++){
//     if(movieSchedule[i].currentlyPlaying === true){
//         movieSchedule[i].currentlyPlaying = "Now Playing!"
//     }
//     else{
//         movieSchedule[i].currentlyPlaying = "Out of Theaters- Released on Blue-Ray!"
//     }
//     document.querySelector("#movie-schedule").innerHTML += `
//     <div>
//         <h1>${movieSchedule[i].title}</h1>
//         <h3>${movieSchedule[i].rating}</h3>
//         <p>${movieSchedule[i].currentlyPlaying}</p>
//         <img src=${movieSchedule[i].poster} alt="Image currently not available"></>
//     </div>`
// }

//Practice 5: Movie Schedule Take Two

for (var i = 0; i < movieSchedule.length; i++) {
    if (movieSchedule[i].currentlyPlaying === true) {
        movieSchedule[i].currentlyPlaying = "Now Playing!"
        document.querySelector("#movie-schedule").innerHTML += `
        <div class = "movie">
            <h1 class = "m">${movieSchedule[i].title}</h1>
            <h3 class = "m">${movieSchedule[i].rating}</h3>
            <p class = "m">${movieSchedule[i].currentlyPlaying}</p>
            <img class = "movie-img" src=${movieSchedule[i].poster} alt="Image currently not available"></>
        </div>`
    }
}

// Give all G-rated movies a dotted green border that's 2px wide.
// Give all PG-rated movies a dotted yellow border that's 2px wide.
// Give all PG-13 movies a dotted orange border that's 2px wide.
// Give all R-rated movies a dotted red border that's 2px wide.

//Practice 6: Cohort Website

var cohort1 = {
    name: "Cohort One",
    startDate: "January 15, 2018",
    endDate: "July 12, 2019",
    instructors: ["Kim", "Josh", "Jordan"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

var cohort2 = {
    name: "Cohort Two",
    startDate: "August 15, 2019",
    endDate: "Feb 10, 2020",
    instructors: ["Tommy", "Jordan"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

var cohort3 = {
    name: "Cohort Three",
    startDate: "April 6, 2020",
    endDate: "August 20, 2020",
    instructors: ["Tommy", "Jordan"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "C#", ".NET"]
}

function buildHtmlString(cohortObjectParameter) {

    var htmlString = `
    <div>
        <h1>${cohortObjectParameter.name}</h1>
        <h3>${cohortObjectParameter.startDate}</h3>
        <h3>${cohortObjectParameter.endDate}</h3>
        <ul>
        </div>`
    for (var i = 0; i < cohortObjectParameter.instructors.length; i++) {
        htmlString += `
                <li>${cohortObjectParameter.instructors[i]}</li>
        </ul>
        <ul>`
    }
    for (var i = 0; i < cohortObjectParameter.techStack.length; i++) {
        htmlString += `
                <li>${cohortObjectParameter.techStack[i]}</li>
        </ul>`
    }
    return htmlString;
}


function printHtmlString(htmlStringParameter, elementIdParameter) {
    document.querySelector(elementIdParameter).innerHTML += `
    ${htmlStringParameter}`
}

var cohort1HTML = buildHtmlString(cohort1);
var cohort2HTML = buildHtmlString(cohort2);
var cohort3HTML = buildHtmlString(cohort3);

printHtmlString(cohort1HTML, "#cohort-one-container");
printHtmlString(cohort2HTML, "#cohort-two-container");
printHtmlString(cohort3HTML, "#cohort-three-container");

//Practice 7: Weather Data
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

//Use bracket notation

var weatherString = `
<h1>${weatherData["query"]["results"]["channel"]["location"]["city"]}, ${weatherData["query"]["results"]["channel"]["location"]["country"]}, ${weatherData["query"]["results"]["channel"]["location"]["region"]}</h1>

<h2>${weatherData["query"]["results"]["channel"]["item"]["condition"]["temp"]} and ${weatherData["query"]["results"]["channel"]["item"]["condition"]["text"]} </h2>`

document.querySelector("#current-weather").innerHTML = weatherString;

const dailyWeatherComponent = (forecast, highTempClassName, lowTempClassName) => { return`
<div class ="forecast-day ${highTempClassName}">
    <h3 class = "${lowTempClassName}">${forecast.day}, ${forecast.date}</h3>

    <p class = "${lowTempClassName}"> High: ${forecast.high}</p>
    <p class = "${lowTempClassName}"> Low: ${forecast.low}</p>
    <p class = "${lowTempClassName}"> ${forecast.text} </p>
</div>`
}

for (let i = 0; i < 3; i++){
    let threeDayWeather = ""

    if ((weatherData.query.results.channel.item.forecast.every(item => item.high > 85)) === true && (weatherData.query.results.channel.item.forecast[i].high) > 95){
        threeDayWeather = dailyWeatherComponent(weatherData.query.results.channel.item.forecast[i], "hot", "very-hot")
    }
    else if ((weatherData.query.results.channel.item.forecast.every(item => item.high > 85)) === true){
        threeDayWeather = dailyWeatherComponent(weatherData.query.results.channel.item.forecast[i], "hot", "")
    }
    else if ((weatherData.query.results.channel.item.forecast.every(item => item.high < 40)) === true && (weatherData.query.results.channel.item.forecast[i].low) < 20){
        threeDayWeather = dailyWeatherComponent(weatherData.query.results.channel.item.forecast[i], "cold", "very-cold")
    }
    else if((weatherData.query.results.channel.item.forecast.every(item => item.high < 40)) === true){
        threeDayWeather = dailyWeatherComponent(weatherData.query.results.channel.item.forecast[i], "cold", "")
    }
    else{
        threeDayWeather = dailyWeatherComponent(weatherData.query.results.channel.item.forecast[i], "", "")
    }

    document.querySelector("#weather-forecast").innerHTML += threeDayWeather;
}

// console.log(weatherData.query.results.channel.item.forecast.every(item => item.high > 85));
