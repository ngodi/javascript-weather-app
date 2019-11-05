import {  messagesElement, weatherIconElement, temperatureElement,
    descriptionElement, cityElement, searchElement, countryElement, tempUnit} from './elements';

export const getLocationInput = () => {
   return searchElement.value;
};

export const displayWeather = (data) => {
    let temperature = Math.floor(data.main.temp - 237);
    weatherIconElement.innerHTML = `<img src='assets/icons/${data.weather[0].icon}.png'>`;
    temperatureElement.innerHTML = `${temperature}`;
    tempUnit.innerHTML = `<span>°C</span>`;
    descriptionElement.innerHTML = `${data.weather[0].description}`,
    cityElement.innerHTML = data.name; 
    countryElement.innerHTML = `, ${data.sys.country}`;
};