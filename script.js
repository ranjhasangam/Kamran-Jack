document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById('name').value,
    from_email: document.getElementById('email').value,
    message: document.getElementById('message').value
  })
  .then(function(response) {
    alert("Message sent successfully!");
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert("Failed to send message. Please try again.");
  });
});
