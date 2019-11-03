const getWeather = (...args) =>{
    let API_KEY = '67d0e0f98e9f6eed6c046ce44004ced6';
   if(args.length == 1){
        let api = `http://api.openweathermap.org/data/2.5/weather?q=${args[0]}&APPID=${API_KEY}`;
      }else if(args.length == 2){
        let api = `http://api.openweathermap.org/data/2.5/weather?lat=${args[0]}&lon=${args[1]}&APPID=${API_KEY}`;
      }
        
    fetch(api).then(response => {
         return response.json();
      }).then(data => {
        console.log(data);
    });
}; 



export default getWeather;