/*Slideshow Images Stuff*/
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


var slideIndex = 0;
var noneDisplayed = true;
var previous = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

showSlidesImproved();
    //setInterval does not run anything on a different thread. It schedules something to run at certain times provided the JS runtime is idle at that time.
setInterval(showSlidesImproved,5000);
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
 
//Function and code for toggling images by clicking the dot
$(".dot:nth-child(1)").on("click",function() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     } 
     for (var i = 0; i < dots.length; i++) {
         dots[i].className = "dot";
     }
     slides[0].style.display = "block";  
     dots[0].className += " active";
     slideIndex = 1;
});
$(".dot:nth-child(2)").on("click",function() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     } 
     for (var i = 0; i < dots.length; i++) {
         dots[i].className = "dot";
     }
     slides[1].style.display = "block";  
     dots[1].className += " active";
     slideIndex = 2; 
});
$(".dot:nth-child(3)").on("click",function() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     } 
     for (var i = 0; i < dots.length; i++) {
         dots[i].className = "dot";
     }
     slides[2].style.display = "block";  
     dots[2].className += " active";
     slideIndex = 3; 
});
$(".dot:nth-child(4)").on("click", function() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     } 
     for (var i = 0; i < dots.length; i++) {
         dots[i].className = "dot";
     }
     slides[3].style.display = "block";  
     dots[3].className += " active";
     slideIndex = 4; 
});










