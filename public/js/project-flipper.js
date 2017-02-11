var projectNodes = document.getElementById("projects");
var flippers = projectNodes.querySelectorAll(".flip-container");
function checkScrollForFlip(e){
  console.log(window.scrollY);
  i = 0;
  flippers.forEach(function(element){
    i ++;
    var elementTopEdge = element.getBoundingClientRect().top + window.scrollY;
    console.log("element " + i + " " + elementTopEdge);
    var isApproaching = window.scrollY > (elementTopEdge -175);
    if (window.innerWidth < 992){
      element.classList.remove('flip-container-desktop');
        if (isApproaching){        
         element.classList.add('hover');
        } else {
          element.classList.remove('hover');
        }
        } else {
          element.classList.add('flip-container-desktop');      }})
}
window.addEventListener('scroll', checkScrollForFlip);
window.addEventListener('resize', checkScrollForFlip);

