const temperature = document.querySelector(".weather1");
const cityField = document.querySelector(".weather2 p");
const dataField = document.querySelector(".weather2 span");
const imgField = document.querySelector(".weather3 p img");
const weatherField = document.querySelector(".weather3 span");

const form = document.querySelector("form");

const textInput = document.querySelector("input[type=text]");

let infoObj = {};


async function search(url) {
  let abc = await fetchWeatherData(url);
  // console.log(await fetchWeatherData().current.temp_c)
  // console.log(abc);
  updateTemprature(abc.current.temp_c);
  updateCityField(abc.location.name);
  updateDataField(abc.location.localtime);
  updateImgField(abc.current.condition.icon);
  updateWeatherField(abc.current.condition.text);
}

async function fetchWeatherData(url) {
  const response = await fetch(url);
  const data = await response.json();
  infoObj = await data;
  return infoObj;
}

function updateTemprature(temp) {
  temperature.innerHTML = temp + " &deg";
}

function updateCityField(city) {
  cityField.innerText = city;
}

function updateDataField(time) {
  dataField.innerText = new Date(time).toDateString();
}

function updateImgField(img) {
  imgField.src = img;
}

function updateWeatherField(text) {
  weatherField.innerText = text;
}

// search();










form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let target = "Delhi";

    target=textInput.value;
// console.log(target)
textInput.value="";
let url = `http://api.weatherapi.com/v1/current.json?key= 3db4957cdeeb4770b1e152800230511&q=$${target}&aqi=no`;
    search(url)
})

search(`http://api.weatherapi.com/v1/current.json?key= 3db4957cdeeb4770b1e152800230511&q=$bhopal&aqi=no`)