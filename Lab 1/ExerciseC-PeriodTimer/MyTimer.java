import java.util.Timer;
import java.util.TimerTask;
import java.text.SimpleDateFormat;
import java.util.Date;

public class MyTimer {
    private Timer timer;

    public MyTimer() {
        timer = new Timer(true); // Daemon thread
        long initialDelay = getInitialDelay();
        System.err.println("Initial delay: " + initialDelay + " ms");

        timer.scheduleAtFixedRate(new TimerTask() {
            @Override
            public void run() {
                SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd-HHmmss");
                String currentTime = sdf.format(new Date());
                System.err.println(currentTime);
            }
        }, initialDelay, 5 * 60 * 1000); // 5 minutes in milliseconds
    }

    private long getInitialDelay() {
        long currentTimeMillis = System.currentTimeMillis();
        long nextFiveMinuteMark = ((currentTimeMillis / (5 * 60 * 1000)) + 1) * (5 * 60 * 1000);
        return nextFiveMinuteMark - currentTimeMillis;
    }
}