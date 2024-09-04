## **Files Details**
**EchoType Directory**

1. [**MultiEchoServer.java**]:
   1. Implements a multi-threaded server that listens on port 8765.
   1. Accepts client connections and starts a new thread for each client using the [ClientHandler] class.
   1. Echoes back any messages received from the clients.
1. [**EchoClient.java**](vscode-file://vscode-app/c:/Users/n/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html "c:\Users\n\Documents\GitHub\Cloud-and-Distributed-Computing\Lab 1\ExerciseB-StringReflector\EchoType\EchoClient.java"):
   1. Implements a client that connects to the [MultiEchoServer][ClientHandler] on localhost at port 8765.
   1. Sends user input to the server and prints the echoed response from the server.
1. [**ClientHandler**][**MultiEchoServer.java**] (inner class in [MultiEchoServer.java][**MultiEchoServer.java**]):
   1. Handles the communication with a single client.
   1. Reads messages from the client and echoes them back.

**Chattype Directory**

1. [**ChatServer.java**]:
   1. Implements a multi-threaded chat server that listens on port 8765.
   1. Accepts client connections and starts a new thread for each client using the [ClientHandler] class.
   1. Maintains a list of connected clients and broadcasts messages from one client to all other clients.
1. [**ChatClient.java**](vscode-file://vscode-app/c:/Users/n/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html "c:\Users\n\Documents\GitHub\Cloud-and-Distributed-Computing\Lab 1\ExerciseB-StringReflector\Chattype\ChatClient.java"):
   1. Implements a client that connects to the [ChatServer][ClientHandler] on localhost at port 8765.
   1. Sends user input to the server and prints messages broadcasted by the server.
1. [**ClientHandler**][**ChatServer.java**] (inner class in [ChatServer.java][**ChatServer.java**]):
   1. Handles the communication with a single client.
   1. Reads messages from the client and broadcasts them to all other connected clients.


**EchoType:** Contains a simple echo server and client where each client receives back the messages it sends.

**Chattype:** Contains a chat server and client where messages from one client are broadcasted to all other connected clients.














[**MultiEchoServer.java**]: <vscode-file://vscode-app/c:/Users/n/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html> "c:\Users\n\Documents\GitHub\Cloud-and-Distributed-Computing\Lab 1\ExerciseB-StringReflector\EchoType\MultiEchoServer.java"
[ClientHandler]: <vscode-file://vscode-app/c:/Users/n/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html> "Go to definition"
[**ChatServer.java**]: <vscode-file://vscode-app/c:/Users/n/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html> "c:\Users\n\Documents\GitHub\Cloud-and-Distributed-Computing\Lab 1\ExerciseB-StringReflector\Chattype\ChatServer.java"
