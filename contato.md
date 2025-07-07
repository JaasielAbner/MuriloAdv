---
layout: default
title: Contato
description: Entre em contato com o escritório Murilo Ramos Advocacia.
permalink: /contato/
css: "contato.css"
---

<section class="contact fade-in">
  <h2 class="fade-in">Contato</h2>
  <a class="wpp-btn fade-in delay-1" href="https://wa.me/5547997441694?text=Ol%C3%A1%2C+gostaria+de+atendimento+jur%C3%ADdico" target="_blank" rel="noopener" aria-label="Fale agora no WhatsApp">
    <span class="wpp-icon" aria-hidden="true">
      <img src="{{ '/assets/img/whatsapp.svg' | relative_url }}" alt="WhatsApp">
    </span>
    Fale agora no WhatsApp <span class="badge-imediato">Atendimento imediato</span>
  </a>
  <div class="contact-info fade-in delay-2">
    <p><strong>WhatsApp:</strong> <a href="https://wa.me/5547997441694" target="_blank" rel="noopener">(47) 99744-1694</a></p>
    <p><strong>Email:</strong> <a href="mailto:murilo.ramos.adv@gmail.com">murilo.ramos.adv@gmail.com</a></p>
    <p><strong>Endereço:</strong> Rua Guaíra, 527 - fundos, casa 2, Sala 6 - Iririú, Joinville - SC, 89227-477</p>
  </div>
  <form class="contact-form fade-in delay-2" id="contact-form">
    <input type="text" name="name" placeholder="Nome" required autocomplete="name">
    <input type="email" name="email" placeholder="E-mail" required autocomplete="email">
    <input type="tel" name="phone" placeholder="Telefone" autocomplete="tel">
    <textarea name="message" placeholder="Mensagem" required></textarea>
    <button type="submit">Enviar</button>
  </form>
</section>
