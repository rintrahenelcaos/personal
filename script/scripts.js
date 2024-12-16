


// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size


window.onscroll = function() {mediachanger()};

// Create a MediaQueryList object
//const mmObj = window.matchMedia("(max-width: 600px)")

// Call the match function at run time
//mediaQuerysFunction(mmObj);

// Add the match function as a listener for state changes
//mmObj.addEventListener("change", function() {
//  mediaQuerysFunction(mmObj);
//});



//function mediaQuerysFunction(){
//  if (x.matches) {
//    window.onscroll = function() {scrollFunction()};
//  } else {
//    window.onscroll = function() {dummyScrollFunction()}
//  }
//}

function mediachanger(){
    var w = parseInt(window.innerWidth);

    if (w <= 768) {
      dummyScrollFunction();
    }
    else {
      scrollFunction()
    }
}

function dummyScrollFunction(){}
        
function scrollFunction() {

    //var h = parseInt(window.innerHeight);
    

    var docheight;
    var bodyheight;

    var bodyheight = document.body.scrollHeight;
    var docheight = document.documentElement.scrollHeight;
  
  

  if ((document.body.scrollTop > 0.035*bodyheight) || (document.documentElement.scrollTop > 0.035*docheight)) 
  { 
           

        if ((document.body.scrollTop > 0.2*bodyheight) || (document.documentElement.scrollTop > 0.2*docheight))
        {   
            
            document.getElementById("cont3-content").style.opacity = "1";
            document.getElementById("cont3-content").style.transition = "2s";
            document.getElementById("title").style.opacity = "1";
            document.getElementById("title").style.transition = "2s";

            document.getElementById("cont2").style.color = "transparent";
            document.getElementById("cont2").style.marginTop = "4rem";
            document.getElementById("cont2").style.transition = "3s";
            document.getElementById("cont2").style.paddingTop = "20rem";
            document.getElementById("about-me-h3").style.color = "transparent";
            document.getElementById("toolkit").style.opacity = "0";

            document.getElementById("navbar").style.paddingTop = "0vh ";
            document.getElementById("navbar").style.paddingBottom = "0.25rem";
            document.getElementById("navbar").style.height = "5rem";
            document.getElementById("navbar").style.transition = "1s";
            document.getElementById("navbar").style.color = "white";
            document.getElementById("navbar").style.backgroundColor = "transparent"

            document.getElementById("navbar-background").style.opacity = "0";
            document.getElementById("navbar-background").style.transition = "1s";

            document.getElementById("navbar-content").style.backgroundColor ="black";
            document.getElementById("navbar-content").style.transition = "2s";

            document.getElementById("navbar-right").style.float = "right";
            document.getElementById("navbar-right").style.paddingBottom = "7rem";

            //document.getElementById("intermediate_navbar").style.paddingBottom = "7rem";
            //document.getElementById("intermediate_navbar").style.flexDirection = "row";
            //document.getElementById("intermediate_navbar").style.paddingBottom = "2rem";

            document.getElementById("introduction").style.color = "transparent";
            //document.getElementById("introduction").style.height = "0rem";


            document.getElementById("logo").style.fontSize = "2rem";
            document.getElementById("logo").style.color = "white";

            document.getElementById("navbar-right").style.fontSize = "1.1rem";
            
            
          }
        else if ((document.body.scrollTop > 800) || (document.documentElement.scrollTop > 800))
        {   
            
            document.getElementById("cont3-content").style.transition = "2s";
            document.getElementById("cont3-content").style.opacity = "0";
            document.getElementById("title").style.opacity = "0";
            document.getElementById("title").style.transition = "2s";


            document.getElementById("cont2").style.color = "transparent";
            document.getElementById("cont2").style.marginTop = "4rem";
            document.getElementById("cont2").style.transition = "3s";
            document.getElementById("cont2").style.paddingTop = "20rem";
            document.getElementById("about-me-h3").style.color = "transparent";
            document.getElementById("toolkit").style.opacity = "0";

            document.getElementById("navbar").style.paddingTop = "0vh ";
            document.getElementById("navbar").style.paddingBottom = "0.25rem";
            document.getElementById("navbar").style.height = "5rem";
            document.getElementById("navbar").style.backgroundColor = "transparent"
            document.getElementById("navbar").style.color = "white";

            document.getElementById("navbar-background").style.opacity = "0";
            document.getElementById("navbar-background").style.transition = "1s";

            document.getElementById("navitem").style.display = "visible";

            document.getElementById("navbar-content").style.backgroundColor ="black";
            document.getElementById("navbar-content").style.transition = "2s";

            document.getElementById("navbar-right").style.paddingBottom = "7rem";
            
            //document.getElementById("intermediate_navbar").style.paddingBottom = "7rem";
            //document.getElementById("intermediate_navbar").style.flexDirection = "row";
            //document.getElementById("intermediate_navbar").style.paddingBottom = "2rem";

            document.getElementById("introduction").style.color = "transparent";
            //document.getElementById("introduction").style.height = "0rem";


            document.getElementById("logo").style.fontSize = "2rem";
            document.getElementById("logo").style.color = "white";

            document.getElementById("navbar-right").style.fontSize = "1.1rem";

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
            document.getElementById("cont2").style.paddingTop = "20rem";
            document.getElementById("cont2").style.marginTop = "4rem"; 
            document.getElementById("about-me-h3").style.color = "#00FF77";
            document.getElementById("toolkit").style.opacity = "1";
            

            document.getElementById("navbar").style.paddingTop = "0vh ";
            document.getElementById("navbar").style.paddingBottom = "0.25rem";
            document.getElementById("navbar").style.height = "5rem";
            document.getElementById("navbar").style.backgroundColor = "transparent";
            
            
            document.getElementById("navbar-background").style.opacity = "0";
            document.getElementById("navbar-background").style.transition = "1s";

            document.getElementById("navbar-content").style.backgroundColor ="black";
            document.getElementById("navbar-content").style.transition = "2s";

            document.getElementById("navbar-right").style.paddingBottom = "7rem";

            //document.getElementById("intermediate_navbar").style.paddingBottom = "7rem";
            //document.getElementById("intermediate_navbar").style.flexDirection = "row";
            //document.getElementById("intermediate_navbar").style.paddingBottom = "2rem";

            document.getElementById("introduction").style.color = "transparent";
            //document.getElementById("introduction").style.height = "0rem";


            document.getElementById("navitem").style.display = "visible";


            document.getElementById("logo").style.color = "white";
            document.getElementById("logo").style.fontSize = "2rem";

            document.getElementById("navbar-right").style.fontSize = "1.1rem";

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

    document.getElementById("navbar").style.paddingTop = "0rem ";
    //document.getElementById("navbar").style.paddingBottom = "30em ";
    document.getElementById("navbar").style.height = "100vh";
    document.getElementById("navbar").style.backgroundColor = "black"

    document.getElementById("navbar-content").style.backgroundColor ="transparent" ;
    document.getElementById("navbar-content").style.transition = "2s";

    document.getElementById("navbar-background").style.opacity = "0.5";
    document.getElementById("navbar-background").style.transition = "1s";

    document.getElementById("navbar-right").style.paddingBottom = "0rem";

    //document.getElementById("intermediate_navbar").style.paddingBottom = "2rem";
    //document.getElementById("intermediate_navbar").style.flexDirection = "column";

    document.getElementById("introduction").style.color = "lightgrey";
    //document.getElementById("introduction").style.height = "fit-content";


    document.getElementById("logo").style.fontSize = "3.5rem";
    document.getElementById("logo").style.color = "lightgrey";

    document.getElementById("navbar-right").style.fontSize = "1.3rem";

    document.getElementById("cont2").style.color = "transparent";
    document.getElementById("cont2").style.transition = "3s";
    document.getElementById("cont2").style.marginTop = "6rem"; 
    document.getElementById("cont2").style.paddingTop = "25rem";
    document.getElementById("toolkit").style.opacity = "0";
  }
}



