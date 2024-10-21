const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const PROTO_PATH = './book.proto';

// Load the proto file
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const bookProto = grpc.loadPackageDefinition(packageDefinition).bookmanagement;

// Create a client
const client = new bookProto.BookService('127.0.0.1:50051', grpc.credentials.createInsecure());

// Get book info by ID
function getBookInfo(id) {
    client.GetBookInfo({ id }, (error, book) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("Book Info:", book);
      }
    });
}
  
// List all books
function listBooks() {
    client.ListBooks({}, (error, response) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("Books List:", response.books);
      }
    });
}
  
// Add a new book
function addBook(book) {
    client.AddBook(book, (error, addedBook) => {
      if (error) {
        console.error("Error:", error.details);
      } else {
        console.log("Book Added:", addedBook);
      }
    });
}

// Get a book by ID
getBookInfo(1);

// List all books
listBooks();

// Add a new book
const newBook = {
  id: 3,
  title: "1984",
  author: "George Orwell",
  year: "1949"
};
addBook(newBook);