const cityInput="Toronto"

const queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityInput +
  "&units=imperial&APIKEY=d3100d1c4df5ca0bc479a80c96bf0ccf";

console.log(queryURL);

// weather api ajax call request and response logic
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

  const results = response;

  // add temperature to currentWeather div element on UI, rounding temp using Math.round function because temp value come back with two decimal places by default
  const roundedTemp = Math.round(results.main.temp);
  const currentTemp = $("<div>").text(roundedTemp + "\xB0F");

  // add temperature and city values to menu UI
  $("#currentWeather").prepend(currentTemp);
});