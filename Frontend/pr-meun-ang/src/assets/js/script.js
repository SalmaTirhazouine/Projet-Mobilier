
document.addEventListener("DOMContentLoaded", function () {
const preloader = document.querySelector("[data-preload]");
if (preloader) {
window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});
}

// Reste de votre code...
});
const addEventOnElements=function(element,eventType,callback){
  for(let i=0,leng=element.length;i<leng;i++){
    element[i].addEventListener(eventType,callback);
  }
}
const navbar=document.querySelector("[data-navbar]");
const navToggler=document.querySelectorAll("[data-nav-toggler]");
const overlay=document.querySelector("[data-overlay]");

const toggleNavbar=function(){
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");;
  document.body.classList.toggle("nav-active");
}
addEventOnElements(navToggler,"click",toggleNavbar);

const header=document.querySelector("[data-header]");
const backTopBtn=document.querySelector("[data-back-top-btn]");
let lastScroll=0;
const hideHeader=function(){
  const isScrollBottom=lastScroll<window.scrollY;
  if(isScrollBottom){
    header.classList.add("hide");
  }else{
    header.classList.remove("hide");
  }
  lastScroll=window.scrollY;
}
window.addEventListener("scroll",function(){
  if(this.window.scrollY>=50){
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  }else{
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
const mainSlider=document.querySelector("[data-main-slider]");
const mainSliderItems=document.querySelectorAll("[data-main-slider-item]");
const mainSliderPrevBtn=document.querySelector("[data-prev-btn]");
const mainSliderNextBtn=document.querySelector("[data-next-btn]");
let currentSlidePosition=0;
let lastActiveSlider=mainSliderItems[0];
const updateSliderPosition=function(){
  lastActiveSlider.classList.remove("active");
  mainSliderItems[currentSlidePosition].classList.add("active");
  lastActiveSlider=mainSliderItems[currentSlidePosition];
}
const nextSlider=function(){
  if(currentSlidePosition>=mainSliderItems.length-1){
    currentSlidePosition=0;
  }else{
    currentSlidePosition++;
  }
  updateSliderPosition();
}
mainSliderNextBtn.addEventListener("click",nextSlider);
const prevSlider=function(){
  if(currentSlidePosition<=0){
    currentSlidePosition=mainSliderItems.length-1;
  }else{
    currentSlidePosition--;
  }
  updateSliderPosition();
}
mainSliderPrevBtn.addEventListener("click",prevSlider);
const autoSlider=function(){
  autoSlideInterval=setInterval(function(){
    nextSlider();
  },7000);
}
addEventOnElements([mainSliderNextBtn,mainSliderPrevBtn],"mouseover",function(){
  clearInterval(autoSlideInterval);
});
addEventOnElements([mainSliderNextBtn,mainSliderPrevBtn],"mouseout",autoSlider);
window.addEventListener("load",autoSlider);

const parallaxItems=document.querySelectorAll("[data-parallax-item]");
let x,y;
window.addEventListener("mousemove",function(event){
  x=(event.clientX/window.innerWidth*10)-5;
  y=(event.clientY/window.innerHeight*10)-5;
  x=x-(x*2);y=y-(y*2);
  for(let i=0,len=parallaxItems.length;i<len;i++){
    x=x*Number(parallaxItems[i].dataset.parallaxSpeed);
    y=y*Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform=`translate3d(${x}px,${y}px,0px)`;
  }
});
const btnEl = document.getElementById('btnEl');

const cardEl = document.getElementById('card');
const overlayEl = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
btnEl.addEventListener('click', () => {
  cardEl.classList.add('active');
  overlayEl.classList.add('active');
});

// Ajouter un gestionnaire d'événements pour le clic sur la croix
closeBtn.addEventListener('click', () => {
  cardEl.classList.remove('active');
  overlayEl.classList.remove('active');
});

// Ajouter un gestionnaire d'événements pour le clic sur l'overlay
overlayEl.addEventListener('click', () => {
  cardEl.classList.remove('active');
  overlayEl.classList.remove('active');
});





document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const response = await fetch('/admin/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
          email: email,
          password: password
      })
  });

  if (response.ok) {
      window.location.href = '/homeadmin'; // Redirection en cas de succès
  } else {
      const errorText = await response.text();
      alert(errorText); // Affichage d'un message d'erreur
  }
});
