const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// Navbar background on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if(window.scrollY > 50){
    header.style.background = "#0f172a";
    header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  }else{
    header.style.background = "#111827";
    header.style.boxShadow = "none";
  }
});