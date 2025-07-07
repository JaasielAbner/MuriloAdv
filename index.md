---
layout: default
title: Início
description: Escritório de advocacia especializado em soluções jurídicas ágeis, desbloqueio bancário e atendimento personalizado em Joinville e online para todo o Brasil.
css: "index.css"
---

<!-- Hero Section -->
<section class="hero fade-in">
  <div class="hero-overlay">
    <h1 class="hero-title fade-in">Representação jurídica com experiência, ética e resultados</h1>
    <p class="hero-subtitle fade-in delay-1">Soluções legais personalizadas para proteger você e o que mais importa</p>
    <a href="https://wa.me/5547997441694" target="_blank" class="hero-cta wpp-btn fade-in delay-2">
      <span class="wpp-icon" aria-hidden="true">
        <img src="{{ '/assets/img/whatsapp.svg' | relative_url }}" alt="WhatsApp">
      </span>
      Fale com o escritório
    </a>
  </div>
</section>
<!-- Sinais de confiança e diferenciais -->
<section class="why-choose fade-in delay-1">
  <h2>Por que escolher Murilo Ramos?</h2>
  <div class="trust-signals-list">
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-experience.svg' | relative_url }}" alt="Experiência">
      <span>8+ anos de experiência</span>
    </div>
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-success.svg' | relative_url }}" alt="Atendimento personalizado">
      <span>Atendimento personalizado</span>
    </div>
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-oab.svg' | relative_url }}" alt="OAB">
      <span>Membro ativo da OAB/SC</span>
    </div>
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-presencial-online.svg' | relative_url }}" alt="Atendimento presencial e online">
      <span>Atendimento presencial e online</span>
    </div>
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-clarity.svg' | relative_url }}" alt="Clareza e objetividade">
      <span>Clareza e objetividade</span>
    </div>
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-solutions.svg' | relative_url }}" alt="Foco em soluções práticas e seguras">
      <span>Foco em soluções práticas e seguras</span>
    </div>
    <div class="trust-item">
      <img src="{{ '/assets/img/badge-empathy.svg' | relative_url }}" alt="Empatia e respeito ao cliente">
      <span>Empatia e respeito ao cliente</span>
    </div>
  </div>
</section>

<!-- Botão flutuante do WhatsApp -->
<a href="https://wa.me/5547997441694" class="whatsapp-float fade-in delay-2" target="_blank" aria-label="WhatsApp">
  <img src="{{ '/assets/img/whatsapp.svg' | relative_url }}" alt="WhatsApp">
</a>

<!-- Slide-up popup WhatsApp -->
<div class="whatsapp-popup" id="whatsappPopup">
  <button class="close-popup" id="closePopup" aria-label="Fechar">×</button>
  <div class="popup-content">
    <p>Precisa de atendimento rápido?</p>
    <a href="https://wa.me/5547997441694" target="_blank" class="popup-whatsapp-btn">
      Fale conosco no WhatsApp
    </a>
  </div>
</div>

<script>
// WhatsApp popup slide-up
(function() {
  var popup = document.getElementById('whatsappPopup');
  var closeBtn = document.getElementById('closePopup');
  if (popup && closeBtn) {
    setTimeout(function() { popup.classList.add('show'); }, 2500);
    closeBtn.onclick = function() { popup.classList.remove('show'); };
  }
})();
</script>
