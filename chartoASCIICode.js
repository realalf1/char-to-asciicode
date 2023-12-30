const characters = "<h1> Hello World </h1>"
const length = characters.length

// for(let i=1; i<=length; i++){
//     console.log(i)
// }

const converted = [];

for(let i=0; i<length; i++){
    converted.push(converted.charCodeAt(i));
}

console.log(converted.join(", "))

// eval(String.fromCharCode(converted))
