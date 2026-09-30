/* =========================================================
   1. DADOS
   ========================================================= */
const SISTEMAS = {
  tatil:          {nome:"Tátil",          cor:"var(--roxo)",     desc:"Texturas, pressão e toque"},
  visual:         {nome:"Visual",         cor:"var(--amarelo)",  desc:"Luz, movimento lento e foco"},
  auditivo:       {nome:"Auditivo",       cor:"var(--vermelho)", desc:"Som previsível e filtro de ruído"},
  vestibular:     {nome:"Vestibular",     cor:"var(--azul)",     desc:"Equilíbrio e movimento"},
  proprioceptivo: {nome:"Proprioceptivo", cor:"var(--verde)",   desc:"Peso, força e consciência do corpo"}
};

const ICONES = {
  tatil:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 11V5a2 2 0 1 1 4 0v6M12 11V7a2 2 0 1 1 4 0v4M16 11v6a5 5 0 0 1-10 0v-4"/></svg>`,
  visual:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="3"/></svg>`,
  auditivo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="13" width="5" height="8" rx="2.5"/><rect x="17" y="13" width="5" height="8" rx="2.5"/></svg>`,
  vestibular:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v18M3 8l9-5 9 5"/><path d="M3 8l-1 6a4 4 0 0 0 8 0L9 8M15 8l-1 6a4 4 0 0 0 8 0l-1-6"/></svg>`,
  proprioceptivo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 9v6M20 9v6M7 6v12M17 6v12M7 12h10"/></svg>`
};

/* Fallback seguro caso uma imagem não exista. */
const ARTE = {};

const PRODUTOS = [
  {id:"cubo", foto:"img/cubo-infinito.jpg", nome:"Cubo Infinito Zenith", sis:"tatil", preco:34.90, idade:"5+ anos",
   desc:"Oito cubos articulados que giram sem fim. O movimento repetitivo ocupa as mãos durante a aula ou a espera, sem fazer barulho.",
   bene:["Silencioso: pode ir para a sala de aula","Cabe no bolso do uniforme","Encaixes reforçados, não solta no giro"]},
  {id:"popit", foto:"img/pop-it-galaxia.jpg", nome:"Pop It Galáxia", sis:"tatil", preco:34.90, idade:"3+ anos",
   desc:"Silicone macio com 49 bolhas que estouram e voltam. O estalo leve dá retorno tátil e sonoro a cada dedo.",
   bene:["Silicone atóxico","Estalo suave","Também serve de jogo de contagem"]},
  {id:"ampulheta", foto:"img/ampulheta-bolhas.jpg", nome:"Ampulheta de Bolhas Lenta", sis:"visual", preco:34.90, idade:"2+ anos",
   desc:"Bolhas que sobem por três minutos em líquido denso. Serve de âncora visual para respirar junto e baixar a ativação.",
   bene:["Três minutos exatos de descida","Base emborrachada, fica firme na mesa","Usada como temporizador de pausa"]},
  {id:"fone", foto:"img/fone-abafador.jpg", nome:"Fone Abafador Calma", sis:"auditivo", preco:79.90, idade:"3+ anos",
   desc:"Abafador passivo de 27 dB para supermercado, festa e sala de aula barulhenta. Corta o pico do ruído sem isolar a voz por completo.",
   bene:["Redução de 27 dB sem pilha nem bateria","Arco ajustável, não aperta a cabeça","Dobra e cabe na mochila"]},
  {id:"circuito", foto:"img/circuito-sensorial-força.jpg", nome:"Circuito sensorial de força", sis:"proprioceptivo", preco:39.90, idade:"4+ anos",
   desc:"Brinquedo sensorial interativo com diferentes texturas, áreas de pressão e peças flexíveis.",
   bene:["Bolinhas coloridas para estímulos visual e tátil","Diferentes texturas e resistências","Parte flexíveis para apertar e movimentar"]},
  {id:"balanço", foto:"img/balanço-proprioceptivo.jpg", nome:"Balanço Proprioceptivo", sis:"vestibular", preco:110.90, idade:"4+ anos",
   desc:"Balanço sensorial acolchoado que permite movimentos suaves em diferentes direções, oferecendo estímulos vestibulares por meio do balanço e da mudança de posição do corpo.",
   bene:["Suporta até 100 kg","Estimula o equilíbrio e a consciência corporal","Favorece coordenação motora e orientação espacial"]},
  {id:"tubo", foto:"img/tubo-chuva.jpg", nome:"Tubo Sensorial Chuva", sis:"auditivo", preco:34.90, idade:"2+ anos",
   desc:"Ao virar, as esferas internas descem imitando chuva. Som previsível e contínuo, bom para transição entre atividades.",
   bene:["Som constante de 20 segundos","Acrílico resistente a queda","Também trabalha rastreio visual"]},
  {id:"massa", foto:"img/massinha-terapeutica.jpg", nome:"Massinha Terapêutica Resistência", sis:"proprioceptivo", preco:19.90, idade:"3+ anos",
   desc:"Massa de resistência média para amassar, esticar e enrolar. Trabalha força de mão e preparo para a escrita.",
   bene:["Não gruda na mão nem na mesa","Três níveis de resistência disponíveis","Pote de 120 g que veda de verdade"]},
  {id:"projetor", foto:"img/projetor-ondas.jpg", nome:"Projetor de Ondas Noturno", sis:"visual", preco:130.90, idade:"Todas as idades",
   desc:"Projeta ondas de água em movimento lento no teto. Vira rotina de sono e reduz a resistência na hora de deitar.",
   bene:["Desliga sozinho em 45 minutos","Quatro velocidades e três cores","Sem som: combina com o Tubo Chuva"]}
];

const CHAVE = "neuroplay:carrinho";
const FRETE_GRATIS = 199;
const FRETE = 24.90;

let carrinho = carregar();
let filtroAtivo = null;
let produtoAberto = null;
let qtdModal = 1;
let timerAviso;

const acharProduto = id => PRODUTOS.find(p => p.id === id);
const moeda = v => Number(v).toLocaleString("pt-BR", {style:"currency", currency:"BRL"});
const totalItens = () => Object.values(carrinho).reduce((s,q) => s + q, 0);
const subtotal = () => Object.entries(carrinho).reduce((s,[id,q]) => {
  const p = acharProduto(id);
  return s + (p ? p.preco * q : 0);
}, 0);

function carregar(){
  try {
    const bruto = localStorage.getItem(CHAVE);
    const dados = bruto ? JSON.parse(bruto) : {};
    const limpo = {};
    for (const id in dados) {
      if (PRODUTOS.some(p => p.id === id) && Number(dados[id]) > 0) {
        limpo[id] = Math.min(99, Math.floor(Number(dados[id])));
      }
    }
    return limpo;
  } catch(e) { return {}; }
}
function salvar(){
  try { localStorage.setItem(CHAVE, JSON.stringify(carrinho)); } catch(e) {}
}

function foto(id){
  const p = acharProduto(id);
  if (!p || !p.foto) return ARTE[id] || imagemIndisponivel(p ? p.nome : "Produto");
  return `<img class="foto" src="${p.foto}" alt="${p.nome}" loading="lazy" onerror="semFoto(this,'${id}')">`;
}
function imagemIndisponivel(nome){
  return `<div class="foto-indisponivel" role="img" aria-label="${nome}">Imagem indisponível</div>`;
}
function semFoto(el, id){
  const p = acharProduto(id);
  el.outerHTML = ARTE[id] || imagemIndisponivel(p ? p.nome : "Produto");
}

function atualizarSelo(pular = false){
  const selo = document.getElementById("selo");
  if (!selo) return;
  selo.textContent = totalItens();
  if (pular) {
    selo.classList.remove("pula");
    void selo.offsetWidth;
    selo.classList.add("pula");
  }
}
function mostrarAviso(texto){
  const el = document.getElementById("aviso");
  if (!el) return;
  el.textContent = texto;
  el.classList.add("ver");
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => el.classList.remove("ver"), 2600);
}

/* =========================================================
   CARRINHO
   ========================================================= */
function adicionarAoCarrinho(id, qtd = 1, origem = null){
  const p = acharProduto(id);
  if (!p) return;
  carrinho[id] = Math.min(99, (carrinho[id] || 0) + qtd);
  salvar();
  atualizarSelo(true);
  if (document.getElementById("carrinho-conteudo")) renderCarrinho();
  mostrarAviso(qtd > 1 ? `${qtd}× ${p.nome} no carrinho` : `${p.nome} no carrinho`);
  if (origem) {
    const rotulo = origem.textContent;
    origem.textContent = "Adicionado";
    origem.classList.add("feito");
    setTimeout(() => {
      if (!origem.isConnected) return;
      origem.textContent = rotulo;
      origem.classList.remove("feito");
    }, 1400);
  }
}
function alterarQtd(id, delta){
  if (!carrinho[id]) return;
  carrinho[id] += delta;
  if (carrinho[id] <= 0) delete carrinho[id];
  if (carrinho[id] > 99) carrinho[id] = 99;
  salvar();
  atualizarSelo();
  renderCarrinho();
}
function removerItem(id){
  const p = acharProduto(id);
  delete carrinho[id];
  salvar();
  atualizarSelo();
  renderCarrinho();
  if (p) mostrarAviso(`${p.nome} removido`);
}
function esvaziar(){
  carrinho = {};
  salvar();
  atualizarSelo();
  renderCarrinho();
}

/* =========================================================
   VITRINE
   ========================================================= */
function renderTiras(){
  const alvo = document.getElementById("tiras");
  if (!alvo) return;
  alvo.innerHTML = Object.entries(SISTEMAS).map(([chave,s]) => `
    <li>
      <button class="tira" style="--c:${s.cor}" aria-pressed="${filtroAtivo === chave}" onclick="filtrar('${chave}')">
        <span class="icone-sistema" aria-hidden="true">${ICONES[chave] || "•"}</span>
        <span>${s.nome}<small>${s.desc}</small></span>
      </button>
    </li>`).join("");
}
function filtrar(chave){
  filtroAtivo = (filtroAtivo === chave || chave === null) ? null : chave;
  if (!document.getElementById("grade")) return;
  renderTiras();
  renderGrade();
  const produtos = document.getElementById("produtos");
  if (produtos) produtos.scrollIntoView({behavior:"smooth", block:"start"});
}
function renderGrade(){
  const grade = document.getElementById("grade");
  if (!grade) return;
  const lista = filtroAtivo ? PRODUTOS.filter(p => p.sis === filtroAtivo) : PRODUTOS;
  const s = filtroAtivo ? SISTEMAS[filtroAtivo] : null;
  const titulo = document.getElementById("titulo-vitrine");
  const subtitulo = document.getElementById("sub-vitrine");
  const limpar = document.getElementById("limpar");
  if (titulo) titulo.textContent = s ? `Sistema ${s.nome.toLowerCase()}` : "Todos os brinquedos";
  if (subtitulo) subtitulo.textContent = s
    ? `${lista.length} ${lista.length === 1 ? "brinquedo" : "brinquedos"} · ${s.desc.toLowerCase()}`
    : "Toque em um brinquedo para ver os detalhes.";
  if (limpar) limpar.hidden = !filtroAtivo;

  grade.innerHTML = lista.map(p => {
    const sistema = SISTEMAS[p.sis];
    const cor = sistema ? sistema.cor : "var(--azul)";
    return `
    <article class="cartao" style="--c:${cor}">
      <button class="palco" onclick="abrirProduto('${p.id}')" aria-label="Ver ${p.nome} em tamanho grande">
        ${foto(p.id)}
      </button>
      <div class="corpo">
        <span class="etiqueta">${sistema ? sistema.nome : ""}</span>
        <h3><button onclick="abrirProduto('${p.id}')" style="text-align:left">${p.nome}</button></h3>
        <p class="idade">${p.idade}</p>
        <p class="preco">${moeda(p.preco)}</p>
        <button class="acao" onclick="adicionarAoCarrinho('${p.id}',1,this)">Adicionar ao carrinho</button>
      </div>
    </article>`;
  }).join("");
}

/* =========================================================
   MODAL DO PRODUTO
   ========================================================= */
function abrirProduto(id){
  const p = acharProduto(id);
  if (!p) return;
  produtoAberto = id;
  qtdModal = 1;
  const sistema = SISTEMAS[p.sis];
  const modal = document.getElementById("modal");
  const veu = document.getElementById("veu");
  if (!modal || !veu) return;
  modal.style.setProperty("--c", sistema ? sistema.cor : "var(--azul)");
  modal.innerHTML = `
    <button class="fechar" onclick="fecharProduto()" aria-label="Fechar">×</button>
    <div class="modal-palco">${foto(p.id)}</div>
    <div class="modal-texto">
      <span class="etiqueta">Sistema ${sistema ? sistema.nome.toLowerCase() : ""}</span>
      <h2 id="modal-titulo">${p.nome}</h2>
      <p class="desc">${p.desc}</p>
      <ul class="beneficios">${p.bene.map(b => `<li>${b}</li>`).join("")}</ul>
      <p class="idade">Indicado para ${p.idade.toLowerCase()} · frete grátis acima de ${moeda(FRETE_GRATIS)}</p>
      <p class="preco" style="font-size:30px">${moeda(p.preco)}</p>
      <div class="compra">
        <div class="passo">
          <button onclick="qtdModalMudar(-1)" aria-label="Diminuir quantidade">−</button>
          <span id="qtd-modal">1</span>
          <button onclick="qtdModalMudar(1)" aria-label="Aumentar quantidade">+</button>
        </div>
        <button class="acao" onclick="adicionarDoModal(this)">Adicionar ao carrinho</button>
      </div>
    </div>`;
  veu.classList.add("aberto");
  document.body.style.overflow = "hidden";
  const fechar = veu.querySelector(".fechar");
  if (fechar) fechar.focus();
}
function qtdModalMudar(d){
  qtdModal = Math.min(99, Math.max(1, qtdModal + d));
  const qtd = document.getElementById("qtd-modal");
  if (qtd) qtd.textContent = qtdModal;
}
function adicionarDoModal(botao){
  if (!produtoAberto) return;
  adicionarAoCarrinho(produtoAberto, qtdModal, botao);
  setTimeout(fecharProduto, 700);
}
function fecharProduto(){
  const veu = document.getElementById("veu");
  if (veu) veu.classList.remove("aberto");
  document.body.style.overflow = "";
  produtoAberto = null;
}

/* =========================================================
   PÁGINA DO CARRINHO
   ========================================================= */
function renderCarrinho(){
  const alvo = document.getElementById("carrinho-conteudo");
  if (!alvo) return;
  const ids = Object.keys(carrinho);
  const sub = subtotal();
  const subtitulo = document.getElementById("sub-carrinho");

  if (!ids.length) {
    if (subtitulo) subtitulo.textContent = "Nenhum item por aqui ainda.";
    alvo.innerHTML = `
      <div class="vazio">
        <h2>Carrinho vazio</h2>
        <p>Comece pelo sistema sensorial que sua criança mais precisa regular — as cinco faixas coloridas da loja filtram o catálogo.</p>
        <a class="botao-link" href="index.html">Ver os brinquedos</a>
      </div>`;
    return;
  }

  const n = totalItens();
  if (subtitulo) subtitulo.textContent = `${n} ${n === 1 ? "item" : "itens"} · revise antes de finalizar.`;
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  const falta = Math.max(0, FRETE_GRATIS - sub);
  const progresso = Math.min(100, (sub / FRETE_GRATIS) * 100);

  alvo.innerHTML = `
  <div class="carrinho-grade">
    <div class="itens">
      ${ids.map(id => {
        const p = acharProduto(id);
        if (!p) return "";
        const q = carrinho[id], sistema = SISTEMAS[p.sis], cor = sistema ? sistema.cor : "var(--azul)";
        return `
        <div class="item" style="--c:${cor}">
          <button class="item-mini" onclick="abrirProduto('${id}')" aria-label="Ver ${p.nome}">${foto(id)}</button>
          <div>
            <h3>${p.nome}</h3>
            <p class="un">${sistema ? sistema.nome : ""} · ${moeda(p.preco)} cada</p>
            <div class="passo" style="margin-top:10px;width:max-content">
              <button onclick="alterarQtd('${id}',-1)" aria-label="Diminuir">−</button>
              <span>${q}</span>
              <button onclick="alterarQtd('${id}',1)" aria-label="Aumentar">+</button>
            </div>
          </div>
          <div class="item-dir">
            <span class="total-linha">${moeda(p.preco * q)}</span>
            <button class="remover" onclick="removerItem('${id}')">Remover</button>
          </div>
        </div>`;
      }).join("")}
      <button class="remover" style="justify-self:start;margin-top:4px" onclick="esvaziar()">Esvaziar carrinho</button>
    </div>
    <aside class="resumo">
      <h2>Resumo</h2>
      <div class="linha"><span>Subtotal</span><strong>${moeda(sub)}</strong></div>
      <div class="linha"><span>Frete</span><strong>${frete === 0 ? "Grátis" : moeda(frete)}</strong></div>
      <div class="frete-barra"><i style="width:${progresso}%"></i></div>
      <p class="frete-aviso">${falta > 0 ? `Faltam ${moeda(falta)} para o frete sair de graça.` : "Frete grátis liberado."}</p>
      <div class="total"><span>Total</span><span>${moeda(sub + frete)}</span></div>
      <button class="finalizar" onclick="finalizar()">Finalizar compra</button>
      <p class="frete-aviso">Entrega em 3 a 7 dias úteis · troca em 30 dias</p>
    </aside>
  </div>`;
}
function finalizar(){
  const sub = subtotal();
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  const total = sub + frete;
  const n = totalItens();
  esvaziar();
  const subtitulo = document.getElementById("sub-carrinho");
  const conteudo = document.getElementById("carrinho-conteudo");
  if (subtitulo) subtitulo.textContent = "Pedido confirmado.";
  if (conteudo) conteudo.innerHTML = `
    <div class="vazio" style="border-style:solid;border-color:var(--verde)">
      <h2>Pedido confirmado</h2>
      <p>${n} ${n === 1 ? "item" : "itens"} · ${moeda(total)}. O código de rastreio chega por e-mail assim que a caixa sair do estoque.</p>
      <a class="botao-link" href="index.html">Voltar para a loja</a>
    </div>`;
  mostrarAviso("Pedido confirmado");
  window.scrollTo({top:0, behavior:"smooth"});
}

/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  atualizarSelo();

  if (document.getElementById("grade")) {
    renderTiras();
    renderGrade();
  }
  if (document.getElementById("carrinho-conteudo")) {
    renderCarrinho();
  }

  const veu = document.getElementById("veu");
  if (veu) {
    veu.addEventListener("click", e => {
      if (e.target.id === "veu") fecharProduto();
    });
  }
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && produtoAberto) fecharProduto();
  });
});
