const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const fs = require('fs');
const PROTO_PATH = './book.proto';

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const bookProto = grpc.loadPackageDefinition(packageDefinition).bookmanagement;

// Load the book data from the JSON file
let books = JSON.parse(fs.readFileSync('./books.json', 'utf8'));

// Get details of a book by its ID
function GetBookInfo(call, callback) {
    const bookId = call.request.id;
    const book = books.find(b => b.id === bookId);
    if (book) {
      callback(null, book);
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        details: "Book not found"
      });
    }
}
  
// List all books
function ListBooks(call, callback) {
    callback(null, { books });
}
  
// Add a new book
function AddBook(call, callback) {
    const newBook = call.request;
    books.push(newBook);
    fs.writeFileSync('./books.json', JSON.stringify(books, null, 2), 'utf8');
    callback(null, newBook);
}
  
function main() {
    const server = new grpc.Server();
    server.addService(bookProto.BookService.service, {
      GetBookInfo,
      ListBooks,
      AddBook
    });
    const serverAddress = '127.0.0.1:50051';
    server.bindAsync(serverAddress, grpc.ServerCredentials.createInsecure(), () => {
      console.log(`Server running at ${serverAddress}`);
    });
}
  
main();