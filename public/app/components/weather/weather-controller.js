function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);
		//What can you do with this weather object?
		var template = ''
		var weatherElem = document.getElementById('weather')
		template += `
						<h3>Today's Weather</h3>
						<p>${weather.name} Idaho</p>
						<p>${weather.main.temp}&deg;F</p>
				`
		weatherElem.innerHTML = template
	})



}
