---
layout: page
title: Elmo 2.0
description: Firmware crítico para suporte respiratório com validação funcional e registro no INPI.
img: assets/img/projects/elmo/hero.jpg
importance: 4
---

<div class="project-story-intro">
  <p class="project-story-lead">
    O <strong>Elmo 2.0</strong> foi um projeto de <strong>software embarcado aplicado à saúde</strong>,
    concebido como evolução de uma tecnologia cearense de suporte respiratório não invasivo. Minha
    atuação esteve concentrada em <strong>firmware crítico</strong>, <strong>aquisição confiável de
    dados</strong> e <strong>integração com sensores médicos</strong>, em um contexto que exigia alta
    previsibilidade operacional, tolerância a falhas e rigor de validação.
  </p>
</div>

## Contexto e desafio

<div class="project-story-grid">
  <div class="project-story-copy">
    <p>
      O projeto partiu da necessidade de ampliar a capacidade de monitoramento do sistema ELMO por meio
      da incorporacao de sensores, alertas e processamento local de dados, apoiando equipes de saude no
      acompanhamento do paciente e na coleta estruturada de informacoes relevantes para uso assistencial
      e de pesquisa.
    </p>
    <p>
      Em termos de engenharia, isso significou trabalhar em uma base embarcada com requisitos proximos
      aos de sistemas criticos: leitura robusta de sinais, tratamento de excecoes, comportamento
      deterministico, organizacao do fluxo de aquisicao e validacao funcional em bancada.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/elmo/monitoring-context.png"
      alt="Contexto de monitoramento do Elmo 2.0"
      caption="Contexto de monitoramento e validacao funcional do sistema."
      zoomable=true
    %}
  </div>
</div>

## Minha contribuicao

<div class="project-story-grid project-story-grid--reverse">
  <div class="project-story-copy">
    <p>Atuei principalmente em quatro frentes:</p>
    <ul>
      <li>Firmware critico, com foco em robustez, previsibilidade e seguranca operacional.</li>
      <li>Integracao de sensores medicos, estruturando aquisicao e tratamento de dados.</li>
      <li>Rotinas de teste e validacao funcional, com verificacao do comportamento do dispositivo em bancada.</li>
      <li>Base computacional para calculo e monitoramento, vinculada ao registro de software <strong>INPI BR 51 2023 004110-6</strong>.</li>
    </ul>
    <p>
      Essa atuacao contribuiu para o desenvolvimento do programa de computador
      <strong>"Calculo de Volume Tidal em Sistema Respiratorio Fechado"</strong>, registrado pela
      Fundacao Edson Queiroz, com implementacao em <strong>C e C#</strong>.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/elmo/bench-validation.jpeg"
      alt="Bancada do Elmo 2.0"
      caption="Dispositivo e bancada usados em validacao e testes operacionais."
      zoomable=true
    %}
  </div>
</div>

## Arquitetura e confiabilidade

<div class="project-story-grid">
  <div class="project-story-copy">
    <p>De forma resumida, a logica tecnica do projeto envolvia:</p>
    <ol>
      <li>captura de sinais a partir de sensores do sistema respiratorio;</li>
      <li>tratamento e organizacao dos dados no firmware embarcado;</li>
      <li>calculo de variaveis relevantes, incluindo rotinas ligadas a estimativa de volume tidal;</li>
      <li>disponibilizacao das informacoes para monitoramento, analise e apoio a operacao.</li>
    </ol>
    <p>
      Um dos pontos mais importantes foi o cuidado com testes de bancada e verificacao do comportamento
      sob diferentes condicoes operacionais. Em vez de focar apenas em "funcionar", a preocupacao era
      assegurar consistencia na leitura dos sinais, estabilidade da logica embarcada e clareza no fluxo
      de dados.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/elmo/hero.jpg"
      alt="Elmo 2.0 em contexto de uso"
      caption="Imagem principal do projeto, associada ao contexto healthtech e a evolucao do monitoramento."
      zoomable=true
    %}
  </div>
</div>

<div class="project-callout">
  <p class="project-callout__eyebrow">Registro e impacto</p>
  <h3 class="project-callout__title">Participacao direta em software registrado no INPI</h3>
  <p class="project-callout__body">
    O trabalho no Elmo 2.0 consolidou minha experiencia em healthtech, firmware embarcado e integracao
    hardware-software, culminando na base computacional do software
    <strong>Calculo de Volume Tidal em Sistema Respiratorio Fechado</strong>, processo
    <strong>BR 51 2023 004110-6</strong>.
  </p>
</div>

## Galeria do projeto

<div class="project-gallery">
  {% include project-media-panel.liquid
    path="assets/img/projects/elmo/hero.jpg"
    alt="Hero do Elmo 2.0"
    caption="Imagem principal do dispositivo."
    compact=true
    zoomable=true
  %}
  {% include project-media-panel.liquid
    path="assets/img/projects/elmo/monitoring-context.png"
    alt="Elmo em monitoramento"
    caption="Contexto de monitoramento e validacao."
    compact=true
    zoomable=true
  %}
  {% include project-media-panel.liquid
    path="assets/img/projects/elmo/bench-validation.jpeg"
    alt="Bancada de validacao do Elmo"
    caption="Bancada de testes e validacao funcional."
    compact=true
    zoomable=true
  %}
  {% include project-media-panel.liquid
    path="assets/img/projects/elmo/inpi-record.png"
    alt="Recorte do registro no INPI"
    caption="Recorte documental do registro de software vinculado ao projeto."
    compact=true
    zoomable=true
  %}
</div>

## Video do projeto

{% include project-video-panel.liquid
  title="Demonstracao em video"
  description="A estrutura ja aceita video local ou embed externo. Se voce tiver uma demonstracao do dispositivo ou do monitoramento, basta colocar o arquivo no caminho abaixo."
  asset_hint="assets/video/projects/elmo/overview.mp4"
  embed_hint="https://www.youtube.com/embed/SEU_VIDEO"
%}

## Tecnologias e competencias aplicadas

<div class="project-chip-list">
  <span class="project-chip">C</span>
  <span class="project-chip">C#</span>
  <span class="project-chip">Firmware embarcado</span>
  <span class="project-chip">Aquisicao de dados</span>
  <span class="project-chip">Integracao de sensores</span>
  <span class="project-chip">Testes de bancada</span>
  <span class="project-chip">Healthtech</span>
  <span class="project-chip">Embedded systems</span>
  <span class="project-chip">Hardware-software integration</span>
</div>
