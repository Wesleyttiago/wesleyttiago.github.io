/* The page remains readable without JavaScript. Interactions enhance it. */
'use strict';
const projects = {
  automacao: {
  "title": "Garimpo Smart · Automação em desenvolvimento",
  "description": "Uma extensão do Garimpo Smart que explora automação de curadoria com n8n, um serviço em Node.js e execução local em Docker. O fluxo atual prepara rascunhos para revisão, sem publicar automaticamente na vitrine.",
  "learning": [
    "Instalação local com Docker Compose e workflow do n8n validado com dados de simulação.",
    "Autenticação OAuth com PKCE, validação de state e renovação de tokens, com credenciais guardadas localmente.",
    "Pesquisa e detalhes de produtos do catálogo acessíveis nos testes; acesso à busca geral e a anúncios específicos ainda retorna HTTP 403.",
    "Curadoria de ofertas, geração automática de links de afiliado e publicação na vitrine são próximas etapas, ainda não concluídas."
  ],
  "note": "Em desenvolvimento. A demonstração do fluxo usa produtos e preços fictícios. Os testes de catálogo não confirmaram ofertas de compra. O workflow não cria links de afiliado nem publica produtos automaticamente na configuração atual.",
  "source": "https://github.com/Wesleyttiago/garimpo-smart-ml/tree/main/automation"
},
  garimpo: {
  "title": "Garimpo Smart",
  "description": "Uma vitrine de achadinhos criada para receber visitantes de redes sociais e apresentar uma seleção de produtos. O visitante explora as categorias e segue para o Mercado Livre pelo link de afiliado da oferta escolhida.",
  "learning": [
    "HTML semântico e CSS mobile-first para uma página leve e responsiva.",
    "Filtros por categoria com contagem acessível e preferência de tema salva no dispositivo.",
    "Organização de ofertas principais e alternativas, com imagens WebP e links de afiliado.",
    "Configuração opcional do grupo VIP, pronta para conectar quando houver um convite."
  ],
  "note": "Projeto voltado a um negócio de curadoria e afiliação. A compra, o pagamento e o atendimento do pedido acontecem no Mercado Livre.",
  "source": "https://github.com/Wesleyttiago/garimpo-smart-ml",
  "demo": "https://wesleyttiago.github.io/garimpo-smart-ml/"
},
  aula: {
    title: 'Cadastro de produto',
    description: 'O repositório aula02 reúne um exercício de introdução à programação web. O formulário de cadastro trabalha a organização dos campos e a marcação de uma página.',
    learning: ['Labels e campos para nome, categoria, preço, quantidade e validade.', 'Tipos de input apropriados e validação nativa com required.', 'Estrutura HTML como ponto de partida de uma interface.'],
    note: 'Este é um estudo de formulário. Não há confirmação de armazenamento de produtos ou backend neste exercício.',
    source: 'https://github.com/Wesleyttiago/aula02'
  },
  ui: {
    title: 'Universo UI/UX',
    description: 'Uma página que apresenta conceitos de interface em níveis básico, intermediário e avançado, combinando estrutura, estilo e comportamento.',
    learning: ['Layouts e cartões que se adaptam à largura da tela.', 'CSS para hierarquia visual, contraste e estados de interação.', 'JavaScript e elementos expansíveis para explorar exemplos.'],
    note: 'Projeto de estudo de interface, com HTML, CSS e JavaScript em arquivos separados.',
    source: 'https://github.com/Wesleyttiago/Projeto-simples-CSS-UI-UX',
    demo: 'https://wesleyttiago.github.io/Projeto-simples-CSS-UI-UX/'
  },
  streaming: {
    title: 'Interface de streaming',
    description: 'Uma interface de estudo inspirada na Netflix, que conecta um catálogo visual a dados da API do TMDB.',
    learning: ['Uso de fetch para buscar dados de filmes e séries.', 'Busca e apresentação de títulos em um catálogo.', 'Integração de trailers e composição de uma interface temática.'],
    note: 'Projeto educacional. É uma demonstração de interface e consumo de API, sem oferecer um serviço de streaming de filmes.',
    source: 'https://github.com/Wesleyttiago/projeto-streaming-estudo',
    demo: 'https://wesleyttiago.github.io/projeto-streaming-estudo/'
  }
};

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-category]')];
filterButtons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  filterButtons.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  let count = 0;
  cards.forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
    if (!card.hidden) count++;
  });
  document.getElementById('filter-status').textContent = `${count} ${count === 1 ? 'projeto exibido' : 'projetos exibidos'}.`;
}));

const dialog = document.getElementById('project-dialog');
let dialogTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  if (!project) return;
  dialogTrigger = button;
  document.getElementById('dialog-title').textContent = project.title;
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
}));
document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  dialogTrigger?.focus();
});

const sections = [...document.querySelectorAll('.chapter')];
const navLinks = [...document.querySelectorAll('.nav-level')];
const progress = document.querySelector('.reading-progress');
let scheduled = false;
function updateNavigation() {
  const position = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${maxScroll > 0 ? Math.min(100, Math.max(0, position / maxScroll * 100)) : 0}%`;
  const threshold = window.innerHeight * 0.35;
  let current = sections[0]?.id;
  sections.forEach(section => { if (section.getBoundingClientRect().top <= threshold) current = section.id; });
  navLinks.forEach(link => {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
function scheduleNavigation() {
  if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateNavigation); }
}
window.addEventListener('scroll', scheduleNavigation, { passive: true });
window.addEventListener('resize', scheduleNavigation);
window.addEventListener('load', scheduleNavigation);
updateNavigation();
