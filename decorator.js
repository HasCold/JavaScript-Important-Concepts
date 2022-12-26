//                    Decorator Function

// Debounce/Decorator function takes function , delay time and return function

// In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).

// Same like as a "Closures" :- Matlab Jab function kisi aur function se return hota ha tu apne sath jo uske local memory ke variables ha unko sath leke return hota ha Just like below :-

function Debounce(func, delay){
    let timeoutID; // undefined variable
    return function(...args){
        if(timeoutID){
        console.log("Clearing Time Out");
            clearTimeout(timeoutID); // so the previous timeoutID is removed by this method 
        }
        timeoutID = setTimeout(() => {           
            func.call(this,...args);
        }, delay);
    }
}

const myInput = document.getElementById("input-event");
// Is function ki functionality ko enhanced krskta hu decorator ko use krke jis ka name ha debounce  
function findSuggestion(e){ 
        // e.target -->> iska matab ha ye element konse event pr trigger hua ha 
        console.log("Suggestion For ", e.target.value)
    }

const DecoratorFindSuggestion = Debounce(findSuggestion, 1000); // Debounce function jo function return kraha ha wo ham store karenge DecoratorFindSuggestion ma
    
    myInput.addEventListener("input", DecoratorFindSuggestion);

    // Further Explanation in the NoteBook 