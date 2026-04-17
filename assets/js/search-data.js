// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-sobre",
    title: "sobre",
    section: "Navigation",
    handler: () => {
      window.location.href = "/ProtfolioGithub/";
    },
  },{id: "nav-projetos",
          title: "projetos",
          description: "Projetos selecionados em robótica, IoT, firmware crítico e pesquisa aplicada.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ProtfolioGithub/projects/";
          },
        },{id: "nav-publicações",
          title: "publicações",
          description: "Publicações e capítulos relacionados a robótica, sistemas embarcados e educação em engenharia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ProtfolioGithub/publications/";
          },
        },{id: "nav-repositórios",
          title: "repositórios",
          description: "Perfil público no GitHub e repositórios em destaque.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ProtfolioGithub/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Resumo profissional, experiência, formação e competências técnicas.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ProtfolioGithub/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ProtfolioGithub/blog/";
          },
        },{id: "news-tricampeão-latino-americano-de-robótica-larc-robocup-em-uma-trajetória-de-títulos-construída-com-robótica-autônoma-estratégia-técnica-e-mentoria-de-equipes-de-alto-desempenho",
          title: 'Tricampeão Latino-Americano de Robótica (LARC/RoboCup) em uma trajetória de títulos construída com robótica...',
          description: "",
          section: "News",},{id: "news-painelista-convidado-no-hack-to-work-2026-compartilhando-experiências-sobre-mercado-de-tecnologia-engenharia-aplicada-e-desenvolvimento-de-soluções-embarcadas",
          title: 'Painelista convidado no Hack to Work 2026, compartilhando experiências sobre mercado de tecnologia,...',
          description: "",
          section: "News",},{id: "projects-bibliotecas",
          title: 'Bibliotecas',
          description: "Bibliotecas publicas em C/C++ e ferramentas embarcadas publicadas no GitHub, com snapshot semanal de metricas.",
          section: "Projects",handler: () => {
              window.location.href = "/ProtfolioGithub/projects/bibliotecas/";
            },},{id: "projects-elmo-2-0",
          title: 'Elmo 2.0',
          description: "Firmware crítico para suporte respiratório com validação funcional e registro no INPI.",
          section: "Projects",handler: () => {
              window.location.href = "/ProtfolioGithub/projects/elmo-2-0/";
            },},{id: "projects-prognos",
          title: 'Prognos',
          description: "Robô médico autônomo com ROS, C++ e navegação hospitalar.",
          section: "Projects",handler: () => {
              window.location.href = "/ProtfolioGithub/projects/prognos/";
            },},{id: "projects-projeto-refrative",
          title: 'Projeto Refrative',
          description: "Inovação em IoT com modelagem 3D, K1 Max e interface web embarcada.",
          section: "Projects",handler: () => {
              window.location.href = "/ProtfolioGithub/projects/projeto-refrative/";
            },},{id: "projects-robô-baratinha",
          title: 'Robô Baratinha',
          description: "Plataforma modular de P&amp;D com 7+ versões de PCB e publicação na Springer Nature.",
          section: "Projects",handler: () => {
              window.location.href = "/ProtfolioGithub/projects/robo-baratinha/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/ProtfolioGithub/assets/pdf/cv_joao_augusto.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%7A%6A%6F%61%6F%61%75%67%75%73%74%6F%63%7A@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/joaoaugustocarvalho", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/joaoaugustocz", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
