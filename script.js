'use strict';

const projects = {
  "aula": {
    "key": "aula",
    "repo": "aula02",
    "title": "Cadastro de produto",
    "category": "Fundamentos",
    "filter": "fundamentos",
    "tech": [
      "HTML",
      "Formulários"
    ],
    "symbol": "&lt;/&gt;",
    "short": "O início: estrutura HTML, campos de formulário e validação nativa.",
    "description": "Um exercício de introdução à programação web da disciplina de Linguagem de Marcação e Formatação.",
    "learning": [
      "Organização dos campos de cadastro de um produto.",
      "Tipos de input, seleção de categoria e validação nativa.",
      "HTML como estrutura de uma página."
    ],
    "note": "Exercício de formulário, sem armazenamento de produtos ou backend.",
    "source": "https://github.com/Wesleyttiago/aula02"
  },
  "ui": {
    "key": "ui",
    "repo": "Projeto-simples-CSS-UI-UX",
    "title": "Universo UI/UX",
    "category": "Interface",
    "filter": "interface",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "symbol": "◫",
    "short": "Uma experiência em três níveis para estudar estilo, layout e interação.",
    "description": "Uma página que evolui do básico ao avançado e explora a relação entre estrutura, estilo e comportamento.",
    "learning": [
      "Layouts que se adaptam ao celular e ao computador.",
      "Hierarquia visual e estados de interação com CSS.",
      "Exemplos expansíveis para apresentar conceitos de interface."
    ],
    "note": "Projeto de estudo de HTML, CSS e JavaScript.",
    "demo": "https://wesleyttiago.github.io/Projeto-simples-CSS-UI-UX/",
    "source": "https://github.com/Wesleyttiago/Projeto-simples-CSS-UI-UX"
  },
  "goiana": {
    "key": "goiana",
    "repo": "goiana-login-react",
    "title": "Login Goiana",
    "category": "React",
    "filter": "interface react",
    "tech": [
      "React",
      "Vite",
      "CSS"
    ],
    "symbol": "⚛",
    "short": "Tela de acesso com componentes, validação e identidade visual de Goiana, PE.",
    "description": "Uma tela de login inspirada no portal da Prefeitura de Goiana, desenvolvida com React e Vite.",
    "learning": [
      "Divisão da interface em componentes React.",
      "Validação de e-mail e senha com mensagens e foco nos erros.",
      "Mostrar senha, lembrar somente o e-mail e janelas de ajuda.",
      "Layout responsivo e navegação por teclado."
    ],
    "note": "Protótipo de interface, sem autenticação real ou vínculo com a prefeitura.",
    "demo": "https://wesleyttiago.github.io/goiana-login-react/",
    "source": "https://github.com/Wesleyttiago/goiana-login-react"
  },
  "streaming": {
    "key": "streaming",
    "repo": "projeto-streaming-estudo",
    "title": "Interface de streaming",
    "category": "APIs",
    "filter": "interface api",
    "tech": [
      "JavaScript",
      "TMDB",
      "YouTube"
    ],
    "symbol": "▷",
    "short": "Catálogo do TMDB, busca, detalhes de títulos, trailers e lista pessoal.",
    "description": "Uma interface inspirada na Netflix, com filmes e séries consultados na API do TMDB e trailers do YouTube.",
    "learning": [
      "Consultas à API e tratamento de busca, erros e resultados vazios.",
      "Filtros de gênero e navegação pelo catálogo.",
      "Detalhes dos títulos, trailers e recomendações.",
      "Lista pessoal e preferências salvas no navegador."
    ],
    "note": "Projeto de estudo, sem reprodução de filmes completos. Sem vínculo com a Netflix ou endosso do TMDB.",
    "demo": "https://wesleyttiago.github.io/projeto-streaming-estudo/",
    "source": "https://github.com/Wesleyttiago/projeto-streaming-estudo"
  },
  "garimpo": {
    "key": "garimpo",
    "repo": "garimpo-smart-ml",
    "title": "Garimpo Smart",
    "category": "Conteúdo & automação",
    "filter": "interface api",
    "tech": [
      "Node.js",
      "n8n",
      "Apify"
    ],
    "symbol": "⌘",
    "short": "Blog, recomendações, curadoria de produtos e estudos de automação no n8n.",
    "description": "Um projeto com blog para casa e rotina, recomendações por ambiente, uma área de curadoria e experimentos de pesquisa de produtos e anúncios.",
    "learning": [
      "Conteúdo em JSON e geração de páginas estáticas.",
      "Busca de guias e filtros de recomendações por ambiente.",
      "Importação e revisão de resultados no navegador.",
      "Fluxos locais com n8n, Node.js e Docker.",
      "Piloto de pesquisa de anúncios com a Apify."
    ],
    "note": "O blog e a curadoria estão publicados. As automações são estudos locais: a busca do Mercado Livre ainda tem erro 403 pendente; o piloto da Apify usa credenciais próprias. Resultados exigem revisão antes de publicar.",
    "demo": "https://wesleyttiago.github.io/garimpo-smart-ml/blog/",
    "source": "https://github.com/Wesleyttiago/garimpo-smart-ml"
  },
  "chamados": {
    "key": "chamados",
    "repo": "chamados-ti",
    "title": "Chamados TI",
    "category": "Sistemas & banco de dados",
    "filter": "interface react api",
    "tech": ["React", "Node.js", "SQLite"],
    "symbol": "↗",
    "short": "Um sistema de suporte com cadastro, histórico, soluções e banco de dados local.",
    "description": "Um projeto de estudo ligado à minha experiência com suporte de TI. Organiza solicitações, prioridades, atendimentos e soluções em um fluxo completo.",
    "learning": [
      "Cadastro, consulta, edição e exclusão de chamados com validação.",
      "Estados e componentes React, busca, filtros e exportação CSV.",
      "API REST em Node.js, tabelas relacionadas e consultas SQL parametrizadas.",
      "Histórico do chamado e regra de conclusão com solução obrigatória.",
      "Testes da API e das regras, com um roteiro para estudar o código."
    ],
    "note": "A demonstração pública usa dados fictícios e salva no navegador. O repositório inclui uma API e SQLite para execução local, sem autenticação.",
    "demo": "https://wesleyttiago.github.io/chamados-ti/",
    "source": "https://github.com/Wesleyttiago/chamados-ti"
  },
  "portfolio": {
    "key": "portfolio",
    "repo": "wesleyttiago.github.io",
    "title": "Este portfólio",
    "category": "Portfólio",
    "filter": "interface",
    "tech": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "symbol": "wt.",
    "short": "A própria página como experimento: do simples ao complexo, a cada seção.",
    "description": "Meu portfólio reúne os projetos públicos do GitHub e explora uma evolução visual ao longo da navegação.",
    "learning": [
      "Três níveis de composição, do essencial às interfaces com mais camadas.",
      "Galeria com filtros e detalhes dos projetos.",
      "Navegação que acompanha a leitura, responsividade e acessibilidade."
    ],
    "note": "Os níveis descrevem a experiência visual desta página. Minha trajetória está em construção.",
    "source": "https://github.com/Wesleyttiago/wesleyttiago.github.io"
  }
};

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
const filterStatus = document.getElementById('filter-status');

function applyFilter(category) {
  let count = 0;
  for (const card of cards) {
    card.hidden = category !== 'all' && !card.dataset.category.split(' ').includes(category);
    if (!card.hidden) count++;
  }
  for (const filter of filterButtons) {
    filter.setAttribute('aria-pressed', String(filter.dataset.filter === category));
  }
  filterStatus.textContent = `${count} ${count === 1 ? 'projeto' : 'projetos'}`;
}
for (const button of filterButtons) {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
}
document.querySelector('.filter-bar').hidden = false;

const dialog = document.getElementById('project-dialog');
let dialogTrigger;

if (typeof dialog.showModal === 'function') {
  for (const button of document.querySelectorAll('[data-project]')) {
    if (!projects[button.dataset.project]) continue;
    button.hidden = false;
    button.addEventListener('click', () => {
      const project = projects[button.dataset.project];
      dialogTrigger = button;
      document.getElementById('dialog-title').textContent = project.title;
      document.getElementById('dialog-category').textContent = project.category + ' / ' + project.repo;
      document.getElementById('dialog-description').textContent = project.description;
      document.getElementById('dialog-note').textContent = project.note;
      const list = document.getElementById('dialog-learning');
      list.replaceChildren(...project.learning.map(item => {
        const li = document.createElement('li');
        li.textContent = item;
        return li;
      }));
      document.getElementById('dialog-source').href = project.source;
      const demo = document.getElementById('dialog-demo');
      demo.hidden = !project.demo;
      if (project.demo) demo.href = project.demo;
      else demo.removeAttribute('href');
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
  }
  for (const fallback of document.querySelectorAll('.source-fallback')) fallback.hidden = true;
}
document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) {
    dialog.close();
  }
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialogTrigger?.focus();
});

const sections = [...document.querySelectorAll('.chapter, .contact')];
const navLinks = [...document.querySelectorAll('.nav-level')];
const progress = document.querySelector('.reading-progress');
let scheduled = false;
function updateNavigation() {
  const position = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll > 0 ? Math.min(100, Math.max(0, position / maxScroll * 100)) : 0}%`;
  const threshold = window.innerHeight * 0.28;
  let current = sections[0]?.id;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  if (maxScroll > 0 && position >= maxScroll - 2) current = sections.at(-1)?.id;
  document.body.dataset.stage = current;
  const activeChapter = current === 'contato' ? 'avancado' : current;
  for (const link of navLinks) {
    const active = link.getAttribute('href') === '#' + activeChapter;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  scheduled = false;
}
function scheduleNavigation() {
  if (!scheduled) {
    scheduled = true;
    window.requestAnimationFrame(updateNavigation);
  }
}
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
window.addEventListener('load', scheduleNavigation);
updateNavigation();

