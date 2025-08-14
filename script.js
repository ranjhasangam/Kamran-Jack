// Initialize EmailJS with your public key
(function(){
  emailjs.init("pTQYreVULSlzzGykq"); // 🔹 Replace with your EmailJS Public Key
})();

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Send form data using EmailJS
  emailjs.send("service_8w9imr8", "template_gaqjlji", { // 🔹 Replace with your Service ID & Template ID
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    contact_number: document.getElementById('contact_number').value,
    address: document.getElementById('address').value,
    instagram_handle: document.getElementById('instagram_handle').value,
    message: document.getElementById('message').value
  })
  .then(function(response) {
    alert("✅ Message sent successfully!");
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert("❌ Failed to send message. Please try again.");
  });
});
