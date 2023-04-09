import socket
port =6666
while true:
    clienteSocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    clienteSocket.connect(('localhost',port))
    message =input("type your message and press enter to send...\n")
    clienteSocket.send(message.encode())