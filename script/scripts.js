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

  if ((document.body.scrollTop > 16) || (document.documentElement.scrollTop > 16)) 
  { 
        

        if ((document.body.scrollTop > 420) || (document.documentElement.scrollTop > 420))
        {   
            //document.getElementById("cont3").style.color = "lightgray";
            //document.getElementById("cont3-content").style.visibility = "visible";
            //document.getElementById("cont3-content").style.opacity = "1";
            //document.getElementById("cont3").style.transition = "2s";
            //document.getElementById("cont3-content").style.transition = "3s"
            //document.getElementByClassName("contains_image").style.transition = "3s";
            document.getElementById("cont3-content").style.opacity = "1";
            document.getElementById("cont3-content").style.transition = "2s";
            document.getElementById("title").style.opacity = "1";
            document.getElementById("title").style.transition = "2s";

            document.getElementById("cont2").style.color = "transparent";
            document.getElementById("cont2").style.marginTop = "5vh";
            document.getElementById("cont2").style.transition = "3s";

            document.getElementById("navbar").style.paddingTop = "0vh ";
            document.getElementById("navbar").style.paddingBottom = "0.5vh";
            document.getElementById("navbar").style.height = "8vh";
            document.getElementById("navbar").style.transition = "1s";
            document.getElementById("navbar").style.color = "white";
            document.getElementById("navbar").style.backgroundColor = "transparent"

            document.getElementById("navbar-background").style.opacity = "0";
            document.getElementById("navbar-background").style.transition = "1s";

            document.getElementById("navbar-content").style.backgroundColor ="black";
            document.getElementById("navbar-content").style.transition = "2s";

            document.getElementById("navitem").style.display = "visible";


            document.getElementById("logo").style.fontSize = "2rem";
            document.getElementById("logo").style.color = "white";
            
            
          }
        else if ((document.body.scrollTop > 800) || (document.documentElement.scrollTop > 800))
        {   
            //document.getElementById("cont3").style.color = "transparent";
            //document.getElementById("cont3-content").style.visibility = "hidden";
            //document.getElementById("cont3-content").style.opacity = "0";
            document.getElementById("cont3-content").style.transition = "2s";
            document.getElementById("cont3-content").style.opacity = "0";
            document.getElementById("title").style.opacity = "0";
            document.getElementById("title").style.transition = "2s";


            document.getElementById("cont2").style.color = "transparent";
            document.getElementById("cont2").style.marginTop = "5vh";
            document.getElementById("cont2").style.transition = "3s";

            document.getElementById("navbar").style.paddingTop = "0vh ";
            document.getElementById("navbar").style.paddingBottom = "0.5vh";
            document.getElementById("navbar").style.height = "8vh";
            document.getElementById("navbar").style.backgroundColor = "transparent"
            
            
            document.getElementById("navbar").style.color = "white";
            document.getElementById("navbar-background").style.opacity = "0";
            document.getElementById("navbar-background").style.transition = "1s";

            document.getElementById("navitem").style.display = "visible";

            document.getElementById("navbar-content").style.backgroundColor ="black";
            document.getElementById("navbar-content").style.transition = "2s";

            document.getElementById("logo").style.fontSize = "2rem";
            document.getElementById("logo").style.color = "white";
            document.getElementById("navbar").style.transition = "1s";
            document.getElementById("cont2").style.transition = "3s";
          }
        else 
        {
            //document.getElementById("cont3").style.color = "transparent";
            //document.getElementById("cont3-content").style.visibility = "hidden";
            //document.getElementById("cont3-content").style.opacity = "0";
            document.getElementById("cont3-content").style.transition = "2s";
            document.getElementById("cont3-content").style.opacity = "0";
            document.getElementById("title").style.opacity = "0";
            document.getElementById("title").style.transition = "2s";

            document.getElementById("cont2").style.color = "lightgrey";
            document.getElementById("cont2").style.marginTop = "5vh";
            
            document.getElementById("cont2").style.marginTop = "5vh"; 
            document.getElementById("navbar").style.paddingTop = "0vh ";
            document.getElementById("navbar").style.paddingBottom = "0.5vh";
            document.getElementById("navbar").style.height = "8vh";
            document.getElementById("navbar").style.backgroundColor = "transparent"
            
            
            document.getElementById("navbar-background").style.opacity = "0";
            document.getElementById("navbar-background").style.transition = "1s";

            document.getElementById("navbar-content").style.backgroundColor ="black";
            document.getElementById("navbar-content").style.transition = "2s";

            document.getElementById("navitem").style.display = "visible";


            document.getElementById("logo").style.color = "white";
            document.getElementById("logo").style.fontSize = "2rem";
            document.getElementById("navbar").style.transition = "1s"; 
            document.getElementById("cont2").style.transition = "3s";
        }
        
  }
  
  else {

    //document.getElementById("cont3").style.color = "transparent";
    //document.getElementById("cont3-content").style.visibility = "hidden";
    //document.getElementById("cont3-content").style.opacity = "0";
    document.getElementById("cont3-content").style.transition = "2s";
    document.getElementById("cont3-content").style.opacity = "0";
    document.getElementById("title").style.opacity = "0";
    document.getElementById("title").style.transition = "2s";

    document.getElementById("navbar").style.paddingTop = "0vh ";
    //document.getElementById("navbar").style.paddingBottom = "30em ";
    document.getElementById("navbar").style.height = "100vh";
    document.getElementById("navbar").style.backgroundColor = "black"

    document.getElementById("navbar-content").style.backgroundColor ="transparent" ;
    document.getElementById("navbar-content").style.transition = "2s";

    document.getElementById("navbar-background").style.opacity = "0.5";
    document.getElementById("navbar-background").style.transition = "1s";

    document.getElementById("logo").style.fontSize = "6rem";
    document.getElementById("logo").style.color = "lightgrey";
    document.getElementById("cont2").style.color = "transparent";
    document.getElementById("cont2").style.transition = "3s";
    document.getElementById("cont2").style.marginTop = "10vh"; 
  }
}



