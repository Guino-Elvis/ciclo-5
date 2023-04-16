# import socket
# import tkinter as tk

# class ChatClient:
#     def __init__(self, master):
#         self.master = master
#         self.master.title("Chat Client")
#         self.messages_listbox = tk.Listbox(self.master, height=15, width=50)
#         self.messages_listbox.pack(side=tk.TOP, padx=10, pady=10)
#         self.message_entry = tk.Entry(self.master, width=50)
#         self.message_entry.pack(side=tk.LEFT, padx=10, pady=10)
#         self.send_button = tk.Button(self.master, text="Send", command=self.send_message)
#         self.send_button.pack(side=tk.LEFT, padx=10, pady=10)
#         self.server_address = ("localhost", 6666)
#         self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
#         self.socket.connect(self.server_address)
#         self.receive_messages()

#     def send_message(self):
#         message = self.message_entry.get()
#         self.socket.sendall(message.encode())
#         self.messages_listbox.insert(tk.END, "You: " + message)
#         self.message_entry.delete(0, tk.END)

#     def receive_messages(self):
#         while True:
#             message = self.socket.recv(1024).decode()
#             self.messages_listbox.insert(tk.END, "Server: " + message)

# if __name__ == "__main__":
#     root = tk.Tk()
#     client = ChatClient(root)
#     root.mainloop()














import socket
import tkinter as tk

class ChatClient:
    def __init__(self, master):
        self.master = master
        self.master.title("Chat Client")
        self.messages_listbox = tk.Listbox(self.master, height=15, width=50)
        self.messages_listbox.pack(side=tk.TOP, padx=10, pady=10)
        self.message_entry = tk.Entry(self.master, width=50)
        self.message_entry.pack(side=tk.LEFT, padx=10, pady=10)
        self.send_button = tk.Button(self.master, text="Send", command=self.send_message)
        self.send_button.pack(side=tk.LEFT, padx=10, pady=10)
        self.server_address = ("localhost", 6666)
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self.socket.connect(self.server_address)
        self.receive_messages()

    def send_message(self):
        message = self.message_entry.get()
        self.socket.sendall(message.encode())
        self.messages_listbox.insert(tk.END, "You: " + message)
        self.message_entry.delete(0, tk.END)

    def receive_messages(self):
        while True:
            message = self.socket.recv(1024).decode()
            self.messages_listbox.insert(tk.END, "Server: " + message)

if __name__ == "__main__":
    root = tk.Tk()
    client = ChatClient(root)
    root.mainloop()