const axios = require('axios') 
var base64 = require('base-64'); 

axios.get('https://www.hackthebox.eu/badge/157828')
.then((response) => {
    decoding(response.data)
}) 
.catch((error) => {
    console.log(error)
})

const decoding = (data) => {
    var encoded = data
    var splitted = data.split("\"")
    var decoded = base64.decode(splitted[1])
    var arrayOfSpan = decoded.split("</span>")
        .map(splitPart => {
        const wordsInPart = splitPart.split('>');
        return wordsInPart[wordsInPart.length - 1];
        });
    console.log(arrayOfSpan[0]) // Username
    console.log(arrayOfSpan[1]) // Rank
    console.log(arrayOfSpan[2]) // Leaderboard Position
    // console.log(arrayOfSpan[3]) // Points
    // console.log(arrayOfSpan[4]) // Respect
}