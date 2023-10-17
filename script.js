let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true


});

sr.reveal('.logo', {delay:200, origin:'left'});
sr.reveal('.navbar', {delay:400, origin:'top'});
sr.reveal('.menu-btn', {delay:520, origin:'right'});

sr.reveal('.home-text span', {delay:600, origin:'top'});
sr.reveal('.home-text h1', {delay:680, origin:'left'});
sr.reveal('.home-text p', {delay:750, origin:'right'});
sr.reveal('.main-btn', {delay:860, origin:'left'});

sr.reveal('.share', {delay:950, origin:'bottom'});

sr.reveal('.home-img', {delay:1000, origin:'right'});



//GET THE BUTTON
//let mybutton = document.getElementById("gotop");

//when user scrolls down 20px from the top document, show the button

//window.onscroll = function()
//{scrollFunction()};

//function scrollFunction(){
  //  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //    mybutton.style.display = "block";
  //  } else {
  //      mybutton.style.display = "none";
  //      }

//}


// when the user clicks on the button, scroll to the top of the document

//function topFunction() {
  //  document.body.scrollTop = o;
  //  document.documentElement.scrollTop = 0;
  //  }