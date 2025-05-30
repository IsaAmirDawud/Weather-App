const provinceInput = document.getElementById('province-input');
const searchButton = document.getElementById('button');

const forecastImageDiv = document.getElementById('forecast-image');
const temperatureElement = document.getElementById('temp');
const destinationElement = document.getElementById('destination');

const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

const forecastImageNames = ['clear night', 'clear', 'cloudy', 'drizzle', 'fog', 'freezing rain', 'heavy rain', 'heavy snow', 'partly cloudy night', 'partly cloudy', 'rain', 'snow', 'windy']; 
const forecastImageElements = forecastImageNames.map((element) => `<img src="Images/` + element + '.png">'); 


const torontoURL = 'https://api.open-meteo.com/v1/forecast?latitude=43.7001&longitude=-79.4163&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=precipitation_probability,precipitation,rain,showers&timezone=America%2FNew_York'
const quebecURL = 'https://api.open-meteo.com/v1/forecast?latitude=46.8123&longitude=-71.2145&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m&hourly=precipitation_probability,precipitation,rain,showers&timezone=America%2FNew_York'; 
const novaScotiaURL = 'https://api.open-meteo.com/v1/forecast?latitude=44.6464&longitude=-63.5729&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m'
const newBrunswickURL = 'https://api.open-meteo.com/v1/forecast?latitude=45.9454&longitude=-66.6656&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m';
const manitoba = 'https://api.open-meteo.com/v1/forecast?latitude=49.8844&longitude=-97.147&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York';
const britishColumbia = 'https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York';
const princeEdwardIsland = 'https://api.open-meteo.com/v1/forecast?latitude=46.2346&longitude=-63.1256&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York';
const saskatchewan = 'https://api.open-meteo.com/v1/forecast?latitude=50.4501&longitude=-104.6178&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York';
const albertaURL = 'https://api.open-meteo.com/v1/forecast?latitude=51.0501&longitude=-114.0853&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York'; 
const newfoundlandAndLabrador = 'https://api.open-meteo.com/v1/forecast?latitude=47.5649&longitude=-52.7093&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York'; 
const northwestTerritories = 'https://api.open-meteo.com/v1/forecast?latitude=62.4541&longitude=-114.3725&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&timezone=America%2FNew_York'; 
const nunavutURL = 'https://api.open-meteo.com/v1/forecast?latitude=63.747&longitude=-68.5173&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&hourly=rain,snowfall&timezone=America%2FNew_York';
const yukonURL = 'https://api.open-meteo.com/v1/forecast?latitude=60.7161&longitude=-135.0538&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,cloud_cover,wind_speed_10m,wind_gusts_10m&hourly=rain,snowfall&timezone=America%2FNew_York'





window.onload = () =>{
  fetchData(torontoURL, 'Ontario')
}

const setProvince = input =>{
  const value = input.toLowerCase(); 
  switch (value) {
    case 'ontario': 
    fetchData(torontoURL, 'Ontario');
    break;
    case 'quebec': 
    fetchData(quebecURL, 'Quebec');
    break; 
    case 'nova scotia': 
    fetchData(novaScotiaURL, 'Nova Scotia'); 
    break;
    case 'new brunswick': 
    fetchData(newBrunswickURL, 'New brunswick');
    break; 
    case 'manitoba': 
    fetchData(torontoURL, 'Manitoba');
    break; 
    case 'british columbia': 
    fetchData(torontoURL, 'British Columbia');
    break;
    case 'prince edward island': 
    case 'pei': 
    fetchData(torontoURL, 'Prince Edward Island');
    break;
    case 'saskatchewan': 
    fetchData(torontoURL, 'Saskatchewan');
    break;
    case 'alberta': 
    fetchData(torontoURL, 'Alberta');
    break;
    case 'newfoundland and labrador':
    case 'newfoundland': 
    fetchData(torontoURL, 'Newfoundland And Labrador');
    break;
    case 'northwest teritories': 
    fetchData(torontoURL, 'Northwest Teritories');
    break;
    case 'yukon': 
    fetchData(torontoURL, 'Yukon');
    break;
    case 'nunavut': 
    fetchData(torontoURL, 'Nunavut');
    break;
  } 
}

const fetchData = async (url, prov) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      getData(data.current, prov);
    } catch (err) {
      console.log(err);
    }
};


const getData = (data, prov) => {
  //            0                  1          2          3          4      5         6           7                8                9                
  const { apparent_temperature, cloud_cover, is_day, precipitation, rain, showers, snowfall, temperature_2m, wind_speed_10m, relative_humidity_2m} = data; 
  const weatherDataArray = [apparent_temperature, cloud_cover, is_day, precipitation, rain, showers, snowfall, temperature_2m, wind_speed_10m, relative_humidity_2m]; 
  displayData(weatherDataArray, prov); 
}

const displayData = (arr, prov) => {
  let isDay = false; 

  if(arr[2] === 1){
    isDay = true; 
  }
  console.log(forecastImageElements)

  if(!isDay && arr[1] >= 25){
    forecastImageDiv.innerHTML = forecastImageElements[8]; 
  } else if (!isDay) {
    forecastImageDiv.innerHTML = forecastImageElements[0]; 
  }

  if(isDay && arr[1] <= 24 && arr[3] === 0 && arr[8] < 32){
    forecastImageDiv.innerHTML = forecastImageElements[1]
  } else if (isDay && arr[8] >= 32 && precipitation === 0) {
    forecastImageDiv.innerHTML = forecastImageElements[12]
  } else if (isDay && arr[8] < 32 && arr[1] >= 26 && arr[1] < 50 && arr[3] === 0){
    forecastImageDiv.innerHTML = forecastImageElements[9]
  } else if (isDay && arr[8] < 32 && arr[1] >= 50 && arr[3] === 0){
    forecastImageDiv.innerHTML = forecastImageElements[2]
  } else if (isDay && arr[4] > 0 && arr[6] > 0){
    forecastImageDiv.innerHTML = forecastImageElements[5]
  } else if (isDay && arr[4] > 0 && arr[4] < 2.5 && arr[6] === 0){
    forecastImageDiv.innerHTML = forecastImageElements[3]
  } else if (isDay && arr[4] >= 2.5 && arr[4] < 7.6 && arr[6] === 0){
    forecastImageDiv.innerHTML = forecastImageElements[10]
  } else if (isDay && arr[4] >= 7.6 && arr[6] === 0) {
    forecastImageDiv.innerHTML = forecastImageElements[6]
  } else if (isDay && arr[6] > 0 && arr[6] < 2.5 && arr[4] === 0){
    forecastImageDiv.innerHTML = forecastImageElements[11]
  } else if (isDay && arr[6] >= 2.5 && arr[4] === 0){
    forecastImageDiv.innerHTML = forecastImageElements[7]
  }

  destinationElement.textContent = prov; 
  temperatureElement.textContent = arr[7] + '°C'; 
  humidityElement.textContent = arr[9] +'%'; 
  windSpeedElement.textContent = arr[8] + ' km/h'; 
}; 

searchButton.addEventListener('click', ()=>{
  setProvince(provinceInput.value); 
})

provinceInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter"){
    setProvince(provinceInput.value)
  }
})