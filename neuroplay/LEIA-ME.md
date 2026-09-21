# NeuroPlay — como colocar as fotos

Salve as fotos dentro da pasta `img/` com estes nomes exatos
(minúsculas, com hífen, sem acento):

| Produto                          | Nome do arquivo              |
|----------------------------------|------------------------------|
| Cubo Infinito Zenith             | cubo-infinito.jpg            |
| Pop It Galáxia                   | pop-it-galaxia.jpg           |
| Ampulheta de Bolhas Lenta        | ampulheta-bolhas.jpg         |
| Fone Abafador Calma              | fone-abafador.jpg            |
| Colete de Compressão Abraço      | colete-compressao.jpg        |
| Disco de Equilíbrio Gira         | disco-equilibrio.jpg         |
| Tubo Sensorial Chuva             | tubo-chuva.jpg               |
| Massinha Terapêutica Resistência | massinha-terapeutica.jpg     |
| Projetor de Ondas Noturno        | projetor-ondas.jpg           |

Se quiser usar outro nome ou trocar .jpg por .png / .webp, mude o campo
`foto:` do produto correspondente na seção 1 do arquivo `js/script.js`.

## Tamanho recomendado

- Proporção 4:3 (ex.: 1200 × 900 px)
- Até 300 KB por foto, para a página abrir rápido
- Fundo claro e uniforme fica melhor, porque a moldura colorida do card
  já carrega a cor do sistema sensorial

## Enquanto a foto não existe

Se o arquivo estiver faltando ou com o nome errado, a ilustração antiga
aparece no lugar automaticamente — a página não quebra nem mostra ícone
de imagem quebrada.

## Estrutura da pasta

```
neuroplay/
├── index.html
├── carrinho.html
├── css/estilo.css
├── js/script.js
└── img/          ← as fotos vão aqui
```
