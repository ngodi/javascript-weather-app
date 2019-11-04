import { getLocationInput, displayWeather } from './modules/ui/weatherViews';
import {  messagesElement, weatherIconElement, temperatureElement,
         descriptionElement, locationElement, cityElement, tempUnit,
         tempSwitch, countryElement, btnElement} from './modules/ui/elements';

const KELVIN = 237;
const weatherTemp = {};
weatherTemp.unit = 'celsius';
weatherTemp.value = '';
const showCurentWeather = () => {
  if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(setPosition, showError);
  }else{
  messagesElement.style.display = "block";
  messagesElement.innerHTML = "error";
  }

};


const setPosition = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude; 
  let API_KEY = '67d0e0f98e9f6eed6c046ce44004ced6';
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
         
  fetch(api).then(response => {
    return response.json();
 }).then(data => {
  weatherTemp.value =  Math.floor(data.main.temp - KELVIN);
  displayWeather(data);
 
}).catch(error => {
  messagesElement.style.display = "block";
  messagesElement.innerHTML = error;
});
}

btnElement.addEventListener('click', ()=> {
  messagesElement.style.display = "none";
 let location = getLocationInput();
 let API_KEY = '67d0e0f98e9f6eed6c046ce44004ced6';
 let api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
 fetch(api).then(response => {
  return response.json();
}).then(data => {
  weatherTemp.value =  Math.floor(data.main.temp - KELVIN);
  displayWeather(data);

}).catch(error => {
messagesElement.style.display = "block";
messagesElement.innerHTML =  'could not process your request at this time, please try again later';
});
});

const showError = (error) => {
notificationElement.style.display = 'block';
notificationElement.innerHTML = 'could not process your request at this time, please try again later';
};

const celsiusToFahrenheit = (temperature) => {
  return (temperature * 9/5) + 32;
};

tempSwitch.addEventListener("click", ()=> {
  if(weatherTemp.value == undefined) return;
  
  if(weatherTemp.unit == "celsius"){
      let fahrenheit = celsiusToFahrenheit(weatherTemp.value);
      fahrenheit = Math.floor(fahrenheit);
      
      temperatureElement.innerHTML = `${fahrenheit}`;
      tempUnit.innerHTML = '°<span>F</span>';
      weatherTemp.unit = "fahrenheit";
      tempSwitch.innerHTML = 'View in Celsius';
  }else{
      temperatureElement.innerHTML = `${weatherTemp.value}`;
      tempUnit.innerHTML = '°<span>C</span>';
      weatherTemp.unit = "celsius";
      tempSwitch.innerHTML = 'View in Fahrenheits';
  }
});

const init = () => {
  showCurentWeather();
  
};

init();

