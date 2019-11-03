import {  messagesElement, weatherIconElement, temperatureElement,
    descriptionElement, cityElement, searchElement, countryElement} from './elements';

export const getLocationInput = () => {
   return searchElement.value;
};

export const displayWeather = (data) => {
    const KELVIN = 237;
    let temperature = Math.floor(data.main.temp - KELVIN);
   // weatherIconElement.innerHTML = `<img src='${data.weather[0].icon}'>`;
    temperatureElement.innerHTML = `${temperature}`;
    descriptionElement.innerHTML = `${data.weather[0].description}`,
    cityElement.innerHTML = data.name; 
    countryElement.innerHTML = `, ${data.sys.country}`;
};