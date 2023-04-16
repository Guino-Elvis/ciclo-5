from operator import truediv
import socket
port =6666
print("\x1b[41m\x1b[97m|----------------------------------------------|")
print("|          Bienvenido al chat ESCRIBE TU MENSAJEEEEEE ↓ ↓   ↓  |")
print("|--------------------------------------------------------------|\x1b[0m")
while truediv:
    clienteSocket = socket.socket(socket.AF_INET,socket.SOCK_STREAM)
    clienteSocket.connect(('localhost',port))
    message =input("CHAT DE GINO: \n")
    clienteSocket.send(message.encode())














    