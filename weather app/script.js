const apiKey = "70beb6e6b2a83f5a323dde8029ab925c";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=`

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const convert = document.querySelector(".convert");
let isCelsius = true;



async function weather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else{
        var data = await response.json();
    }
    

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp *10)/10 + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
}
else if (data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png"
}
else if (data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png"
}
else if (data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
}
else if (data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png"
}
else if (data.weather[0].main == "Wind"){
    weatherIcon.src = "images/wind.png"
}
else if (data.weather[0].main == "Snow"){
    weatherIcon.src = "images/snow.png"
}
convert.addEventListener("click", function(){
    if(isCelsius){
document.querySelector(".temp").innerHTML = Math.round((data.main.temp*1.8 + 32) *10)/10 + "°F"
convert.textContent = "°F  to °C"}
    else{
document.querySelector(".temp").innerHTML = Math.round((data.main.temp) *10)/10 + "°C"
convert.textContent = "°C  to °F"}
isCelsius = !isCelsius;
}
)

document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display = "none"
}
searchBtn.addEventListener("click", ()=>{
    weather(searchBox.value);
})
document.addEventListener("keypress", (event)=>{
    if (event.key === "Enter"){
    searchBtn.click();}
})
weather();