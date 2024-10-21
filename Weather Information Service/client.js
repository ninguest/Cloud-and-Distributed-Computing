const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './weather.proto';

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const weatherProto = grpc.loadPackageDefinition(packageDefinition).weatherinfo;

// Create a client
const client = new weatherProto.WeatherService('127.0.0.1:50051', grpc.credentials.createInsecure());

// Get weather for a specific location
function getWeather(location) {
    client.GetWeather({ location }, (error, weather) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log(`Weather in ${location}:`, weather);
      }
    });
}
  
// List all available locations
function listLocations() {
    client.ListLocations({}, (error, response) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("Available locations:", response.locations);
      }
    });
}
  
// Add a new location's weather data
function addWeather(weather) {
    client.AddWeather(weather, (error, addedWeather) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("New weather data added:", addedWeather);
      }
    });
}

// Get weather for a specific location
getWeather("New York");

// List all available locations
listLocations();

// Add new weather data for a location
const newWeather = {
  location: "Tokyo",
  temperature: "25°C",
  humidity: "60%",
  windSpeed: "8 km/h"
};
addWeather(newWeather);
