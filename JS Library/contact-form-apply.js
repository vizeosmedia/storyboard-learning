var contactbtn = document.getElementById('submit-button');
      
document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault();

   contactbtn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tq5vn2f';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      contactbtn.value = 'Send Email';
      alert('Your message has been received, thank you! An account manager will reach out to you shortly.');
    }, (err) => {
      contactbtn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});