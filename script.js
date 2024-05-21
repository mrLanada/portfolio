/******************** toggle icon navbar **************/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

// menuIcon.onClick = () => {
//   menuIcon.classList.toggle('fa-xmark');
//   navbar.classList.toggle('active');
// }
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
})

/****************** scroll section active link**************/

// let sections = document.querySelector('section');
// let navLinks = document.querySelector('header nav a');

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach.apply(links => {
//         links.classList.remove('active');
//         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//       });
//     };
//   });
/****************** scroll section active link**************/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
    };
  });



  /******************** sticky navbar **************/

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  /******************** remove toggle icon and navbar **************/

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

/******************** scroll reveal **************/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

/******************** typed js **************/
const typed = new Typed('.multiple-text', {
  strings: ['Student','Hard Working'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
}); 


/******************** Resume download  **************/
document.getElementById("downloadcv").addEventListener("click", function() {
    // Replace 'path_to_resume.pdf' with the path to your resume file
    const resumePath = 'Bhushankumar_Dattatray_Khade_Updated.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/******************** Submit contact form **************/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // You can perform validation here if needed

    // Example: Output the form data to the console
    console.log("Full Name: " + fullName);
    console.log("Email Address: " + email);
    console.log("Mobile Number: " + phoneNumber);
    console.log("Email Subject: " + subject);
    console.log("Message: " + message);

    // Here you can send the form data to your server using AJAX or any other method
    // For now, let's assume the data is just logged to the console
});
