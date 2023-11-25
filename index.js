window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.hamburger').classList.toggle('is-active');
  });
  document.querySelector('.accordion-heading-1').setAttribute('tabindex', 22);
  document.querySelector('.accordion-heading-2').setAttribute('tabindex', 23);
  document.querySelector('.accordion-heading-3').setAttribute('tabindex', 24);
  document.querySelector('.accordion-heading-4').setAttribute('tabindex', 25);
  document.querySelector('.accordion-heading-5').setAttribute('tabindex', 26);
  document.querySelector('.swiper-slide-1').removeAttribute('tabindex');
  document.querySelector('.swiper-slide-2').removeAttribute('tabindex');
  document.querySelector('.swiper-slide-3').removeAttribute('tabindex');
  function changeCheckbox(event) {
    let item = document.getElementById('agreement');
    switch(item.getAttribute('aria-checked')) {
        case "true":
            item.setAttribute('aria-checked', "false");
            break;
        case "false":
            item.setAttribute('aria-checked', "true");
            break;
    }
}
})


$( "#accordion").accordion();

$( ".faq-accordion" ).accordion({
  icons: false,
});


var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
  loop: true,
  onlyExternal: true,
  
  pagination: {
    el: '.swiper-pagination',
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.querySelector('form').addEventListener('success', (e) => {
  const el = e.target.closest('.form-container').querySelector('.form-success');
  el.classList.remove('form-success_hide');
});

document.querySelector('.form-success__btn').addEventListener('click', (e) => {
  form.reset();
  e.target.closest('.form-container').querySelector('.form-success').classList.add('form-success_hide');
});

// 'form' - selector
const form = new ItcSubmitForm('form', {
  isCheckValidationOnClient: true, // проверять форму перед отправкой на сервер
  attachMaxItems: 5, // максимальное количество файлов, которые можно добавить к форме
  attachMaxFileSize: 512, // 512 Кбайт - максимальный размер файла
  attachExt: ['jpg', 'jpeg', 'bmp', 'gif', 'png'] // допустимые расширения файлов
});