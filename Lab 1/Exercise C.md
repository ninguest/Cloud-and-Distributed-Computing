## **Files Details**
[**MyTimer.java]**:**

This file defines the [MyTimer][**MyTimer.java] class, which sets up a periodic timer using Java's [Timer][**MyTimer.java] and [TimerTask][**MyTimer.java] classes.

- **Imports**:
  - [java.util.Timer][**MyTimer.java]
  - [java.util.TimerTask][**MyTimer.java]
  - [java.text.SimpleDateFormat][**MyTimer.java]
  - [java.util.Date][**MyTimer.java]
- **Class Definition**:
  - [MyTimer][**MyTimer.java] class contains a [Timer][**MyTimer.java] object and a constructor that initializes the timer as a daemon thread.
  - The constructor calculates the initial delay to the next 5-minute mark using the [getInitialDelay][**MyTimer.java] method.
  - It schedules a [TimerTask][**MyTimer.java] to print the current time every 5 minutes.
- **Methods**:
  - [getInitialDelay()][**MyTimer.java]: Calculates the delay to the next 5-minute mark from the current time.

[**TimerTest.java][**MyTimer.java]**:**

This file defines the [TimerTest][**MyTimer.java] class, which contains the [main][**MyTimer.java] method to run the timer.

- **Class Definition**:
  - [TimerTest][**MyTimer.java] class contains the [main][**MyTimer.java] method.
- **Main Method**:
  - Creates an instance of [MyTimer][**MyTimer.java].
  - Keeps the main thread alive in an infinite loop to allow the [TimerTask][**MyTimer.java] to run.
  - Uses [Thread.sleep(1000)][**MyTimer.java] to sleep for 1 second in each iteration of the loop, catching and printing any [InterruptedException][**MyTimer.java].

**Summary**

- [**MyTimer.java**][**MyTimer.java]: Defines the periodic timer and its behavior.
- [**TimerTest.java**][**MyTimer.java]: Runs the timer and keeps the main thread alive to allow the timer task to execute.


## **Lesson Learnt**
Several key concepts related to Java programming and working with timers:

1. **Using Java's Timer and TimerTask**:
   1. How to create and schedule tasks using the [Timer][**MyTimer.java] and [TimerTask][**MyTimer.java] classes.
   1. How to schedule tasks at fixed intervals using [scheduleAtFixedRate][**MyTimer.java].
1. **Working with Dates and Time**:
   1. How to format dates using [SimpleDateFormat][**MyTimer.java] and [Date][**MyTimer.java] classes.
1. **Daemon Threads**:
   1. How to create and use daemon threads in Java, which are background threads that do not prevent the JVM from exiting when the program finishes.
1. **Calculating Delays**:
   1. How to calculate the initial delay to the next 5-minute mark using the [getInitialDelay][**MyTimer.java] method.
1. **Keeping the Main Thread Alive**:
   1. How to keep the main thread alive to allow background tasks to run, demonstrated in the [TimerTest][**MyTimer.java] class.

These concepts are fundamental for understanding how to manage periodic tasks and background processing in Java applications.











[**MyTimer.java]: <vscode-file://vscode-app/c:/Users/n/AppData/Local/Programs/Microsoft%20VS%20Code/resources/app/out/vs/code/electron-sandbox/workbench/workbench.html> "Go to definition"
