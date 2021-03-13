const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.fromTo("nav", {opacity:0}, {opacity:1, duration: 2.5});
tl.fromTo(".first-description", {opacity:0}, {opacity:1, duration: 1.5}, "-=1");
tl.fromTo(".third-description",{opacity:0}, {opacity:1, duration: 1});
tl.fromTo(".second-description",{opacity:0}, {opacity:1, duration: 1}, "-=1.5");






$(document).ready(function() {
   
    $(window).scroll(function () { 
  
      console.log($(window).scrollTop());
  
      if ($(window).scrollTop() < 400) {        
        $('#nav_div_one').addClass('fixed-top');
        

      }
      if ($(window).scrollTop() > 401) {        
        $('#nav_div_one').removeClass('fixed-top');
       

      }       
    });
  });

