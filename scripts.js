const toggleButton= document.getElementsByClassName('nav-btn')[0]
const navbarLinks= document.getElementsByClassName('navlinks')[0]

toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')
})


// Swiper Slide on Home Page
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween:90,
    slidesPerView: "auto",
    loop:true,
    autoplay: {
        delay: 6000,
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 2,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

// Change color buttons on Home Page
function changeColor1(){
    document.getElementById("circle").style.backgroundColor ="#aee1e1";
    document.getElementById("explore-btn").style.backgroundColor ="#aee1e1";
}
function changeColor2(){
    document.getElementById("circle").style.backgroundColor ="#fcd1d1";
    document.getElementById("explore-btn").style.backgroundColor ="#fcd1d1";
}
function changeColor3(){
    document.getElementById("circle").style.backgroundColor ="#FDEC96";
    document.getElementById("explore-btn").style.backgroundColor ="#FDEC96";
}
function changeColor4(){
    document.getElementById("circle").style.backgroundColor ="#C5D2EF";
    document.getElementById("explore-btn").style.backgroundColor ="#C5D2EF";
}
function changeColor5(){
    document.getElementById("circle").style.backgroundColor ="#FFB7B2";
    document.getElementById("explore-btn").style.backgroundColor ="#FFB7B2";
}
function changeColor6(){
    document.getElementById("circle").style.backgroundColor ="#8be28b";
    document.getElementById("explore-btn").style.backgroundColor ="#8be28b";
}

