
// import java.awt.BorderLayout;
// import java.awt.Dimension;
// import java.io.DataInputStream;
// import java.io.IOException;
// import java.io.InputStream;
// import java.net.ServerSocket;
// import java.net.Socket;

// import javax.swing.JFrame;
// import javax.swing.JScrollPane;
// import javax.swing.JTextArea;

// public class ServidorGE extends JFrame {

//     private JTextArea textArea;

//     public ServidorGE() {
//         setTitle("ServidorGE");
//         setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

//         // Crear el campo de texto
//         textArea = new JTextArea();
//         textArea.setEditable(false);
//         JScrollPane scrollPane = new JScrollPane(textArea);

//         // Agregar el campo de texto a la ventana
//         getContentPane().add(scrollPane, BorderLayout.CENTER);
//         setSize(new Dimension(400, 300));
//         setLocationRelativeTo(null);
//         setVisible(true);
//     }

//     public void startServer() throws IOException {
//         int port = 6666;
//         ServerSocket serverSocket = new ServerSocket(port);
//         while (true) {
//             textArea.append("ESTAS CONECTADO AL SERVIDOR : " + port + "\n");
//             Socket clientSocket = serverSocket.accept();
//             InputStream request = clientSocket.getInputStream();
//             DataInputStream in = new DataInputStream(request);
//             String message = new String(in.readAllBytes());
//             textArea.append("mensaje del usuario recibido: " + message + "\n");
//         }
//     }

//     public static void main(String[] args) throws IOException {
//         ServidorGE servidor = new ServidorGE();
//         servidor.startServer();
//     }
// }
import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.io.DataInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;
import javax.swing.JFrame;
import javax.swing.JScrollPane;
import javax.swing.JTextArea;

public class ServidorGE extends JFrame {

    private JTextArea textArea;

    public ServidorGE() {
        setTitle("ServidorGE");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Crear el campo de texto
        textArea = new JTextArea();
        textArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(textArea);

        // Agregar el campo de texto a la ventana
        getContentPane().add(scrollPane, BorderLayout.CENTER);

        // Establecer el color del texto para el mensaje "ESTAS CONECTADO AL SERVIDOR :"
        textArea.setForeground(Color.RED);

        setSize(new Dimension(400, 300));
        setLocationRelativeTo(null);
        setVisible(true);
    }

    public void startServer() throws IOException {
        int port = 6666;
        ServerSocket serverSocket = new ServerSocket(port);

        // Establecer el color del texto para los mensajes del cliente en verde
        Color verde = new Color(0, 150, 0);
        textArea.setForeground(verde);

        while (true) {
            textArea.append("ESTAS CONECTADO AL SERVIDOR : " + port + "\n");
            Socket clientSocket = serverSocket.accept();
            InputStream request = clientSocket.getInputStream();
            DataInputStream in = new DataInputStream(request);
            String message = new String(in.readAllBytes());
            textArea.append("mensaje del usuario recibido: " + message + "\n");

            // Cambiar el color de la fuente solo cuando llegue un mensaje del cliente
            textArea.setForeground(verde);
        }
    }

    public static void main(String[] args) throws IOException {
        ServidorGE servidor = new ServidorGE();
        servidor.startServer();
    }
}