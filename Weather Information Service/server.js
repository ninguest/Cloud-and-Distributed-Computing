const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');
const PROTO_PATH = './weather.proto';

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const weatherProto = grpc.loadPackageDefinition(packageDefinition).weatherinfo;

// Load the weather data from the JSON file
let weatherData = JSON.parse(fs.readFileSync('./weather.json', 'utf8'));

// Get weather for a specific location
function GetWeather(call, callback) {
    const location = call.request.location;
    const weather = weatherData.find(w => w.location === location);
    if (weather) {
      callback(null, weather);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Location not found"
      });
    }
}
  
// List all available locations
function ListLocations(call, callback) {
    const locations = weatherData.map(w => w.location);
    callback(null, { locations });
}
  
// Add a new location's weather data
function AddWeather(call, callback) {
    const newWeather = call.request;
    weatherData.push(newWeather);
    callback(null, newWeather);
}
  
function main() {
    const server = new grpc.Server();
    server.addService(weatherProto.WeatherService.service, {
      GetWeather,
      ListLocations,
      AddWeather
    });
    const serverAddress = '127.0.0.1:50051';
    server.bindAsync(serverAddress, grpc.ServerCredentials.createInsecure(), () => {
      console.log(`Server running at ${serverAddress}`);
    });
}
  
main();
  