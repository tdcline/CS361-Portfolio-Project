import socket

# Adapted socket code from https://docs.python.org/3/howto/sockets.html and https://realpython.com/python-sockets/ 
# Create a socket object using the socket constructor
server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# Bind to localhost on port 8345
host, port = "localhost", 8345
server_socket.bind((host,port))
# The server then listens for a connection, accepting connections from outside
server_socket.listen(2)
connection, address = server_socket.accept()

while True:
    # Loop to get new birthdays from client, receiving, decoding, and formatting
    response = connection.recv(4096).decode()
    # If the client request to quit, exit the loop
    if response == "/q":
        break
    # Otherwise, parse the birthday from birthdate
    month = response[0:2]
    day = response[3:5]
    # Make MMDD int for easy parsing
    monthday = int(month + day)
    # Assign sun sign
    sunsign = ''
    if monthday < 121:      sunsign = 'Capricorn' 
    elif monthday < 219:    sunsign = 'Aquarius'
    elif monthday < 321:    sunsign = 'Pisces'
    elif monthday < 420:    sunsign = 'Aries'
    elif monthday < 521:    sunsign = 'Taurus'
    elif monthday < 621:    sunsign = 'Gemini'
    elif monthday < 723:    sunsign = 'Cancer'
    elif monthday < 823:    sunsign = 'Leo'
    elif monthday < 923:    sunsign = 'Virgo'
    elif monthday < 1023:   sunsign = 'Libra'
    elif monthday < 1122:   sunsign = 'Scorpio'
    elif monthday < 1221:   sunsign = 'Sagittarius'
    else:                   sunsign = 'Capricorn'

    # The server encodes the sun sign and sends back to the client
    connection.send(sunsign.encode())

# Close the connection and server socket
connection.close
server_socket.close