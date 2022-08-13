const API_KEY = 'bb26541ad76658b14b2807113b8811b2';
const emoji = ['fa-solid fa-sun','fa-solid fa-cloud','fa-solid fa-bolt','fa-solid fa-umbrella'];
const weatherNm = ['Clear', 'Clouds', 'Thunder', 'Rain'];


function onGeoOk(position) {    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const imoticonSpan = document.querySelector('#imoticon');
        const temp = document.querySelector('#temp');
        const area = document.querySelector('#area');

        const imoticon = document.createElement('i');
        imoticon.className = emoji[weatherNm.findIndex(e => e == data.weather[0].main)];
        imoticonSpan.append(imoticon);
        temp.innerText = Math.floor(data.main.temp);
        area.innerText = data.name;
    });

}
function onGeoError() {
    alert("Can't find you, No weather for you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);







