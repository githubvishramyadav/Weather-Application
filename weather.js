const api = {
    key:"9bf4f01977512c9269e87b6829a9f70a",
    base:"https://api.openweathermap.org/data/2.5/"
}
function getData(query){
    fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
   .then(response => response.json())
   .then(display)
}

const searchBox=document.getElementById("search");
searchBox.addEventListener('keypress',setQuery)

function setQuery(e){
    if(e.code == "Enter"){
        getData(searchBox.value)
    }
}

function display(weather){
  document.getElementById("search").value=" "
  let city=document.getElementById("city")
  city.innerText=`${weather.name}, ${weather.sys.country}`

  let x = new Date()
  let date=document.getElementById("date")
  date.innerText=x

  let temp=document.getElementById("temp")
  temp.innerText=`${Math.round(weather.main.temp)} °C`

  let info=document.getElementById("info")
  info.innerText=weather.weather[0].main
}