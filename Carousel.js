// images = 4 (0,1,2,3)

let show = 0;
let slides = document.getElementsByClassName("slide");

function controller(x){
    show = show + x;
    slideshow(show);
    // left
    // flag = 2 + (-1) // = 1
    
    // right
    // flag = 2 + 1 // = 3
}
function slideshow(num){
    for (const y of slides) {
        y.style.display = "none";
    }
    if (num === -1) {
    slides[num+4].style.display = "block";
    }
    else if(num === 4){
    slides[num-4].style.display = "block";
    }
        slides[num].style.display = "block";

}
