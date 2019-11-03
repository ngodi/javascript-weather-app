import {  messagesElement, weather_iconElement, temperatureElement,
    descriptionElement, locationElement, searchElement} from './elements';

export const getLocationInput = () => {
   return searchElement.value;
};