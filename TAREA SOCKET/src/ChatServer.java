// import java.io.*;
// import java.net.*;
// import java.util.ArrayList;
// import java.util.List;
// import java.util.Scanner;

// public class ChatServer {
//     private List<Socket> clients = new ArrayList<>();
//     private ServerSocket serverSocket;

//     public ChatServer(int port) {
//         try {
//             serverSocket = new ServerSocket(port);
//             System.out.println("Server started on port " + port);
//             System.out.println("Waiting for clients...");

//             while (true) {
//                 Socket clientSocket = serverSocket.accept();
//                 clients.add(clientSocket);

//                 Thread clientThread = new Thread(() -> {
//                     try {
//                         BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
//                         while (true) {
//                             String message = in.readLine();
//                             if (message == null) {
//                                 break;
//                             }
//                             System.out.println("Received message from client: " + message);
//                             broadcast(message);
//                         }
//                     } catch (IOException e) {
//                         e.printStackTrace();
//                     } finally {
//                         clients.remove(clientSocket);
//                         System.out.println("Client disconnected");
//                     }
//                 });
//                 clientThread.start();
//             }
//         } catch (IOException e) {
//             e.printStackTrace();
//         }
//     }

//     private void broadcast(String message) {
//         System.out.println("Broadcasting message to " + clients.size() + " clients");
//         for (Socket clientSocket : clients) {
//             try {
//                 PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
//                 out.println(message);
//             } catch (IOException e) {
//                 e.printStackTrace();
//             }
//         }
//     }

//     public static void main(String[] args) {
//         Scanner scanner = new Scanner(System.in);
//         System.out.print("Enter port number: ");
//         int port = scanner.nextInt();
//         new ChatServer(port);
//     }
// }

import javax.swing.*;
import java.awt.*;
import java.io.*;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class ChatServer extends JFrame {
    private final JTextArea messageArea;
    private final List<Socket> clients = new ArrayList<>();
    private ServerSocket serverSocket;

    public ChatServer(int port) {
        super("Chat Server");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        messageArea = new JTextArea(15, 50);
        messageArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(messageArea);
        add(scrollPane, BorderLayout.CENTER);

        JPanel buttonPanel = new JPanel(new FlowLayout());
        JButton startButton = new JButton("Start");
        startButton.addActionListener(e -> startServer(port));
        JButton stopButton = new JButton("Stop");
        stopButton.addActionListener(e -> stopServer());
        buttonPanel.add(startButton);
        buttonPanel.add(stopButton);
        add(buttonPanel, BorderLayout.SOUTH);

        pack();
        setLocationRelativeTo(null);
        setVisible(true);
    }

    private void startServer(int port) {
        try {
            serverSocket = new ServerSocket(port);
            messageArea.append("Server started on port " + port + "\n");
            messageArea.append("Waiting for clients...\n");

            while (true) {
                Socket clientSocket = serverSocket.accept();
                clients.add(clientSocket);

                Thread clientThread = new Thread(() -> {
                    try {
                        BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                        while (true) {
                            String message = in.readLine();
                            if (message == null) {
                                break;
                            }
                            messageArea.append("Received message from client: " + message + "\n");
                            broadcast(message);
                        }
                    } catch (IOException e) {
                        e.printStackTrace();
                    } finally {
                        clients.remove(clientSocket);
                        messageArea.append("Client disconnected\n");
                    }
                });
                clientThread.start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void stopServer() {
        try {
            serverSocket.close();
            for (Socket clientSocket : clients) {
                clientSocket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            clients.clear();
            messageArea.append("Server stopped\n");
        }
    }

    private void broadcast(String message) {
        messageArea.append("Broadcasting message to " + clients.size() + " clients\n");
        for (Socket clientSocket : clients) {
            try {
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);
                out.println(message);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter port number: ");
            int port = scanner.nextInt();
            new ChatServer(port);
        });
    }
}