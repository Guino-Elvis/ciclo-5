from operator import truediv
import socket
port =6666
while truediv:
    clienteSocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    clienteSocket.connect(('localhost',port))
    message =input("ESCRIBE TU PRIMER MENSAJE XD Guino: \n")
    clienteSocket.send(message.encode())