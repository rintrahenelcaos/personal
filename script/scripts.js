// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  //if ((document.body.scrollTop > 8 && document.body.scrollTop <= 16) || (document.documentElement.scrollTop > 8 && document.documentElement.scrollTop <= 16)) 
  //{
  //  document.getElementById("navbar").style.paddingTop = "0.5vh ";
  //  document.getElementById("navbar").style.paddingBottom = "0.5vh";
  //  document.getElementById("navbar").style.height = "5vh";
  //  document.getElementById("navbar").style.transition = "1.5s";
  //  document.getElementById("logo").style.fontSize = "3vh";
  //  document.getElementById("cont2").style.color = "lightgrey";
  //  document.getElementById("cont2").style.transition = "3s";
  //  document.getElementById("cont2").style.marginTop = "10vh";
  //  
  //} 

  if ((document.body.scrollTop > 8) || (document.documentElement.scrollTop > 8)) 
  { 
        

        if ((document.body.scrollTop > 500) || (document.documentElement.scrollTop > 500))
        {
            document.getElementById("cont2").style.color = "#3E3E3E";
            document.getElementById("cont2").style.transition = "3s";
            document.getElementById("cont2").style.marginTop = "10vh";
            document.getElementById("navbar").style.paddingTop = "0.5vh ";
            document.getElementById("navbar").style.paddingBottom = "0.5vh";
            document.getElementById("navbar").style.height = "5vh";
            document.getElementById("navbar").style.backgroundColor ="black"
            document.getElementById("navbar").style.transition = "1s";
            document.getElementById("navbar").style.color = "white";
            document.getElementById("logo").style.fontSize = "3vh";
            document.getElementById("logo").style.color = "white";
          }
        else 
        {
    
            document.getElementById("cont2").style.color = "lightgrey";
            document.getElementById("cont2").style.transition = "3s";
            document.getElementById("cont2").style.marginTop = "10vh"; 
            document.getElementById("navbar").style.paddingTop = "0.5vh ";
            document.getElementById("navbar").style.paddingBottom = "0.5vh";
            document.getElementById("navbar").style.height = "5vh";
            document.getElementById("navbar").style.backgroundColor ="black"
            document.getElementById("navbar").style.transition = "1s";
            
            document.getElementById("logo").style.color = "white";
            document.getElementById("logo").style.fontSize = "3vh"; 
        }
        
  }
  //else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
  //{
  //  //document.getElementById("navbar").style.paddingTop = "0.5vh ";
  //  //document.getElementById("navbar").style.paddingBottom = "0.5vh";
  //  //document.getElementById("navbar").style.height = "5vh";
  //  //document.getElementById("navbar").style.transition = "1.5s";
  //  //document.getElementById("logo").style.fontSize = "3vh";
  //  document.getElementById("cont2").style.color = "#3E3E3E";
  //  document.getElementById("cont2").style.transition = "3s";
  //  document.getElementById("cont2").style.marginTop = "40vh";
  //}
/*
  if ((document.body.scrollTop > 8 ) || (document.documentElement.scrollTop > 8 )) 
  {
    document.getElementById("navbar").style.paddingTop = "0.5vh ";
    document.getElementById("navbar").style.paddingBottom = "0.5vh";
    document.getElementById("navbar").style.height = "5vh";
    document.getElementById("navbar").style.transition = "1.5s";
    document.getElementById("logo").style.fontSize = "3vh";
    document.getElementById("cont2").style.color = "lightgrey";
    document.getElementById("cont2").style.transition = "3s";
    document.getElementById("cont2").style.marginTop = "10vh";
    
  } 
  */
  else {
    document.getElementById("navbar").style.paddingTop = "40vh ";
    //document.getElementById("navbar").style.paddingBottom = "30em ";
    document.getElementById("navbar").style.height = "100vh";
    document.getElementById("navbar").style.backgroundColor ="transparent" 
    //document.getElementById("navbar").style.background= "images/Linkedin-Backgrounds-28-1400-x-425.jpg"
    document.getElementById("logo").style.fontSize = "10vh";
    document.getElementById("logo").style.color = "black";
    document.getElementById("cont2").style.color = "#3E3E3E";
    document.getElementById("cont2").style.transition = "3s";
    document.getElementById("cont2").style.marginTop = "40vh"; 
  }
}



