const jwt = require('jwt-simple')

const mySecret = "afj239823u9843w189sj"

const token = "eyJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjoiWW91IEdvdCBUaGlzISA8MyJ9.ffRDp9RX5pLycpcQbIrg2l9BGM0xQC8Z2Pd90QeO40E"

const message = jwt.decode(token, mySecret).message

console.log((message))

if(message.constructor == String){
    console.log( "Great Work")
} else {
    console.log( "Not finished yet...")
}