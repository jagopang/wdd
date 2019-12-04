
window.onscroll = function() {scrollColor();};
function scrollColor() {
      if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
         document.getElementById('sidebar').classList.add("changePurple")
         document.getElementById('sidebar').classList.remove("changeWhite")
      }
      else {
        document.getElementById('sidebar').classList.remove("changePurple")
        document.getElementById('sidebar').classList.add("changeWhite")
      }
   };
   ScrollReveal().reveal(".row", {
     delay: 1000,
     distance: "2%",
     duration: 1000,
     origin: "top",
     easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
     viewFactor: 0.9
   });


   ScrollReveal().reveal("#jago", {
     delay: 100,
     distance: "2%",
     origin: "top",
     duration: 1000,
     opacity: 0,
     easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
   });
