// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {
    document.getElementById("navbar").style.paddingTop = "0.5vh ";
    document.getElementById("navbar").style.paddingBottom = "0.5vh";
    document.getElementById("navbar").style.height = "5vh";
    document.getElementById("navbar").style.transition = "1.5s";
    document.getElementById("logo").style.fontSize = "3vh";
    document.getElementById("cont2").style.color = "lightgrey";
    document.getElementById("cont2").style.transition = "3s";
    document.getElementById("cont2").style.marginTop = "10vh";
    
  } else {
    document.getElementById("navbar").style.paddingTop = "40vh ";
    //document.getElementById("navbar").style.paddingBottom = "30em ";
    document.getElementById("navbar").style.height = "100vh"; 
    document.getElementById("logo").style.fontSize = "10vh";
    document.getElementById("cont2").style.color = "#3E3E3E";
    document.getElementById("cont2").style.transition = "1s";
    document.getElementById("cont2").style.marginTop = "40vh"; 
  }
}
