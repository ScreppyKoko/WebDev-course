// task 1 --------------------
// Задание - написать приложение, для получения текущего состояния погоды. Используем openweathermap.
// Пользователь заходит на сайт ( страницу) и получает погоду города по умолчанию (геопозиционирование не применяем).
//  Пользователь выбирает город из выпадающего списка - и получает текущую погоду.

//! для усложнения задачи создать всё через JS
// const cities = {
//    2643743: "London",
//    625144: "Minsk",
//    3099434: "Gdansk",
//    703448: "Kyiv"
// }

const param = {
   "url": "https://api.openweathermap.org/data/2.5/",
   "appid": "5ae4b8137659070dc9f52384a8f145d7"
};

function getWeather() {
   const cityId = document.querySelector('.city__id').value;
   fetch(`${param.url}forecast?id=${cityId}&appid=${param.appid}`)
      .then(weather => {
         return weather.json();
      }).then(showWeather);
}

function showWeather(data) {
   console.log(data);
   document.querySelector('.city1').innerHTML = data.city.name.toUpperCase();
   document.querySelector('.temp1').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg;';
   document.querySelector('.disclaimer1').innerHTML = data.list[0].weather[0].description;
   document.querySelector('.picture1').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.list[0].weather[0]['icon']}@2x.png">`;

}

getWeather();
document.querySelector('.city__id').onchange = getWeather;