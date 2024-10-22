const currentTemp = document.querySelector("#weather");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.736&lon=-111.834&units=imperial&appid=cefb473376acd73ec09ccfe6712f37ad"
// 41.736, -111.834
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

    function displayResults(data) {
        let desc = data.weather[0].description;
        currentTemp.innerHTML = `${data.name}, ${data.sys.country}: ${data.main.temp}&deg; F - ${desc}`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
    }


apiFetch();