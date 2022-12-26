//                 Enhanced Debouncing

const Myinput = document.querySelector(".myInput");
const MyBtn = document.querySelector(".btn");

// Trailing Debouncing
function Debounce(func, delay){
    let timeoutID;
    return function(...args){ // Jitne marzi arguments lega; Jahan se function return horaha ha wahan ke environment variables ko apne sath lekr return hoga 
        console.log("Clearing Timeout ID");
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            func.call(this, ...args);
        }, delay);
    }
}

function printValue(e){
    console.log(e.target.value);
}

// Leading Debouncing
function LeadingDebouncing(func2, delay2){
    let timeoutID = null;
    return function(...args){  // Jitne marzi arguments lega; Jahan se function return horaha ha wahan ke environment variables ko apne sath lekr return hoga 
        if(timeoutID === null){
            func2.call(this,...args);
        }
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            timeoutID = null;
        }, delay2);
    }
}

const debouncedPrintValue = Debounce(printValue, 1000);

function ClickME(){
    console.log("Added to cart");
}
Myinput.addEventListener("input", debouncedPrintValue);
// MyBtn.addEventListener("click", LeadingDebouncing(ClickME, 500)); 

// Leading + Trailing Debouncing

function DualDebounceFunc(func, delay, option = {leading: false, trailing: true})
{ // Kuyn ke agr ma koi option provide na karo tu By-default ye leading: false ho aur trailing: true ho;
    let timeoutID = null;
    return function(...args){  
        let isInvoked = false;
        if(timeoutID === null && option.leading){
            func.call(this,...args);
            isInvoked = true;
        }        
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => {
            if(option.trailing && !isInvoked){
                func.call(this, ...args);
            }
            timeoutID = null;
        }, delay);
    }
    
}
MyBtn.addEventListener("click", DualDebounceFunc(ClickME, 500)); 
