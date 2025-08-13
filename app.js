const apiKey="d3b7981c24bb5c9e5252661d24ab866b";

const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName=document.querySelector(".search input");
const btn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data=await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main=="Clouds"){
         weatherIcon.src="images/clouds.png";
        }else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png";
        }

        document.querySelector(".error").style.display="none";
        document.querySelector(".weather").style.display = "block";
    } 
}

btn.addEventListener("click", ()=>{
    checkWeather(cityName.value);
});