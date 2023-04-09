import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class ServidorGE {

    public static void main(String[] args) throws IOException {
        int port = 6666;
        ServerSocket serverSocket = new ServerSocket(port);
        while (true) {
            System.out.println("ESTAS CONECTADO AL SERVIDOR : " + port + "\n");
            Socket clientSocket = serverSocket.accept();
            InputStream request = clientSocket.getInputStream();
            DataInputStream in = new DataInputStream(request);
            String message = new String(in.readAllBytes());
            System.out.println("mensaje del usuario recibido recividoo :" + message);

        }

    }

}
