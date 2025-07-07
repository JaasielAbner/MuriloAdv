---
layout: default
title: Áreas de Atuação
description: Conheça as áreas de atuação do escritório Murilo Ramos Advocacia.
permalink: /areas/
css: "areas.css"
---

<section class="practice-areas">
  <h2>Áreas de Atuação</h2>
  <div class="areas-horizontal">
    <div class="areas-list">
      <div class="area-item" data-area="trabalhista" tabindex="0">
        <i class="bi bi-briefcase-fill area-icon"></i>
        <span>Direito Trabalhista</span>
      </div>
      <div class="area-item" data-area="civil" tabindex="0">
        <i class="bi bi-file-earmark-text-fill area-icon"></i>
        <span>Direito Cível</span>
      </div>
      <div class="area-item" data-area="familia" tabindex="0">
        <i class="bi bi-people-fill area-icon"></i>
        <span>Direito de Família</span>
      </div>
      <div class="area-item" data-area="consumidor" tabindex="0">
        <i class="bi bi-cart-check-fill area-icon"></i>
        <span>Direito do Consumidor</span>
      </div>
      <div class="area-item" data-area="imobiliario" tabindex="0">
        <i class="bi bi-house-door-fill area-icon"></i>
        <span>Direito Imobiliário</span>
      </div>
      <div class="area-item" data-area="bancario" tabindex="0">
        <i class="bi bi-bank area-icon"></i>
        <span>Direito Bancário</span>
      </div>
    </div>
    <div class="area-info-panel" id="areaInfoPanel">
      <div class="area-info-content" id="areaInfoContent">
        <h3>Selecione uma área para saber mais</h3>
        <p>Clique ou toque em uma área de atuação para ver detalhes e exemplos de atuação do escritório.</p>
      </div>
    </div>
  </div>
</section>

<script>
const areaDetails = {
  trabalhista: {
    title: 'Direito Trabalhista',
    desc: 'Atuação em rescisão, verbas trabalhistas, defesa de empregadores e empregados, assédio, FGTS, férias, horas extras e direitos sindicais.',
    extras: '<ul><li>Reclamações e defesas trabalhistas</li><li>Negociação de acordos</li><li>Assessoria para empresas e empregados</li></ul>'
  },
  civil: {
    title: 'Direito Cível',
    desc: 'Contratos, indenizações, responsabilidade civil, cobranças, execuções, ações possessórias, danos morais e materiais.',
    extras: '<ul><li>Elaboração e revisão de contratos</li><li>Ações de cobrança e execuções</li><li>Defesa em ações indenizatórias</li></ul>'
  },
  familia: {
    title: 'Direito de Família',
    desc: 'Divórcio, guarda, pensão alimentícia, inventário, partilha de bens, união estável, adoção.',
    extras: '<ul><li>Divórcios e partilhas</li><li>Regulamentação de guarda e visitas</li><li>Inventários e adoções</li></ul>'
  },
  consumidor: {
    title: 'Direito do Consumidor',
    desc: 'Defesa do consumidor em compras, contratos, cobranças indevidas, vícios de produto ou serviço, negativação indevida e ações contra bancos e empresas.',
    extras: '<ul><li>Ações contra bancos e empresas</li><li>Reparação por cobranças indevidas</li><li>Defesa em contratos de consumo</li></ul>'
  },
  imobiliario: {
    title: 'Direito Imobiliário',
    desc: 'Regularização de imóveis, contratos de compra e venda, locação, usucapião, condomínio, distrato, financiamento e litígios imobiliários.',
    extras: '<ul><li>Usucapião e regularização</li><li>Contratos de locação e compra/venda</li><li>Defesa em litígios imobiliários</li></ul>'
  },
  bancario: {
    title: 'Direito Bancário',
    desc: 'Contratos bancários, revisão de juros, cobranças abusivas, defesa contra instituições financeiras, financiamentos e empréstimos.',
    extras: '<ul><li>Revisão de contratos e juros</li><li>Defesa contra cobranças abusivas</li><li>Negociação de dívidas bancárias</li></ul>'
  }
};

const items = document.querySelectorAll('.area-item');
const infoPanel = document.getElementById('areaInfoPanel');
const infoContent = document.getElementById('areaInfoContent');

items.forEach(item => {
  item.addEventListener('click', function() {
    const area = item.getAttribute('data-area');
    if (areaDetails[area]) {
      infoContent.innerHTML = `<h3>${areaDetails[area].title}</h3><p>${areaDetails[area].desc}</p>${areaDetails[area].extras}`;
    }
    items.forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
  });
  item.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      item.click();
    }
  });
});
</script>
