// JS específico para a landing de desbloqueio
// Microinterações, animações, carrossel de depoimentos, destaque WhatsApp, fade-in on scroll

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17323574068/gIglCL6vjewaELSGw8RA',
      'event_callback': callback
  });
  return false;
}
// Adiciona o evento de clique ao botão WhatsApp
document.querySelectorAll('.wpp-btn').forEach(btn => {
  btn.addEventListener('click', function() {
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Fade-in/slide-up animado ao rolar
  const fadeEls = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.15 });
  fadeEls.forEach(el => observer.observe(el));

  // Destaque animado no botão WhatsApp
  const wppBtns = document.querySelectorAll('.wpp-btn');
  wppBtns.forEach(btn => {
    btn.classList.add('pulse');
    btn.addEventListener('mouseenter', () => btn.classList.add('shake'));
    btn.addEventListener('mouseleave', () => btn.classList.remove('shake'));
    btn.addEventListener('click', () => {
      btn.classList.add('clicked');
      gtag_report_conversion('https://wa.me/5547997441694?text=Ol%C3%A1%2C+gostaria+de+ajuda+com+desbloqueio+de+conta+banc%C3%A1ria');
      setTimeout(() => btn.classList.remove('clicked'), 400);
    });
  });

  // Carrossel de depoimentos
  const depoimentos = document.querySelectorAll('.depoimentos blockquote');
  if (depoimentos.length > 1) {
    let idx = 0;
    setInterval(() => {
      depoimentos[idx].classList.remove('active');
      idx = (idx + 1) % depoimentos.length;
      depoimentos[idx].classList.add('active');
    }, 4200);
    depoimentos[0].classList.add('active');
  }

  // Destaque badges ao hover
  document.querySelectorAll('.badges-list img, .provas-badges img').forEach(img => {
    img.addEventListener('mouseenter', () => img.classList.add('badge-hover'));
    img.addEventListener('mouseleave', () => img.classList.remove('badge-hover'));
  });
});
