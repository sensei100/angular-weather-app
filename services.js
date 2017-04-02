// SERVICES
weatherApp.service('cityService', function() {
  this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {

  this.GetWeather = function(city, days) {
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
      callback: "JSON_CALLBACK" }, { get: { method: "JSONP"}});

    return weatherAPI.get({q: city, cnt: days, appid: '0c78f15988745da7ce114ff930f0a6c9'});
  };
}]);