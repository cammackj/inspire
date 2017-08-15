function WeatherController() {
	var wc = this;
	var weatherService = new WeatherService();

	weatherService.getWeather(function (weather) {
		console.log(weather);
		//What can you do with this weather object?
		var template = ''
		var weatherElem = document.getElementById('weather')
		template += `
			<div class="container">
				<div class="row">
					<div class="col-md-offset-10">
						<h3>Today's Weather</h3>
						<p>${weather.name}</p>
						<p>${weather.main.temp}</p>
					</div>
				</div>
			</div>`
		weatherElem.innerHTML = template
	})



}
