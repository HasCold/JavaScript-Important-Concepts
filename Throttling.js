// ********************* Throttling function in JavaScript ********************

// Throttling or sometimes is also called throttle function is a practice used in website

// Throttle is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately


// Advantages of throttling

// 1. It prevents frequent calling of the function
// 2. It makes the website faster and controls the rate at which a particular function is called

// Throttle function also takes input as a function , delay time and return the function with enchanced functionality ; Same like a Debouncing

const MyBtn = document.querySelector(".btn");
function Throttle(func, delay){
    let prev = 0;
    return function(){
        let now = new Date().getTime();
        if(now - prev > delay){
            prev = now;
            func;
        }        
    }
}

const ThrottleClickfunc = Throttle(()=>{
    console.log(`Click`);
}, 1000);
MyBtn.addEventListener("click", ThrottleClickfunc)
