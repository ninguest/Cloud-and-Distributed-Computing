import java.util.LinkedList;
import java.util.Queue;

public class BoundedBufferImpl implements BoundedBuffer {
    private final Queue<Object> buffer;
    private final int maxSize;
    private final Object lock = new Object();

    public BoundedBufferImpl(int size) {
        this.maxSize = size;
        this.buffer = new LinkedList<>();
    }

    public BoundedBufferImpl() {
        this(10); // Default size
    }

    @Override
    public void insert(Object o) {
        synchronized (lock) {
            while (buffer.size() == maxSize) {
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
            buffer.add(o);
            lock.notifyAll();
        }
    }

    @Override
    public Object remove() {
        synchronized (lock) {
            while (buffer.isEmpty()) {
                try {
                    lock.wait();
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
            Object item = buffer.remove();
            lock.notifyAll();
            return item;
        }
    }
}