// Script to generate Zodiac Info


let params = new URLSearchParams(document.location.search);
let date = params.get('userDate');

// format date to abide by microservice instructions
date = date.slice(-5, -3) + "/" + date.slice(-2) + "/" + date.slice(0, 4);

let zodiac;

// Websocket information adapted from https://linuxhint.com/how-to-implement-a-websocket-in-python/
const socket = new WebSocket('ws://localhost:8000');

socket.onopen = (event) => { socket.send(date); }
socket.onmessage = (event) => { 
    
    zodiac = event.data;

    const sign = document.createTextNode(zodiac);
    const div = document.getElementById('zName');
    div.appendChild(sign);

    const img = document.createElement('img');
    img.setAttribute("src", "./zodiacImages/" + zodiac + ".png");
    document.getElementById('zImg').appendChild(img);

    const desc = document.createTextNode(getDescription(zodiac));
    document.getElementById('zDesc').appendChild(desc);

    }

const contactServer = () => {
    socket.send("Initialize");
}

// Zodiac descriptions
// All zodiac descriptions taken from wikipedia.com

let description;

function getDescription(sign) {
  if (sign == "Aries") {
    return getAries();
  }
  else if (sign == "Taurus") {
    return getTaurus();
  }
  else if (sign == "Gemini") {
    return getGemini();
  }
  else if (sign == "Cancer") {
    return getCancer();
  }
  else if (sign == "Leo") {
    return getLeo();
  }
  else if (sign == "Virgo") {
    return getVirgo();
  }
  else if (sign == "Libra") {
    return getLibra();
  }
  else if (sign == "Scorpio") {
    return getScorpio();
  }
  else if (sign == "Sagittarius") {
    return getSagittarius();
  }
  else if (sign == "Capricorn") {
    return getCapricorn();
  }
  else if (sign == "Aquarius") {
    return getAquarius();
  }
  else {
    return getPisces();
  }
}

function getAries() {
  description = "Aries is the first astrological sign in the zodiac, and \
  originates from the Aries constellation. Under the tropical zodiac, the \
  Sun transits this sign from approximately March 21 to April 19 each year.";
  return description;
}

function getTaurus() {
  description = "Taurus is the second astrological sign in the modern zodiac. \
  The Sun transits this sign from approximately April 20 until May 20 in \
  western astrology.";
  return description;
}

function getGemini() {
  description = "Gemini is the third astrological sign in the zodiac. Under \
  the tropical zodiac, the sun transits this sign between about May 21 to \
  June 21.";
  return description;
}

function getCancer() {
  description = "Cancer is the fourth astrological sign in the zodiac, \
  originating from the constellation of Cancer. Under the tropical zodiac, \
  the Sun transits this area between approximately June 22 and July 22.";
  return description;
}

function getLeo() {
  description = "Leo is the fifth sign of the zodiac. The traditional Western \
  zodiac associates Leo with the period between about July 23 and August 22.";
  return description;
}

function getVirgo() {
  description = "Virgo is the sixth astrological sign in the zodiac. Under \
  the tropical zodiac, the Sun transits this area, on average, between August \
  23 and September 22.";
  return description;
}

function getLibra() {
  description = "Libra is the seventh astrological sign in the zodiac. The \
  Sun transits this sign on average between September 22 and October 23.";
  return description;
}

function getScorpio() {
  description = "Scorpio is the eighth astrological sign in the zodiac, \
  originating from the constellation of Scorpius. Under the tropical zodiac, \
  the Sun transits this sign on average from October 23 to November 21.";
  return description;
}

function getSagittarius() {
  description = "Sagittarius is the ninth astrological sign, which is \
  associated with the constellation Sagittarius. Under the tropical zodiac, \
  the sun transits this sign between approximately November 22 and December 21.";
  return description;
}

function getCapricorn() {
  description = "Capricorn is the tenth astrological sign in the zodiac \
  originating from the constellation of Capricornus, the goat. Under the \
  tropical zodiac, the sun transits this area from about December 22 to \
  January 19.";
  return description;
}

function getAquarius() {
  description = "Aquarius is the eleventh astrological sign in the zodiac, \
  originating from the constellation Aquarius. Under the tropical zodiac, the \
  Sun is in the Aquarius sign between about January 20 and about February 18.";
  return description;
}

function getPisces() {
  description = "Pisces is the twelfth and final astrological sign in the \
  zodiac. Under the tropical zodiac, the sun transits this area between February \
  19 and March 20.";
  return description;
}