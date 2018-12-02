/*SLIESHOW IMAGE STUFF*/
                                            /*<------- Naive SlideShow Algorithm   ---------->*/
var slideIndex = 0;
function showSlidesNaive() {
    //Obtain div containers containing the images and dots.This is where we manipulate the images and dot indicators
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    //Reset previous divs for images and dots such so that the previous image/dot is set to default so that the next image/dot will be able show up on the caurosel. 
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
    setTimeout(showSlidesNaive, 3000); 
}


                                         /*<------- Optimized SlideShow Algorithm   ---------->*/
var slideIndex = 0;
var noneDisplayed = true;
var previous = 0;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
showSlidesImproved();
    //setInterval does not run anything on a different thread. It schedules something to run at certain times provided the JS runtime is idle at that time.
setInterval(showSlidesImproved,5000);
    // Signicantly reduced overhead and reduced memory usage. We no longer have recursion and "stack overflow" hazard. Eliminated the for-loops and fine-tuned algorithm so that it is faster than the previous one. In terms of Big-O, this would be O(1) while the previous algorithm's run time would depend on the size of the array of images. 
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

                                            /*<------ *DRY Code for Toggling between Dots ------>*/
                /*Eliminated redundancies by incorporating the use of the evt object. We can use eventObject.target.id to obtain the exact dot that was clicked */
var element = document.getElementById("dot1");
console.log(typeof element.id);
$(".dot").on("click",function(evt) {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
     } 
     for (var i = 0; i < dots.length; i++) {
         dots[i].className = "dot";
     }
     if (evt.target.id === "dot1") {
        slides[0].style.display = "block";  
        dots[0].className += " active";
        slideIndex = 1;
     } else if(evt.target.id === "dot2") {
        slides[1].style.display = "block";  
        dots[1].className += " active";
        slideIndex = 2;
     } else if( evt.target.id === "dot3") {
        slides[2].style.display = "block";  
        dots[2].className += " active";
        slideIndex = 3; 
     } else if (evt.target.id === "dot4") {
        slides[3].style.display = "block";  
        dots[3].className += " active";
        slideIndex = 4; 
     }
});
/*SLIDESHOW IMAGE STUFF END */

/*Testimonial Fade in and Out*/











