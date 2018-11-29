/*Slideshow Images Stuff*/
var slideIndex = 0;
function showSlidesNaive() {
    //Obtain div containers containing the images and dots.This is where we manipulate the images and dot indicators
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    //Reset previous divs for images and dots such so that the previous image/dot is set to default so that the next image/dot will be able show up on the slider. 
    for (var i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    //If dots contain the 'active' classname, remove it.  
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = "dot";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    //Executes a function, after waiting a specified number of mili Change image every 4 seconds
    setTimeout(showSlidesNaive, 4000); 
}

var noneDisplayed = true;
var previous = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
showSlidesImproved();
setInterval(showSlidesImproved,3000);
// Signicantly reduced overhead. We no longer have recursion. Eliminated the for-loops and fine-tuned algorithm so that we have a Big O(1) time complexity. 
function showSlidesImproved() { 
    if (noneDisplayed === true) {
        noneDisplayed = false;
    } else {
        previous = slideIndex-1;
        slides[previous].style.display = "none";     
        dots[previous].className = "dot";
    }   
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}





