var uri = "https://restcountries.com/v3.1/all";
var uri =
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=YOUR_API_KEY";
// DOC LINK: https://openweathermap.org/api/one-call-3#current

// Fetched Rest Countries from api
function fetchCountries() {
  fetch(uri)
    .then((response) => {
      return response.json();
    })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}
fetchCountries();
