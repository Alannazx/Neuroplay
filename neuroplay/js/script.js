/* =========================================================
   1. DADOS
   ========================================================= */
const SISTEMAS = {
  tatil:          {nome:"Tátil",          cor:"var(--roxo)",     desc:"Texturas, pressão e toque"},
  visual:         {nome:"Visual",         cor:"var(--amarelo)",  desc:"Luz, movimento lento e foco"},
  auditivo:       {nome:"Auditivo",       cor:"var(--vermelho)", desc:"Som previsível e filtro de ruído"},
  vestibular:     {nome:"Vestibular",     cor:"var(--azul)",     desc:"Equilíbrio e movimento"},
  proprioceptivo: {nome:"Proprioceptivo", cor:"var(--verde)",    desc:"Peso, força e consciência do corpo"}
};

const PRODUTOS = [
  {id:"cubo", foto:"img/cubo-infinito.jpg",    nome:"Cubo Infinito Zenith",      sis:"tatil",          preco:49.90,  idade:"5+ anos",
   desc:"Oito cubos articulados que giram sem fim. O movimento repetitivo ocupa as mãos durante a aula ou a espera, sem fazer barulho.",
   bene:["Silencioso: pode ir para a sala de aula","Cabe no bolso do uniforme","Encaixes reforçados, não solta no giro"]},
  {id:"popit", foto:"img/pop-it-galaxia.jpg",   nome:"Pop It Galáxia",            sis:"tatil",          preco:34.90,  idade:"3+ anos",
   desc:"Silicone macio com 64 bolhas que estouram e voltam. O estalo leve dá retorno tátil e sonoro a cada dedo.",
   bene:["Silicone atóxico, lavável na máquina","Estalo suave, não incomoda quem está perto","Também serve de jogo de contagem"]},
  {id:"ampulheta", foto:"img/ampulheta-bolhas.jpg",nome:"Ampulheta de Bolhas Lenta",sis:"visual",         preco:79.90,  idade:"2+ anos",
   desc:"Bolhas que sobem por três minutos em líquido denso. Serve de âncora visual para respirar junto e baixar a ativação.",
   bene:["Três minutos exatos de descida","Base emborrachada, fica firme na mesa","Usada como temporizador de pausa"]},
  {id:"fone", foto:"img/fone-abafador.jpg",    nome:"Fone Abafador Calma",       sis:"auditivo",       preco:189.90, idade:"3+ anos",
   desc:"Abafador passivo de 27 dB para supermercado, festa e sala de aula barulhenta. Corta o pico do ruído sem isolar a voz por completo.",
   bene:["Redução de 27 dB sem pilha nem bateria","Arco ajustável, não aperta a cabeça","Dobra e cabe na mochila"]},
  {id:"colete", foto:"img/colete-compressao.jpg",  nome:"Colete de Compressão Abraço",sis:"proprioceptivo",preco:249.90, idade:"4+ anos",
   desc:"Compressão firme e constante no tronco, do tipo que organiza o corpo antes de uma tarefa longa.",
   bene:["Ajuste lateral em quatro pontos","Tecido respirável, uso por até 30 min","Quatro tamanhos, do P ao GG infantil"]},
  {id:"disco", foto:"img/disco-equilibrio.jpg",   nome:"Disco de Equilíbrio Gira",  sis:"vestibular",     preco:139.90, idade:"4+ anos",
   desc:"Disco inflável com superfície texturizada. Fica embaixo dos pés na cadeira ou vira base de equilíbrio no chão.",
   bene:["Suporta até 100 kg","Bomba de ar inclusa para ajustar a firmeza","Lado liso e lado texturizado"]},
  {id:"tubo", foto:"img/tubo-chuva.jpg",    nome:"Tubo Sensorial Chuva",      sis:"auditivo",       preco:59.90,  idade:"2+ anos",
   desc:"Ao virar, as esferas internas descem imitando chuva. Som previsível e contínuo, bom para transição entre atividades.",
   bene:["Som constante de 20 segundos","Acrílico resistente a queda","Também trabalha rastreio visual"]},
  {id:"massa", foto:"img/massinha-terapeutica.jpg",   nome:"Massinha Terapêutica Resistência",sis:"proprioceptivo",preco:42.90,idade:"3+ anos",
   desc:"Massa de resistência média para amassar, esticar e enrolar. Trabalha força de mão e preparo para a escrita.",
   bene:["Não gruda na mão nem na mesa","Três níveis de resistência disponíveis","Pote de 120 g que veda de verdade"]},
  {id:"projetor", foto:"img/projetor-ondas.jpg",nome:"Projetor de Ondas Noturno", sis:"visual",         preco:159.90, idade:"Todas as idades",
   desc:"Projeta ondas de água em movimento lento no teto. Vira rotina de sono e reduz a resistência na hora de deitar.",
   bene:["Desliga sozinho em 45 minutos","Quatro velocidades e três cores","Sem som: combina com o Tubo Chuva"]}
];

/* =========================================================
   2. ILUSTRAÇÕES (SVG desenhado, nada externo)
   ========================================================= */
const ARTE = {
  cubo:`<svg viewBox="0 0 200 200" role="img" aria-label="Cubo infinito"><g fill="none" stroke="currentColor" stroke-width="7" stroke-linejoin="round">
    <rect x="36" y="36" width="58" height="58" rx="9" fill="var(--roxo)" stroke="#1C1B3A"/>
    <rect x="106" y="36" width="58" height="58" rx="9" fill="var(--amarelo)" stroke="#1C1B3A"/>
    <rect x="36" y="106" width="58" height="58" rx="9" fill="var(--azul)" stroke="#1C1B3A"/>
    <rect x="106" y="106" width="58" height="58" rx="9" fill="var(--verde)" stroke="#1C1B3A"/>
    <path d="M94 65h12M94 135h12M65 94v12M135 94v12" stroke="#1C1B3A" stroke-linecap="round"/></g></svg>`,
  popit:`<svg viewBox="0 0 200 200" role="img" aria-label="Pop it"><rect x="24" y="24" width="152" height="152" rx="34" fill="var(--azul)" stroke="#1C1B3A" stroke-width="7"/>
    <g fill="#1C1B3A" opacity=".18"><circle cx="62" cy="62" r="15"/><circle cx="100" cy="62" r="15"/><circle cx="138" cy="62" r="15"/><circle cx="62" cy="100" r="15"/><circle cx="138" cy="100" r="15"/><circle cx="62" cy="138" r="15"/><circle cx="100" cy="138" r="15"/><circle cx="138" cy="138" r="15"/></g>
    <circle cx="100" cy="100" r="17" fill="var(--amarelo)" stroke="#1C1B3A" stroke-width="5"/></svg>`,
  ampulheta:`<svg viewBox="0 0 200 200" role="img" aria-label="Ampulheta de bolhas"><g stroke="#1C1B3A" stroke-width="7" stroke-linejoin="round">
    <rect x="52" y="20" width="96" height="16" rx="8" fill="var(--roxo)"/>
    <rect x="52" y="164" width="96" height="16" rx="8" fill="var(--roxo)"/>
    <path d="M66 36h68v40l-28 24 28 24v40H66v-40l28-24-28-24z" fill="var(--amarelo)" opacity=".85"/></g>
    <g fill="#fff" opacity=".9"><circle cx="100" cy="62" r="7"/><circle cx="86" cy="82" r="5"/><circle cx="112" cy="128" r="6"/><circle cx="96" cy="146" r="4"/></g></svg>`,
  fone:`<svg viewBox="0 0 200 200" role="img" aria-label="Fone abafador"><path d="M42 118V96a58 58 0 0 1 116 0v22" fill="none" stroke="#1C1B3A" stroke-width="12" stroke-linecap="round"/>
    <rect x="22" y="104" width="48" height="66" rx="20" fill="var(--vermelho)" stroke="#1C1B3A" stroke-width="7"/>
    <rect x="130" y="104" width="48" height="66" rx="20" fill="var(--vermelho)" stroke="#1C1B3A" stroke-width="7"/>
    <rect x="34" y="118" width="24" height="38" rx="12" fill="#1C1B3A" opacity=".25"/>
    <rect x="142" y="118" width="24" height="38" rx="12" fill="#1C1B3A" opacity=".25"/></svg>`,
  colete:`<svg viewBox="0 0 200 200" role="img" aria-label="Colete de compressão"><path d="M64 34l36 16 36-16 26 26-18 22v78a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V82L38 60z" fill="var(--verde)" stroke="#1C1B3A" stroke-width="7" stroke-linejoin="round"/>
    <path d="M100 50v118" stroke="#1C1B3A" stroke-width="6"/>
    <g stroke="#1C1B3A" stroke-width="6" stroke-linecap="round"><path d="M74 96h18M108 96h18M74 122h18M108 122h18"/></g></svg>`,
  disco:`<svg viewBox="0 0 200 200" role="img" aria-label="Disco de equilíbrio"><ellipse cx="100" cy="118" rx="76" ry="46" fill="var(--azul)" stroke="#1C1B3A" stroke-width="7"/>
    <ellipse cx="100" cy="104" rx="76" ry="46" fill="var(--azul)" stroke="#1C1B3A" stroke-width="7"/>
    <g fill="#1C1B3A" opacity=".22"><circle cx="100" cy="104" r="7"/><circle cx="66" cy="96" r="6"/><circle cx="134" cy="96" r="6"/><circle cx="82" cy="120" r="6"/><circle cx="118" cy="120" r="6"/><circle cx="100" cy="80" r="6"/></g></svg>`,
  tubo:`<svg viewBox="0 0 200 200" role="img" aria-label="Tubo sensorial"><rect x="72" y="20" width="56" height="160" rx="28" fill="var(--amarelo)" stroke="#1C1B3A" stroke-width="7"/>
    <g fill="var(--azul)" stroke="#1C1B3A" stroke-width="4"><circle cx="92" cy="62" r="8"/><circle cx="112" cy="86" r="8"/><circle cx="90" cy="110" r="8"/><circle cx="110" cy="134" r="8"/><circle cx="94" cy="156" r="8"/></g></svg>`,
  massa:`<svg viewBox="0 0 200 200" role="img" aria-label="Massinha terapêutica"><path d="M44 96c0-30 26-46 56-46s56 16 56 46v42a10 10 0 0 1-10 10H54a10 10 0 0 1-10-10z" fill="var(--vermelho)" stroke="#1C1B3A" stroke-width="7"/>
    <ellipse cx="100" cy="62" rx="58" ry="20" fill="var(--amarelo)" stroke="#1C1B3A" stroke-width="7"/>
    <path d="M70 62c10-8 20-8 30 0s20 8 30 0" fill="none" stroke="#1C1B3A" stroke-width="5" stroke-linecap="round"/></svg>`,
  projetor:`<svg viewBox="0 0 200 200" role="img" aria-label="Projetor de ondas"><path d="M100 30l68 60H32z" fill="var(--roxo)" opacity=".38"/>
    <rect x="58" y="112" width="84" height="62" rx="20" fill="var(--roxo)" stroke="#1C1B3A" stroke-width="7"/>
    <circle cx="100" cy="143" r="17" fill="var(--amarelo)" stroke="#1C1B3A" stroke-width="6"/>
    <g fill="none" stroke="var(--azul)" stroke-width="6" stroke-linecap="round"><path d="M40 44c10-9 20-9 30 0s20 9 30 0 20-9 30 0 20 9 30 0"/><path d="M52 72c8-8 17-8 25 0s17 8 25 0 17-8 25 0"/></g></svg>`
};

const ICONES = {
  tatil:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 11V5a2 2 0 1 1 4 0v6M12 11V7a2 2 0 1 1 4 0v4M16 11v6a5 5 0 0 1-10 0v-4"/></svg>`,
  visual:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"/><circle cx="12" cy="12" r="3"/></svg>`,
  auditivo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 14v-3a8 8 0 0 1 16 0v3"/><rect x="2" y="13" width="5" height="8" rx="2.5"/><rect x="17" y="13" width="5" height="8" rx="2.5"/></svg>`,
  vestibular:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 3v18M3 8l9-5 9 5"/><path d="M3 8l-1 6a4 4 0 0 0 8 0L9 8M15 8l-1 6a4 4 0 0 0 8 0l-1-6"/></svg>`,
  proprioceptivo:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 9v6M20 9v6M7 6v12M17 6v12M7 12h10"/></svg>`
};

/* =========================================================
   2b. FOTOS — usa img/ e cai na ilustração se o arquivo faltar
   ========================================================= */
function foto(id){
  const p = acharProduto(id);
  if(!p || !p.foto) return ARTE[id] || "";
  return `<img class="foto" src="${p.foto}" alt="${p.nome}" loading="lazy"
               onerror="semFoto(this,'${id}')">`;
}
function semFoto(el, id){
  el.outerHTML = ARTE[id] || "";
}

/* =========================================================
   3. ESTADO + PERSISTÊNCIA
   ========================================================= */
const CHAVE = "neuroplay:carrinho";
const FRETE_GRATIS = 199;
const FRETE = 24.90;

let carrinho = carregar();
let filtroAtivo = null;
let produtoAberto = null;
let qtdModal = 1;

function carregar(){
  try{
    const bruto = localStorage.getItem(CHAVE);
    const dados = bruto ? JSON.parse(bruto) : {};
    const limpo = {};
    for(const id in dados){
      if(PRODUTOS.some(p => p.id === id) && Number(dados[id]) > 0){
        limpo[id] = Math.min(99, Math.floor(Number(dados[id])));
      }
    }
    return limpo;
  }catch(e){ return {}; }
}
function salvar(){
  try{ localStorage.setItem(CHAVE, JSON.stringify(carrinho)); }catch(e){}
}

const acharProduto = id => PRODUTOS.find(p => p.id === id);
const moeda = v => v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const totalItens = () => Object.values(carrinho).reduce((s,q) => s+q, 0);
const subtotal = () => Object.entries(carrinho).reduce((s,[id,q]) => s + acharProduto(id).preco * q, 0);

/* =========================================================
   4. CARRINHO — adicionar, alterar, remover
   ========================================================= */
function adicionarAoCarrinho(id, qtd = 1, origem = null){
  const p = acharProduto(id);
  if(!p) return;
  carrinho[id] = Math.min(99, (carrinho[id] || 0) + qtd);
  salvar();
  atualizarSelo(true);
  if(document.getElementById("carrinho-conteudo")) renderCarrinho();
  mostrarAviso(qtd > 1 ? `${qtd}× ${p.nome} no carrinho` : `${p.nome} no carrinho`);
  if(origem){
    const rotulo = origem.textContent;
    origem.textContent = "Adicionado";
    origem.classList.add("feito");
    setTimeout(() => { origem.textContent = rotulo; origem.classList.remove("feito"); }, 1400);
  }
}
function alterarQtd(id, delta){
  if(!carrinho[id]) return;
  carrinho[id] += delta;
  if(carrinho[id] <= 0) delete carrinho[id];
  if(carrinho[id] > 99) carrinho[id] = 99;
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
  mostrarAviso(`${p.nome} removido`);
}
function esvaziar(){
  carrinho = {};
  salvar();
  atualizarSelo();
  renderCarrinho();
}
function atualizarSelo(pular){
  const selo = document.getElementById("selo");
  selo.textContent = totalItens();
  if(pular){
    selo.classList.remove("pula");
    void selo.offsetWidth;
    selo.classList.add("pula");
  }
}
let timerAviso;
function mostrarAviso(texto){
  const el = document.getElementById("aviso");
  el.innerHTML = `<i></i>${texto}`;
  el.classList.add("ver");
  clearTimeout(timerAviso);
  timerAviso = setTimeout(() => el.classList.remove("ver"), 2600);
}

/* =========================================================
   5. VITRINE
   ========================================================= */
function renderTiras(){
  document.getElementById("tiras").innerHTML = Object.entries(SISTEMAS).map(([chave,s]) => `
    <li>
      <button class="tira" style="--c:${s.cor}" aria-pressed="${filtroAtivo===chave}"
              onclick="filtrar('${chave}')">
        ${ICONES[chave]}
        <span>${s.nome}<small>${s.desc}</small></span>
      </button>
    </li>`).join("");
}
function filtrar(chave){
  filtroAtivo = (filtroAtivo === chave) ? null : chave;
  if(!document.getElementById("grade")) return;
  renderTiras();
  renderGrade();
  document.getElementById("produtos").scrollIntoView({behavior:"smooth",block:"start"});
}
function renderGrade(){
  const lista = filtroAtivo ? PRODUTOS.filter(p => p.sis === filtroAtivo) : PRODUTOS;
  const s = filtroAtivo ? SISTEMAS[filtroAtivo] : null;
  document.getElementById("titulo-vitrine").textContent = s ? `Sistema ${s.nome.toLowerCase()}` : "Todos os brinquedos";
  document.getElementById("sub-vitrine").textContent = s
    ? `${lista.length} ${lista.length === 1 ? "brinquedo" : "brinquedos"} · ${s.desc.toLowerCase()}`
    : "Toque em um brinquedo para ver os detalhes.";
  document.getElementById("limpar").hidden = !filtroAtivo;

  document.getElementById("grade").innerHTML = lista.map(p => {
    const cor = SISTEMAS[p.sis].cor;
    return `
    <article class="cartao" style="--c:${cor}">
      <button class="palco" onclick="abrirProduto('${p.id}')" aria-label="Ver ${p.nome} em tamanho grande">
        ${foto(p.id)}
      </button>
      <div class="corpo">
        <span class="etiqueta">${SISTEMAS[p.sis].nome}</span>
        <h3><button onclick="abrirProduto('${p.id}')" style="text-align:left">${p.nome}</button></h3>
        <p class="idade">${p.idade}</p>
        <p class="preco">${moeda(p.preco)}</p>
        <button class="acao" onclick="adicionarAoCarrinho('${p.id}',1,this)">Adicionar ao carrinho</button>
      </div>
    </article>`;
  }).join("");
}

/* =========================================================
   6. MODAL DO PRODUTO
   ========================================================= */
function abrirProduto(id){
  const p = acharProduto(id);
  if(!p) return;
  produtoAberto = id;
  qtdModal = 1;
  const cor = SISTEMAS[p.sis].cor;
  document.getElementById("modal").style.setProperty("--c", cor);
  document.getElementById("modal").innerHTML = `
    <button class="fechar" onclick="fecharProduto()" aria-label="Fechar">×</button>
    <div class="modal-palco">${foto(p.id)}</div>
    <div class="modal-texto">
      <span class="etiqueta">Sistema ${SISTEMAS[p.sis].nome.toLowerCase()}</span>
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
  const veu = document.getElementById("veu");
  veu.classList.add("aberto");
  document.body.style.overflow = "hidden";
  veu.querySelector(".fechar").focus();
}
function qtdModalMudar(d){
  qtdModal = Math.min(99, Math.max(1, qtdModal + d));
  document.getElementById("qtd-modal").textContent = qtdModal;
}
function adicionarDoModal(botao){
  adicionarAoCarrinho(produtoAberto, qtdModal, botao);
  setTimeout(fecharProduto, 700);
}
function fecharProduto(){
  document.getElementById("veu").classList.remove("aberto");
  document.body.style.overflow = "";
  produtoAberto = null;
}
document.getElementById("veu").addEventListener("click", e => {
  if(e.target.id === "veu") fecharProduto();
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape" && produtoAberto) fecharProduto();
});

/* =========================================================
   7. PÁGINA DO CARRINHO
   ========================================================= */
function renderCarrinho(){
  const alvo = document.getElementById("carrinho-conteudo");
  const ids = Object.keys(carrinho);
  const sub = subtotal();

  if(!ids.length){
    document.getElementById("sub-carrinho").textContent = "Nenhum item por aqui ainda.";
    alvo.innerHTML = `
      <div class="vazio">
        <h2>Carrinho vazio</h2>
        <p>Comece pelo sistema sensorial que sua criança mais precisa regular — as cinco faixas coloridas da loja filtram o catálogo.</p>
        <a class="botao-link" href="index.html">Ver os brinquedos</a>
      </div>`;
    return;
  }

  const n = totalItens();
  document.getElementById("sub-carrinho").textContent = `${n} ${n === 1 ? "item" : "itens"} · revise antes de finalizar.`;
  const frete = sub >= FRETE_GRATIS ? 0 : FRETE;
  const falta = Math.max(0, FRETE_GRATIS - sub);
  const progresso = Math.min(100, (sub / FRETE_GRATIS) * 100);

  alvo.innerHTML = `
  <div class="carrinho-grade">
    <div class="itens">
      ${ids.map(id => {
        const p = acharProduto(id), q = carrinho[id], cor = SISTEMAS[p.sis].cor;
        return `
        <div class="item" style="--c:${cor}">
          <button class="item-mini" onclick="abrirProduto('${id}')" aria-label="Ver ${p.nome}">${foto(id)}</button>
          <div>
            <h3>${p.nome}</h3>
            <p class="un">${SISTEMAS[p.sis].nome} · ${moeda(p.preco)} cada</p>
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
  document.getElementById("sub-carrinho").textContent = "Pedido confirmado.";
  document.getElementById("carrinho-conteudo").innerHTML = `
    <div class="vazio" style="border-style:solid;border-color:var(--verde)">
      <h2>Pedido confirmado</h2>
      <p>${n} ${n === 1 ? "item" : "itens"} · ${moeda(total)}. O código de rastreio chega por e-mail assim que a caixa sair do estoque.</p>
      <a class="botao-link" href="index.html">Voltar para a loja</a>
    </div>`;
  mostrarAviso("Pedido confirmado");
  window.scrollTo({top:0,behavior:"smooth"});
}

/* =========================================================
   8. INÍCIO — roda só o que existe na página aberta
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  atualizarSelo();

  // página inicial
  if(document.getElementById("grade")){
    renderTiras();
    renderGrade();
  }

  // página do carrinho
  if(document.getElementById("carrinho-conteudo")){
    renderCarrinho();
  }
});
