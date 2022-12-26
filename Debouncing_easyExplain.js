//******************* */ Debouncing ******************

// Most useful concept for performance optimization by limtting function calls on different events (typing events, scroll event, on other keyboard / mouse events)
// Very common frontend interview question

// keyup event , input event, change event

// Debounce is a Decorator function; we can say that if we want to enchance our function functionality but didn't change the code so we used the decorator(function) and also return the function ;

// Debouncing :- We want that if user has typed something then after the 1 or 2 second your function will be called; In this case we used debouncing

// const myInput = document.getElementById("input-event");
// console.log(myInput);

// Decorator function takes function and return function;
function Decorator(func){
    return function(){
        console.log("You are calling Decorated ", func.name,"function");
        func();
    }
}
function Hello(){ // Hamne code change kiya bina iski functionality ko enhanced krdiya
    console.log("Hello World");
}
// Decorator() function ma ak function return kiya tu DecoratedHello ak function hoga
const DecoratedHello =  Decorator(Hello);
DecoratedHello(); // Decorator function jo function return kraha ha wo ham store karenge DecoratedHello ma

// function findSuggestion(e){
//     // e.target -->> iska matab ha ye element konse event pr trigger hua ha 
//     console.log("Suggestion For ", e.target.value)
// }

// myInput.addEventListener("input", findSuggestion);