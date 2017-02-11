  window.addEventListener('scroll', function(){

    if (window.scrollY > 0){
      document.getElementById("nav-row").classList.add("scrolled");
    } else {
    document.getElementById("nav-row").classList.remove("scrolled");
    }
    })