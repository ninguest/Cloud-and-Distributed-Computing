const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');
const PROTO_PATH = './todo.proto';

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

// Load tasks from the JSON file
let tasks = JSON.parse(fs.readFileSync('./todo.json', 'utf8'));

// Function to save tasks to the JSON file
function saveTasks() {
    fs.writeFileSync('./todo.json', JSON.stringify(tasks, null, 2));
}

// Retrieve all tasks
function GetTasks(call, callback) {
    callback(null, { tasks });
}
  
// Add a new task
function AddTask(call, callback) {
    const newTask = call.request;
    newTask.id = tasks.length + 1;  // Assign a new unique ID
    tasks.push(newTask);
    saveTasks(); // Save the tasks to the JSON file
    callback(null, newTask);
}
  
// Delete a task by ID
function DeleteTask(call, callback) {
    const taskId = call.request.id;
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        saveTasks(); // Save the tasks to the JSON file
        callback(null, { id: taskId });
    } else {
        callback({
            code: grpc.status.NOT_FOUND,
            details: "Task not found"
        });
    }
}

function main() {
    const server = new grpc.Server();
    server.addService(todoProto.TodoService.service, {
        GetTasks,
        AddTask,
        DeleteTask
    });
    const serverAddress = '127.0.0.1:50051';
    server.bindAsync(serverAddress, grpc.ServerCredentials.createInsecure(), () => {
        console.log(`Server running at ${serverAddress}`);
    });
}
  
main();