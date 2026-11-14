# Oxford Academic — Design System Exato
**Espelho Oficial Extraído de:** [Tom Rainforth — Oxford Robotics / Statistics (`https://www.robots.ox.ac.uk/~twgr/`)](https://www.robots.ox.ac.uk/~twgr/)  
**Aplicação no Projeto:** Portfólio de Eduardo da Costa Batista (`portfolio/`)  
**Versão:** 2.0.0 (Fidelidade Canônica 1:1)

---

## 1. Princípios de Identidade Visual

O layout exato do site de Tom Rainforth baseia-se na personalização do tema **Jekyll Minima** enriquecida com elementos tipográficos da biblioteca **Source Sans Pro**, alinhamento de parágrafos justificado, layout de foto flutuante à direita e cabeçalho com barra de destaque superior de 5px.

---

## 2. Tokens de Design Exatos

### 2.1 Tipografia
* **Família Tipográfica Principal:**  
  `"Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;`  
  *(Importada diretamente via Google Fonts: `family=Source+Sans+Pro:wght@300;400;600;700`)*
* **Tamanho Base:** `16px`
* **Entrelinha (Line-Height):** `1.5`
* **Cor do Texto Base:** `#111111`
* **Alinhamento do Corpo de Texto:** `text-align: justify` (com `line-height: 1.5` e espaçamento entre parágrafos de exatamente `10px`).

### 2.2 Escala de Cabeçalhos e Títulos
* **Site Title:** `font-size: 26px; font-weight: 300; line-height: 56px; letter-spacing: -1px; color: #424242;`
* **Post Title (H1 das páginas internas):** `font-size: 42px; letter-spacing: -1px; line-height: 1; font-weight: 400; margin-bottom: 15px;`
* **H2 (Seções):** `font-size: 32px; font-weight: 400; margin-top: 25px; margin-bottom: 10px;`
* **H3 (Subseções e Anos):** `font-size: 26px; font-weight: 400; margin-top: 20px; margin-bottom: 10px;`
* **H4:** `font-size: 20px; font-weight: 400; margin-top: 15px; margin-bottom: 10px;`

### 2.3 Cores Canônicas
* **Fundo:** `#ffffff`
* **Barra de Destaque Superior:** `#424242` (`border-top: 5px solid #424242`)
* **Linhas Divisórias / Bordas:** `#e8e8e8` (`1px solid #e8e8e8`)
* **Hiperlinks:** `#2a7ae2`
* **Links Visitados:** `#1756a9`
* **Links no Hover:** `#111111` com sublinhado (`text-decoration: underline`)
* **Cores de Rodapé & Ícones:** `#828282`
* **Pílulas de Publicações (Buttons):** `#f2f2f2` com texto `#337ab7` (no hover: fundo `#337ab7` e texto `#ffffff`)
* **Fundo de Código / BibTeX:** `#eef` com borda `#e8e8e8`

### 2.4 Espaçamento e Grid
* **Largura Máxima do Container (`.wrapper`):** `calc(900px - (20px * 2))` = `860px`
* **Padding Horizontal:** `20px`
* **Padding Vertical do Conteúdo:** `30px 0`
* **Ritmo Vertical:** Margem inferior estrita de `10px` para todos os elementos estruturais (`p, h1, h2, h3, ul, ol`).

---

## 3. Anatomia de Layout

### 3.1 Cabeçalho (`.site-header`)
* Barra superior com faixa de `5px solid #424242`.
* Título flutuante à esquerda com altura de linha de `56px`.
* Navegação flutuante à direita (`float: right; line-height: 56px;`).
* Links separados por margem direita de `20px` (`.site-nav .page-link:not(:last-child)`).
* Menu responsivo com ícone hambúrguer SVG para resoluções ≤ 600px.

### 3.2 Página Inicial (About)
* Container da foto flutuante à direita:
  ```css
  #photo-well {
    float: right;
    margin-left: 25px;
    margin-bottom: 15px;
    padding: 0 0 0 35px;
  }
  #photo-well img {
    max-width: 15em;
    padding: 5px 0;
  }
  ```
* O texto flui e contorna a foto à direita, com alinhamento justificado (`text-align: justify`).

### 3.3 Publicações (`.bibliography` & `.nav-pills`)
* Lista não numerada sem marcadores padrão de bullets: `ul.bibliography { list-style: none; margin-left: 0; }`.
* Botões em formato de pílulas: `Abstract`, `Bib`, `Paper`.
* Ao clicar em `Abstract` ou `Bib`, o conteúdo expande e colapsa diretamente abaixo do artigo.

### 3.4 Rodapé (`.site-footer`)
* Borda superior de `1px solid #e8e8e8`.
* 3 colunas flutuantes:
  - **Coluna 1 (28%):** Nome e e-mail.
  - **Coluna 2 (36%):** Redes com ícones SVG (GitHub, Twitter/X).
  - **Coluna 3 (36%):** Descrição concisa alinhada à direita.
