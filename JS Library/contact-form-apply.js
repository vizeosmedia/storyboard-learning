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

// SWIPER JS INIT
const swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    spaceBetween: 45,
    effect: "fade",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // INSIGHTS DROPDOWN MENU

const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
const select = dropdown.querySelector('.select');
const caret = dropdown.querySelector('.caret');
const menu = dropdown.querySelector('.menu');
const options = dropdown.querySelectorAll('.menu li');
const selected = dropdown.querySelector('.selected');


select.addEventListener('click', () => {
console.log("hello");
select.classList.toggle('select-clicked');
caret.classList.toggle('caret-rotate');
menu.classList.toggle('menu-open');
});

options.forEach(option => {
option.addEventListener('click', () => {
selected.innerText = option.innerText;
select.classList.remove('select-clicked');
caret.classList.remove('caret-rotate');
menu.classList.remove('menu-open');
options.forEach(option => {
option.classList.remove('active');
});
option.classList.add('active');
});
});

});
