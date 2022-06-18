// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load", () => {
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition((position) => {
	console.log(position);
	lon = position.coords.longitude;
	lat = position.coords.latitude;

	// API ID
	const api = "6d055e39ee237af35ca066f35474e9df";

	// API URL
	const base =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
`lon=${lon}&appid=${api}`;

	// Calling the API
	fetch(base)
		.then((response) => {
		return response.json();
		})
		.then((data) => {
		console.log(data);
		temperature.textContent =
			Math.floor(data.main.temp - kelvin) + "°C";
			console.log(Math.floor(data.main.temp - kelvin))
			const temp = (Math.floor(data.main.temp - kelvin))
		summary.textContent = data.weather[0].description;
		loc.textContent = data.name + "," + data.sys.country;
		icon.innerHTML =
			`<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' style= 'height:10rem'/>`;

			//rice
if ( (temp >= 21) && (temp <= 37)) {
		document.getElementById("rice").innerHTML = "Good";
} else {
	document.getElementById("rice").innerHTML = "Bad";
}
			//wheat
if ( (temp >= 21) && (temp <= 24)) {
	document.getElementById("wheat").innerHTML = "Good";
} else {
	document.getElementById("wheat").innerHTML = "Bad";
}
			//millets
if ( (temp >= 26) && (temp <= 29)) {
	document.getElementById("millets").innerHTML = "Good";
} else {
	document.getElementById("millets").innerHTML = "Bad";
}
			//maize
if ( (temp >= 21) && (temp <= 27)) {
	document.getElementById("maize").innerHTML = "Good";
} else {
	document.getElementById("maize").innerHTML = "Bad";
}
});
});
}
});