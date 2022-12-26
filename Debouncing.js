// Debouncing is also important for interview perspective
// user ne kuch type kiya lkn apka function kuch time baad chala

let counter = 0
function getData(){
    console.log("Fetching Data" + counter++) // Jitni bar type kraha hu utni bar function call horaha ha
}


function mydebounce(callBack, d){
    let timer;
    return function(...args){
        // Below condition :- agr user ne 1 second se pehle phr kuch type krna start krdia tu time clear krdo 
        if (timer)  clearTimeout(timer);
            setTimeout(() => {
                callBack();
            }, d);
            
        }
    }
    const BetterFunction = mydebounce(getData, 1000);
