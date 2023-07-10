// revealing effect
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  reveals.forEach((reveal) => {
    var windowHeight = window.innerHeight;
    var elementTop = reveal.getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveal.classList.add("active");
    } else {
      reveal.classList.remove("active");
    }
  });
}
window.addEventListener('scroll', reveal);


// let callName = document.getElementById('callDataName')
// let callNumber = document.getElementById('callDataNumber')
function callDataSend(){
  event.preventDefault();
alert(`Thank you for showing interest, We will call you within 24 hours! ☺`);  
}