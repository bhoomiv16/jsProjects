//I'm using API key to authenticate my request to OpenWeatherMap APi key. The API key is unique to us
const apiKey="4ef925f2b8a45043c7eab9fd2bb1f8a6";

//this is base url to fetch the data
//I'm using units =metric to retuen temp in celsius rather than fahrenheit
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBox=document.querySelector(".search input");
const searchIcon=document.querySelector(".search i");
const weatherIcon=document.querySelector(".weatherIcon");
async function checkWhether(city){
    const response=await fetch(`${apiURL}&q=${city}&appid=${apiKey}`);
    let data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"℃";
   document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./assets/images/clouds.png";
    }
   else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./assets/images/clear.png";
    }
   else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./assets/images/rain.png";
    }
   else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./assets/images/drizzle.png";
    }
   else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "./assets/images/mist.png";
    } 
    else if(data.weather[0].main=="Snow"){
        weatherIcon.src ="./assets/images/snow.png";

    }
    document.querySelector(".weather").style.display="block";
    
}


searchIcon.addEventListener("click",()=>{
    checkWhether(searchBox.value);
})