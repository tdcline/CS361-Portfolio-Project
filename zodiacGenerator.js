// Script to generate Zodiac Info 

let params = new URLSearchParams(document.location.search);
let date = params.get('userDate');

// format date to abide by microservice instructions
date = date.slice(-5, -3) + "/" + date.slice(-2) + "/" + date.slice(0, 4);

let zodiac = "";

// Websocket information adapted from https://linuxhint.com/how-to-implement-a-websocket-in-python/
const socket = new WebSocket('ws://localhost:8000');

socket.onopen = (event) => { socket.send(date); }
socket.onmessage = (event) => { 
    const sign = document.createTextNode(event.data);
    const div = document.getElementById('theOne');
    div.appendChild(sign);
    }

const contactServer = () => {
    socket.send("Initialize");
}

