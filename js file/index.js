var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".navlinks");
var links = document.querySelectorAll(".navlinks li"); // Select all li elements

togglebtn.addEventListener("click", function() {
    this.classList.toggle("click");
    nav.classList.toggle("open");  
});

// Typed.js initialization with correct syntax (ensure Typed.js is included)
var typed = new Typed(".input3", {
    strings: ["FULLSTACK DEVELOPER", "FRONT END DEVELOPER", "BACKEND DEVELOPER", "JAVA DEVELOPER", "WEB DEVELOPER", "APP DEVELOPER"],
    typeSpeed: 70,  
    backSpeed: 55,   
    loop: true
});
//for contact information to your mail//
(function() {
    emailjs.init("4e1G_MSTVJ0SXu7fd"); // Your user ID from EmailJS dashboard
})();

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    emailjs.sendForm('service_9sgxos6', 'template_lgk1fnx', this)
        .then(function() {
            alert('Email sent successfully!');
        }, function(error) {
            alert('Failed to send email: ' + JSON.stringify(error));
        });
});