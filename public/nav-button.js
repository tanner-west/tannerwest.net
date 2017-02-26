
var burger = document.getElementById("hamburger");
var navDiv = document.getElementById("nav");
burger.addEventListener('click', function(){
if (navDiv.classList.contains('invisible')){
navDiv.classList.remove('invisible');
} else {
navDiv.classList.add('invisible');
}
});