// Current weather
// Weather Info 
const currentTemp = document.querySelector("#mainweather");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.736&lon=-111.834&units=imperial&appid=cefb473376acd73ec09ccfe6712f37ad"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

    function displayResults(data) {
		let desc = document.createElement('p');
		desc.classList.add('weathercon');
		desc.textContent = data.weather[0].description;

		let curTomp = document.createElement('p');
		curTomp.innerHTML = `${data.main.temp}&deg; F`;

		currentTemp.appendChild(desc);
		currentTemp.appendChild(curTomp);
    }


apiFetch();

// 5-Day Forecast

const forecasto = document.querySelector("#forecast");
const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=41.736&lon=-111.834&units=imperial&appid=cefb473376acd73ec09ccfe6712f37ad";


async function forecastFetch() {
	try {
		const response = await fetch(url2);
		if (response.ok) {
			const data = await response.json();
			// console.log(data);
			displayForecast(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

function displayForecast(data) {
	const dayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	for (let i = 0; i < data.list.length; i+=8){
		let sanction = document.createElement('section');
		let y = i+6;
		let z = i+1

		let dateHd = document.createElement('h4');
		let date = new Date(data.list[i].dt_txt);
		dateHd.textContent = `${dayWeek[date.getDay()]}`;

		let weathing = document.createElement('p');
		weathing.classList.add('weathercon');
		weathing.textContent = data.list[i].weather[0].description;

		let minTemp = document.createElement('p');
		minTemp.classList.add('tempmin');
		
		let maxTemp = document.createElement('p');
		maxTemp.classList.add('tempmax');
		

		if (data.list[y].main.temp_max < data.list[z].main.temp_min){
			minTemp.innerHTML = `${data.list[y].main.temp_min}&deg; F`;
			maxTemp.innerHTML = `${data.list[z].main.temp_max}&deg; F`;
		} else{
			minTemp.innerHTML = `${data.list[z].main.temp_min}&deg; F`;
			maxTemp.innerHTML = `${data.list[y].main.temp_max}&deg; F`;
		}
		
		sanction.appendChild(dateHd);
		sanction.appendChild(weathing);
		sanction.appendChild(minTemp);
		sanction.appendChild(maxTemp);
		forecasto.appendChild(sanction);
	}

}


forecastFetch();