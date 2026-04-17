---
layout: page
title: Prognos
description: Robô médico autônomo com ROS, C++ e navegação hospitalar.
img: assets/img/projects/prognos/prognos1.jpeg
importance: 1
---

<div class="project-story-intro">
  <p class="project-story-lead">
    O <strong>Prognos</strong> e uma plataforma robotica medica pensada para operar em ambientes
    hospitalares com autonomia, previsibilidade e capacidade de decisao em tempo real. O foco tecnico
    esta na combinacao entre <strong>ROS</strong>, <strong>C++</strong>, navegacao indoor e integracao
    robusta entre software e eletronica embarcada.
  </p>
</div>

## Missao do sistema

<div class="project-story-grid">
  <div class="project-story-copy">
    <p>
      Em um contexto hospitalar, mobilidade autonoma nao e apenas deslocamento: envolve seguranca,
      leitura de ambiente, previsibilidade e confianca operacional. O Prognos foi pensado para cumprir
      esse papel com uma arquitetura modular e observavel.
    </p>
    <p>
      A pagina agora fica preparada para contar essa historia com imagens de robotica, contexto
      hospitalar, arquitetura ROS e sensores, sem depender apenas de uma galeria no final.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/prognos/prognos1.jpeg"
      alt="Placeholder hero do Prognos"
      caption="Slot principal para foto do robo medico ou render da plataforma."
      zoomable=true
    %}
  </div>
</div>

## Arquitetura ROS e navegacao

<div class="project-story-grid project-story-grid--reverse">
  <div class="project-story-copy">
    <ul>
      <li>Arquitetura baseada em <strong>ROS</strong> para modularizacao dos nos e integracao de sensores.</li>
      <li>Desenvolvimento em <strong>C++</strong> com foco em desempenho e previsibilidade.</li>
      <li>Pipeline de navegacao para ambientes internos com percepcao do entorno e resposta a eventos.</li>
    </ul>
    <!-- <p>
      O slot abaixo foi reservado para um diagrama ou print do grafo ROS, porque esse tipo de imagem
      explica muito rapido a organizacao do sistema.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/prognos/ros-architecture.svg"
      alt="Placeholder de arquitetura ROS do Prognos"
      caption="Slot reservado para o grafo ROS ou arquitetura de software."
      zoomable=true
    %}
  </div>
</div> -->

## Sensores, ambiente e impacto

<div class="project-story-grid">
  <div class="project-story-copy">
    <p>
      Em termos de impacto tecnico, o Prognos consolidou experiencia em middleware robotico, integracao
      hardware-software e navegacao em ambiente interno. Tambem serviu como base para discussoes de
      usabilidade, operacao assistida e seguranca em ambientes sensiveis.
    </p>
    <p>
      A recomendacao visual para esta pagina e incluir fotos do robo em corredor, testes de navegacao e
      qualquer cena que reforce o contexto hospitalar.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/prognos/prognos2.jpeg"
      alt="Placeholder de contexto hospitalar do Prognos"
      caption="Slot reservado para imagem do robo em ambiente real."
      zoomable=true
    %}
  </div>
</div>

## Galeria do projeto

<div class="project-gallery">
  {% include project-media-panel.liquid
    path="assets/img/projects/prognos/prognos1.jpeg"
    alt="Hero do Prognos"
    caption="Vista principal do robo."
    compact=true
    zoomable=true
  %}
  {% include project-media-panel.liquid
    path="assets/img/projects/prognos/prognos2.jpeg"
    alt="Arquitetura ROS do Prognos"
    caption="Robo em ambiente real."
    compact=true
    zoomable=true
  %}
  {% include project-media-panel.liquid
    path="assets/img/projects/prognos/Prognos3.jpeg"
    alt="Stack de sensores do Prognos"
    caption="Slot para sensores e percepcao embarcada."
    compact=true
    zoomable=true
  %}
</div>

## Video do projeto

{% include project-video-panel.liquid
  title="Navegacao e demonstracao"
  description="Aqui vale muito um video curto do robô navegando, desviando de obstaculos ou apresentando a stack ROS."
  asset_hint="assets/video/projects/prognos/videoprognos.mp4"
%}

## Tecnologias e competencias aplicadas

<div class="project-chip-list">
  <span class="project-chip">ROS</span>
  <span class="project-chip">C++</span>
  <span class="project-chip">Robotica medica</span>
  <span class="project-chip">Navegacao indoor</span>
  <span class="project-chip">Sensores</span>
  <span class="project-chip">Autonomia</span>
  <span class="project-chip">Integracao embarcada</span>
</div>
