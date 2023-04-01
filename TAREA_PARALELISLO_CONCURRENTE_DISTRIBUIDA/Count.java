import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.stream.IntStream;

public class Count {

    public static int count(int[] data) {
        int count = 0;
        for (int i = 0; i < data.length; i++) {
            if (data[i] % 2 == 0) {
                count++;
            }
        }
        return count;
    }

    public static int parallelCount(int[] data) {
        int numThreads = Runtime.getRuntime().availableProcessors();
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);
        int chunkSize = data.length / numThreads;

        int[] results = new int[numThreads];

        IntStream.range(0, numThreads)
                .mapToObj(i -> new CountTask(data, i * chunkSize, (i + 1) * chunkSize, results, i))
                .forEach(executor::execute);

        executor.shutdown();
        try {
            executor.awaitTermination(1, TimeUnit.MINUTES);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        return IntStream.of(results).sum();
    }

    public static class CountTask implements Runnable {
        private final int[] data;
        private final int start;
        private final int end;
        private final int[] results;
        private final int index;

        public CountTask(int[] data, int start, int end, int[] results, int index) {
            this.data = data;
            this.start = start;
            this.end = end;
            this.results = results;
            this.index = index;
        }

        @Override
        public void run() {
            int count = 0;
            for (int i = start; i < end; i++) {
                if (data[i] % 2 == 0) {
                    count++;
                }
            }
            results[index] = count;
        }
    }

    public static void main(String[] args) {
        int[] data = {12, 23, 32, 40, 50, 60, 7, 8, 91, 100};

        long startTime = System.nanoTime();
        int count = count(data);
        long endTime = System.nanoTime();

        System.out.println("Número de elementos pares (sin programación paralela): " + count);
        System.out.println("Tiempo de ejecución (sin programación paralela): " + (endTime - startTime) + " nanosegundos");

        startTime = System.nanoTime();
        count = parallelCount(data);
        endTime = System.nanoTime();

        System.out.println("Número de elementos pares (con programación paralela): " + count);
        System.out.println("Tiempo de ejecución (con programación paralela): " + (endTime - startTime) + " nanosegundos");
    }
}