import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.IntStream;

public class CountAnimals {

    public static void main(String[] args) {
        // Crear un arreglo de objetos de tipo Animal
        Animal[] animals = {
                new Animal("Perro", true),
                new Animal("Perro", true),
                new Animal("Perro", true),
                new Animal("Perro", true),
                new Animal("Gato", false),
                new Animal("Gato", false),
                new Animal("Gato", false),
                new Animal("Gato", false),
                new Animal("Gato", false),
              
        };

        long startTime = System.currentTimeMillis();
        int countWithTail = parallelCount(animals, true);
        int countWithoutTail = parallelCount(animals, false);
        long endTime = System.currentTimeMillis();

        // Imprimir resultados
        System.out.println("Número de animales sin cola: " + countWithTail);
        System.out.println("Número de animales con cola: " + countWithoutTail);
        // System.out.println("Número de animales sin cola: " + countWithoutTail);
        System.out.println("Tiempo de ejecución con programación paralela: " + (endTime - startTime) + " ms");

        // Contar animales con y sin cola sin programación paralela
        startTime = System.currentTimeMillis();
        int countWithTailSequential = sequentialCount(animals, true);
        int countWithoutTailSequential = sequentialCount(animals, false);
        endTime = System.currentTimeMillis();

        // Imprimir resultados
        System.out.println("Número de animales con cola sin programación paralela: " + countWithTailSequential);
        System.out.println("Número de animales sin cola sin programación paralela: " + countWithoutTailSequential);
        System.out.println("Tiempo de ejecución sin programación paralela: " + (endTime - startTime) + " ms");
    }

    public static int sequentialCount(Animal[] animals, boolean withTail) {
        int count = 0;
        for (Animal animal : animals) {
            if (animal.hasTail() == withTail) {
                count++;
            }
        }
        return count;
    }

    public static int parallelCount(Animal[] animals, boolean withTail) {
        int numThreads = Runtime.getRuntime().availableProcessors();
        ExecutorService executor = Executors.newFixedThreadPool(numThreads);
        int chunkSize = (int) Math.ceil((double) animals.length / numThreads);

        int[] results = new int[numThreads];

        IntStream.range(0, numThreads)
                .mapToObj(i -> new CountTask(animals, i * chunkSize, Math.min((i + 1) * chunkSize, animals.length), results, i, withTail))
                .forEach(executor::execute);

        executor.shutdown();
        while (!executor.isTerminated()) {
            // Esperar a que todas las tareas terminen
        }

        return IntStream.of(results).sum();
    }

    public static class CountTask implements Runnable {
        private final Animal[] animals;
        private final int start;
        private final int end;
        private final int[] results;
        private final int index;
        private final boolean withTail;
    
        /**
         * @param animals
         * @param start
         * @param end
         * @param results
         * @param index
         * @param withTail
         */
        public CountTask(Animal[] animals, int start, int end, int[] results, int index, boolean withTail) {
            this.animals = animals;
            this.start = start;
            this.end = end;
            this.results = results;
            this.index = index;
            this.withTail = withTail;
        }

        

        @Override
        public void run() {
            int count = 0;
            for (int i = start; i < end; i++) {
                if (animals[i].hasTail() == withTail) {
                    count++;
                }
            }
            results[index] = count;
        }   

    }  
}  
