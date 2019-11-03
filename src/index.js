import getWeather from './modules/data/weather';
import {  messagesElement, weather_iconElement, temperatureElement,
   descriptionElement, locationElement} from './modules/ui/elements';

getWeather('Canada');

const getCurrentLocation = () => {
  if(geoLocation in navigator){
   return  navigator.geolocation.getCurrentPosition(setPosition, showError);
  }else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "error";
  }
};



const setPosition = (position) => {
return location;
}


const showerror = (error) => {
notificationElement.style.display = 'block';
notificationElement.innerHTML = 'error';
};
