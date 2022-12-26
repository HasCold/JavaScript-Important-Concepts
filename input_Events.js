//                                     Input Events

// keyup event , input event, change event

const myInput = document.getElementById("input-event");
console.log(myInput);

// keyup ->> jab ma finger release karunga key se tu word print hoga
// input -->> jab mane key press ki tab hi print hoga; So input event is recommended to use
// change -->> jab ma search bar se focus out karunga tu print karega change

myInput.addEventListener("input", function(e){
    // myInput ke pas ak value ha jis se ham type print krwaskte ha
    console.log(e.target.value); 
    // e.target -->> iska matab ha ye element konse event pr trigger hua ha 
    
    // Browser hame normal element ki form ma dekhata jabke ye object hi ha; e is a myInput object
    
    // this -->> ki value window object hoti ha JavaScript ma tu ma arrow function ke bajae normal function use karunga agr ma this ko myinput ke equal krna chahta hu
    
})
