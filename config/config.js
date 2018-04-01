/* Magic Mirror 2 arm64 Version
 * Config Sample
 *
 * orginal by Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * Revised by Stacy E.Webb https://stacywebb.com
 * MIT Licensed.
 *
 */
var config = {
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],
  language: "ru",
  timeFormat: 24,
  units: "metric",
  modules: [
    {
      module: "clock",
      position: "top_left",
	  config: {
			displaySeconds: false,
			dateFormat: "LL",
			displayType: "digital",
			analogPlacement: "right",
			analogSize: "120px",
			timezone: "Europe/Kiev"
	  }
    },
   {
      module: "currentweather",
      position: "top_right",
	  config: {
        location: "Киев",
        locationID: "703448", //Kiev; //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "API_KEY"
      }
    },
    {
      module: "weatherforecast",
      position: "bottom_bar",
      header: "Прогноз погоды",
      config: {
		forecastEndpoint: "forecast",  
        location: "Kiev,Ukraine",
		maxNumberOfDays: 4,
        locationID: "703448", //Kiev; //ID from http://www.openweathermap.org/help/city_list.txt
        appid: "API_KEY"
      }
    },
  ]
};
/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = config;
}
