const input = document.getElementById("search-city")
const temp = document.getElementById('temp')
const city = document.getElementById('city')
const humidity = document.getElementById('humid')
const wind = document.getElementById('windy')



async function getData(cityname){
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c94f1dfa10e0462eaf8135021240707&q=${cityname}`)
 return await  response.json()
}

document.getElementById("magnify").addEventListener("click", async()  =>{
  
  const result = await getData(input.value)
  console.log(result)
 temp.innerText= result.current.temp_c +"°c";
  city.innerText =`${result.location.name},${result.location.country}`
   humidity.innerText= result.current.humidity +"%";
  wind.innerText= result.current.wind_kph +"kph";
});
