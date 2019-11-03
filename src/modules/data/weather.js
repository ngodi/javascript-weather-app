const getWeather = (location) =>{
   const API_KEY = '1d2dabeeda9ec8e42942e2f95c0d399c';
    let api = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;
    
    fetch(api).then(response => {
         return response.json();
      }).then(data => {
        console.log(data);
    });
}; 

export default getWeather;