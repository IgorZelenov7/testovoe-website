// SLIDER

$(document).ready(function () {
  const $slider = $('.hero-slides-container');
  const $dots = $('.hero-dots .dot');

  $slider.slick({
    infinite: true,
    speed: 400,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    dots: false,
    slidesToShow: 1,
  });

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    const slideIndex = nextSlide % $dots.length;
    $dots.removeClass('active');
    $dots.eq(slideIndex).addClass('active');
  });

  $dots.removeClass('active');
  $dots.eq($slider.slick('slickCurrentSlide')).addClass('active');

  $dots.click(function () {
    const index = $(this).index();
    $slider.slick('slickGoTo', index);
  });

  $('.slider-left').click(function () {
    $slider.slick('slickPrev');
  });

  $('.slider-right').click(function () {
    $slider.slick('slickNext');
  });
});

// MODAL

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openFormBtn');
  const modal = document.getElementById('contactFormModal');
  const closeBtn = document.getElementById('closeFormBtn');
  const form = document.getElementById('contactForm');

  openBtn.addEventListener('click', () => {
    modal.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
  });

  modal.addEventListener('mousedown', (e) => {
    if (e.target === modal) modal.classList.remove('show');
  });

  function phoneInputHandler(e) {
    let x = e.target.value.replace(/\D/g, '').substring(0, 10);
    let formatted = '+7 ';
    if (x.length > 0) formatted += '(' + x.substring(0, 3);
    if (x.length >= 4) formatted += ') ' + x.substring(3, 6);
    if (x.length >= 7) formatted += '-' + x.substring(6, 8);
    if (x.length >= 9) formatted += '-' + x.substring(8, 10);
    e.target.value = formatted;
  }

  function bindPhoneMask() {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
      phoneInput.addEventListener('input', phoneInputHandler);
    }
  }
  bindPhoneMask();

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.innerHTML = `
      <div class="geo-modal__success-text">Ваша заявка успешно отправлена.</div>
      <button class="geo-modal__success-btn" id="successCloseBtn">Закрыть</button>
    `;
    document.getElementById('successCloseBtn').onclick = () => modal.classList.remove('show');
  });
});

// SCROLL

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.hero-left__btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const deliveryBlock = document.getElementById('delivery-conditions');
      if (deliveryBlock) {
        deliveryBlock.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
