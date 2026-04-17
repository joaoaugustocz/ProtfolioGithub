---
layout: page
title: Bibliotecas
description: Bibliotecas publicas em C/C++ e ferramentas embarcadas publicadas no GitHub, com snapshot semanal de metricas.
img: assets/img/projects/bibliotecas/hero.svg
importance: 5
---

{% assign library_items = site.data.library_metrics.items %}
{% if library_items == blank or library_items.size == 0 %}
  {% assign library_items = site.data.libraries.items %}
{% endif %}

<div class="project-story-intro">
  <p class="project-story-lead">
    Este projeto organiza as bibliotecas publicas que fui extraindo dos meus trabalhos em robotica,
    firmware e integracao de sensores. Em vez de deixar esses repositorios dispersos, a ideia aqui e
    mostrar a biblioteca como produto tecnico: o que ela resolve, em que contexto surgiu e quais sinais
    de uso o GitHub ja registra.
  </p>
</div>

## Ecossistema de bibliotecas

<div class="project-story-grid">
  <div class="project-story-copy">
    <p>
      A maior parte dessas bibliotecas nasce de problema real: organizacao de sensores, OTA em ESP32,
      suporte a IMU, utilitarios de firmware e adaptacoes de drivers para hardware especifico. Isso faz
      esta pagina conversar diretamente com os outros projetos do portfolio.
    </p>
    <p>
      O snapshot de metricas abaixo e atualizado por workflow semanal. Stars, forks, linguagem principal
      e ultima atividade ficam sempre sincronizados; views e clones entram quando o token do workflow tem
      acesso ao endpoint de trafego do GitHub.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-media-panel.liquid
      path="assets/img/projects/bibliotecas/hero.svg"
      alt="Placeholder do ecossistema de bibliotecas"
      caption="Placeholder visual para representar bibliotecas, firmware e reuso de codigo."
      zoomable=true
    %}
  </div>
</div>

<div class="project-callout">
  <p class="project-callout__eyebrow">Snapshot de metricas</p>
  <h3 class="project-callout__title">Atualizacao automatica via GitHub Actions</h3>
  <p class="project-callout__body">
    {% if site.data.library_metrics.generated_at %}
      Ultima sincronizacao em {{ site.data.library_metrics.generated_at | date: "%d/%m/%Y %H:%M UTC" }}.
    {% else %}
      Snapshot ainda nao gerado. As metricas vao aparecer assim que o workflow
      <code>update-library-metrics.yml</code> rodar pela primeira vez.
    {% endif %}
    A janela de views e clones segue o limite de {{ site.data.libraries.traffic_window_days | default: 14 }} dias da API de trafego do GitHub.
  </p>
</div>

<div class="library-grid">
  {% for item in library_items %}
    {% include library-metric-card.liquid item=item %}
  {% endfor %}
</div>

## Como manter esta pagina forte

<div class="project-story-grid project-story-grid--reverse">
  <div class="project-story-copy">
    <ul>
      <li>Conserve em <code>_data/libraries.yml</code> apenas bibliotecas publicas de fato reutilizaveis.</li>
      <li>Se uma biblioteca nascer de outro projeto, faca a ligacao contextual no texto e no README do repo.</li>
      <li>Quando houver artigo, demonstracao ou benchmark, vale anexar no proprio repositorio e referenciar aqui.</li>
    </ul>
    <p>
      Se depois voce quiser, eu posso evoluir esta pagina para incluir badges de releases, documentacao,
      exemplos de uso ou ate highlights do README de cada repositorio.
    </p>
  </div>
  <div class="project-story-visual">
    {% include project-video-panel.liquid
      title="Demo opcional"
      description="Se voce tiver um video curto apresentando o ecossistema de bibliotecas ou exemplos de uso, o caminho ja fica reservado."
      asset_hint="assets/video/projects/bibliotecas/overview.mp4"
      embed_hint="https://www.youtube.com/embed/SEU_VIDEO"
    %}
  </div>
</div>
