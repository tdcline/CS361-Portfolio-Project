#!/usr/bin/env python
import asyncio
import websockets
import socket

# created new socket connection with Microservice
client_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client_socket.connect(("localhost",8345))

# websocket serverside creation adapted from 
# https://linuxhint.com/how-to-implement-a-websocket-in-python/
async def hello(websocket):
  date = await websocket.recv()
 

  client_message = date
  client_socket.send(client_message.encode())
  zodiacSign = client_socket.recv(4096).decode()

  await websocket.send(zodiacSign)



async def main():
  async with websockets.serve(hello, "localhost", 8000):
    await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())