const nav = document.getElementById("links");
const burger = document.getElementById("burger");
const cross = document.getElementById("cross");
const cv = document.getElementById("button-cv");

/* Open */
function openNav() {
    nav.style.height = "100%";
    // burger.style.display = "none";
    // cross.style.display = "block";

  }
  
/* Close */
function closeNav() {
    nav.style.height = "0%";
    // burger.style.display = "block";
    // cross.style.display = "none";

}

// window.onscroll = function(){
//   scrollFunction();
// };

// function scrollFunction(){
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("navbar").style.padding = "30px 10px";
//     // document.getElementById("icone-site").style.fontSize = "25px";
//   } else {
//     document.getElementById("navbar").style.padding = "80px 10px";
//     // document.getElementById("icone-site").style.height = "70px";
//     // document.getElementById("icone-site").style.width = "90px";
//   }
// }



