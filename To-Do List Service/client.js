const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './todo.proto';

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const todoProto = grpc.loadPackageDefinition(packageDefinition).todo;

// Create a client
const client = new todoProto.TodoService('127.0.0.1:50051', grpc.credentials.createInsecure());

// Get all tasks
function getTasks() {
    client.GetTasks({}, (error, response) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("To-Do List:", response.tasks);
      }
    });
}
  
// Add a new task
function addTask(description) {
    const newTask = {
      description,
      isCompleted: false
    };
    client.AddTask(newTask, (error, addedTask) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("Task Added:", addedTask);
      }
    });
}
  
// Delete a task by ID
function deleteTask(id) {
    client.DeleteTask({ id }, (error, taskId) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("Task Deleted:", taskId);
      }
    });
}

// Get the list of tasks
getTasks();

// Add a new task
addTask("Clean the house");

// Delete a task by ID
deleteTask(1);
