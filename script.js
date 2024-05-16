//Preloader 
const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}

// Clothing video play---------->
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll('.men-vd');

  videos.forEach(video => {
    video.addEventListener('mouseover', function () {
      video.play();
    });

    video.addEventListener('mouseout', function () {
      video.pause();
      video.currentTime = 0;
    });
  });
});

// ---------------ScrollUp------------
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}






