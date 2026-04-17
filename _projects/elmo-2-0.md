---
layout: page
title: Elmo 2.0
description: Firmware crítico para suporte respiratório com validação funcional e registro no INPI.
img: assets/img/projects/elmo/especial_covid_5_anos_capacete_elmo_34-32715691.jpg
importance: 4
---

O **Elmo 2.0** foi um projeto de **software embarcado aplicado à saúde**, concebido como evolução de uma tecnologia cearense de suporte respiratório não invasivo. Minha atuação esteve concentrada no desenvolvimento de **firmware crítico**, na **aquisição e processamento confiável de dados** e na **integração com sensores médicos**, em um contexto que exigia alta previsibilidade operacional, tolerância a falhas e rigor de validação.

## Visão geral

O projeto partiu da necessidade de ampliar a capacidade de monitoramento do sistema ELMO por meio da incorporação de **sensores, alertas e processamento local de dados**, apoiando equipes de saúde no acompanhamento do paciente e na coleta estruturada de informações relevantes para uso assistencial e de pesquisa.

Em termos de engenharia, isso significou trabalhar em uma base embarcada com requisitos próximos aos de sistemas críticos: leitura robusta de sinais, tratamento de exceções, comportamento determinístico, organização do fluxo de aquisição e validação funcional em bancada.

## Minha contribuição

Atuei principalmente em quatro frentes:

- **Firmware crítico**, com foco em robustez, previsibilidade e segurança operacional;
- **Integração de sensores médicos**, estruturando a aquisição e o tratamento dos dados do sistema;
- **Rotinas de teste e validação funcional**, com verificação do comportamento do dispositivo em bancada;
- **Base computacional para cálculo e monitoramento**, vinculada ao registro de software **INPI BR 51 2023 004110-6**.

Essa atuação contribuiu para o desenvolvimento do programa de computador **“Cálculo de Volume Tidal em Sistema Respiratório Fechado”**, registrado pela Fundação Edson Queiroz, com implementação em **C e C#**.

## Desafios de engenharia

Projetos em saúde exigem um padrão de desenvolvimento diferente de protótipos convencionais. No Elmo 2.0, alguns desafios centrais foram:

- garantir **aquisição estável de dados** em um ambiente sensível a ruído e variações de operação;
- estruturar o firmware para favorecer **comportamento previsível** e reduzir riscos de falhas silenciosas;
- apoiar a evolução do sistema para um modelo com **maior capacidade de monitoramento**;
- contribuir para uma arquitetura capaz de sustentar **validação funcional**, rastreabilidade técnica e evolução incremental.

## Arquitetura técnica

De forma resumida, a lógica técnica do projeto envolvia:

1. **captura de sinais** a partir de sensores do sistema respiratório;
2. **tratamento e organização dos dados** no firmware embarcado;
3. **cálculo de variáveis relevantes**, incluindo rotinas ligadas à estimativa de volume tidal;
4. **disponibilização das informações** para monitoramento, análise e apoio à operação.

## Validação e confiabilidade

Um dos pontos mais importantes do projeto foi o cuidado com **testes de bancada** e com a verificação do comportamento do sistema sob diferentes condições operacionais. Em vez de focar apenas em “funcionar”, a preocupação era assegurar:

- consistência na leitura dos sinais;
- estabilidade da lógica embarcada;
- clareza no fluxo de dados;
- suporte à evolução do monitoramento do paciente.

Essa experiência consolidou minha atuação em **integração hardware-software**, especialmente em cenários nos quais confiabilidade e qualidade de implementação são tão importantes quanto a própria funcionalidade.

## Resultado e impacto

O trabalho no Elmo 2.0 me deu experiência prática em um contexto real de **healthtech**, com requisitos concretos de segurança, validação e confiabilidade. Além do ganho técnico em firmware embarcado e integração de sensores, o projeto resultou em participação direta na base computacional de um software oficialmente registrado no INPI:

**Cálculo de Volume Tidal em Sistema Respiratório Fechado**  
**Processo:** BR 51 2023 004110-6

## Galeria do projeto

<div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:16px;">
  <figure>
    <img src="/assets/img/projects/elmo/ELmoFIsico.jpeg" alt="ELMO - imagem principal" style="width:100%; border-radius:12px;">
    <figcaption>Imagem principal do dispositivo.</figcaption>
  </figure>

  <figure>
    <img src="especial_covid_5_anos_capacete_elmo_34-32715691.jpg" alt="ELMO com monitoramento" style="width:100%; border-radius:12px;">
    <figcaption>Contexto de monitoramento e validação.</figcaption>
  </figure>

  <figure>
    <img src="Captura de tela 2026-04-17 000337.png" alt="Recorte do registro no INPI" style="width:100%; border-radius:12px;">
    <figcaption>Recorte documental do registro de software vinculado ao projeto.</figcaption>
  </figure>
</div>

## Tecnologias e competências aplicadas

`C` `C#` `Firmware Embarcado` `Aquisição de Dados` `Integração de Sensores` `Testes de Bancada` `Healthtech` `Embedded Systems` `Hardware-Software Integration`
