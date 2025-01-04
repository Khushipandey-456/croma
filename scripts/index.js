let slideIndex=0;
function slides(){
    let slide=document.getElementsByClassName("slide");
    

    for(let i = 0; i < slide.length;i++){
        slide[i].style.display="none";
    }
slideIndex++
  if(slideIndex>slide.length){
    slideIndex=1;
  }slide[slideIndex-1].style.display="block";
  
  setTimeout( slides(),2000);
}
function plusSlides(n) {
    slideIndex += n;
    let slides = document.getElementsByClassName("slide");
  
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex - 1].style.display = "block";
  }
slides()
  
