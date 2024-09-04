public class TimerTest {

  public static void main(String args[]) {
    MyTimer timer = new MyTimer();

    // Keep the main thread alive to allow the TimerTask to run
    while (true) {
      try {
        Thread.sleep(1000); // Sleep for 1 second
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
  }
}
