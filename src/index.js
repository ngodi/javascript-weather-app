import { getLocationInput, displayWeather } from './modules/ui/weatherViews';
import {  messagesElement, weatherIconElement, temperatureElement,
   descriptionElement, locationElement, cityElement, countryElement, btnElement} from './modules/ui/elements';


const showCurentWeather = () => {
  if(navigator.geolocation){
   navigator.geolocation.getCurrentPosition(setPosition, showError);
  }else{
  messagesElement.style.display = "block";
  messagesElement.innerHTML = "error";
  }

};

/* function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=
  "+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";

  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>"; */

const setPosition = (position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude; 
  let API_KEY = '67d0e0f98e9f6eed6c046ce44004ced6';
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
         
  fetch(api).then(response => {
    return response.json();
 }).then(data => {
  displayWeather(data);
 
}).catch(error => {
  messagesElement.style.display = "block";
  messagesElement.innerHTML = error;
});
}

btnElement.addEventListener('click', ()=> {
 let location = getLocationInput();
 let API_KEY = '67d0e0f98e9f6eed6c046ce44004ced6';
 let api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
 fetch(api).then(response => {
  return response.json();
}).then(data => {
displayWeather(data);

}).catch(error => {
messagesElement.style.display = "block";
messagesElement.innerHTML = error;
});
});

const showError = (error) => {
notificationElement.style.display = 'block';
notificationElement.innerHTML = 'error';
};

const init = () => {
  showCurentWeather();
  
};

init();

