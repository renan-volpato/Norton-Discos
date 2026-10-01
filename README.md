# 🎶 Norton Discos — Loja Virtual de Discos de Vinil

Aplicação web desenvolvida com Angular para simular uma loja virtual de discos. O projeto apresenta um catálogo de álbuns nacionais e internacionais, permite consultar detalhes dos produtos, pesquisar por nome ou artista, adicionar itens à cesta e realizar um fluxo básico de autenticação.

<div align="center">

![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/Style-SCSS-CF649A?logo=sass&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-F2E8D5?style=flat&labelColor=5C0A0A&color=1A1A1A)

</div>

---

## ✨ Sobre o projeto

A Norton Discos foi criado para representar uma loja virtual especializada em discos de vinil. A aplicação possui uma identidade visual inspirada em lojas de música clássicas, utilizando tons de bege, vermelho escuro e preto, além das fontes Bebas Neue e Poppins.

O catálogo reúne álbuns de diferentes estilos e épocas, incluindo rock, MPB, indie, pop, rap, trip-hop, heavy metal e música brasileira.

## 🚀 Funcionalidades

- 🛍️ Vitrine de produtos com catálogo de discos de vinil;
- 🔎 Busca por álbum ou artista;
- 💿 Página de detalhes do produto, com descrição, ano, região, preço e faixas;
- 🛒 Cesta de compras;
- ➕ Adição de produtos com controle de quantidade;
- 🗑️ Remoção de itens e limpeza da cesta;
- 💰 Cálculo automático do total da compra;
- 👤 Cadastro de usuário;
- 🔐 Login simulado usando localStorage;
- 🔁 Recuperação de senha e navegação entre as telas;
- 📱 Interface organizada com componentes reutilizáveis;
- ⚡ Renderização no servidor preparada com Angular SSR e Express;
- 🧪 Estrutura de testes unitários com Vitest.

> Observação: atualmente o projeto utiliza dados locais em memória e localStorage. Ainda não existe uma API ou banco de dados conectado para persistir produtos, usuários ou pedidos em um ambiente real.

## 🧰 Tecnologias utilizadas

- Angular 22 — framework principal da aplicação;
- TypeScript — tipagem e lógica da aplicação;
- SCSS — estilos personalizados e organização visual;
- Bootstrap 5 — componentes e utilitários de interface;
- RxJS — gerenciamento reativo do estado da cesta e dos produtos;
- Angular Router — navegação entre páginas;
- Angular SSR — renderização no servidor;
- Express 5 — servidor Node utilizado pelo SSR;
- Vitest — testes unitários;
- Prettier — padronização da formatação do código.

## 📁 Estrutura do projeto

```text
loja-virtual/
├── public/                         # Imagens e arquivos públicos
├── src/
│   ├── app/
│   │   ├── core/                   # Regras centrais e serviços da aplicação
│   │   │   ├── models/             # Modelos de produto e itens da cesta
│   │   │   ├── validators/         # Validadores de formulários
│   │   │   ├── auth.service.ts     # Cadastro e validação de login
│   │   │   ├── carrinho.ts         # Estado e operações da cesta
│   │   │   └── produto.ts          # Catálogo e busca de produtos
│   │   ├── pages/                  # Telas acessadas pelas rotas
│   │   │   ├── busca/              # Resultados de pesquisa
│   │   │   ├── cadastro/           # Cadastro de usuário
│   │   │   ├── cesta/              # Cesta de compras
│   │   │   ├── esqueci-senha/      # Recuperação de senha
│   │   │   ├── login/              # Autenticação
│   │   │   ├── produto-detalhe/    # Detalhes de um disco
│   │   │   └── vitrine/            # Catálogo principal
│   │   ├── shared/                 # Componentes reutilizáveis
│   │   │   ├── card-produto/       # Card de produto
│   │   │   ├── filtro-barra/       # Barra de filtros e pesquisa
│   │   │   └── header/             # Cabeçalho e navegação
│   │   ├── app.ts                  # Componente raiz
│   │   ├── app.routes.ts           # Rotas da aplicação
│   │   └── app.config.ts           # Configuração global do Angular
│   ├── main.ts                     # Inicialização no navegador
│   ├── main.server.ts              # Inicialização para SSR
│   ├── server.ts                   # Servidor Express/Angular SSR
│   └── styles.scss                 # Tema visual global
├── angular.json                    # Configurações do Angular CLI
├── package.json                    # Scripts e dependências
├── package-lock.json               # Versões exatas das dependências
├── .gitignore                      # Arquivos ignorados pelo Git
├── .editorconfig                   # Regras de estilo do projeto
├── .prettierrc                     # Formatação de código
├── README.md                       # Documentação do projeto
└── .vscode/                        # Configurações do VS Code
```

## 🧭 Rotas disponíveis

| Rota | Tela |
| --- | --- |
| `/` | Login |
| `/login` | Login |
| `/vitrine` | Catálogo de produtos |
| `/produto/:id` | Detalhes de um produto |
| `/cesta` | Cesta de compras |
| `/cadastro` | Cadastro de usuário |
| `/esqueci-senha` | Recuperação de senha |
| `/busca` | Busca de produtos |

## 🧠 Como a aplicação funciona

A inicialização do navegador acontece em `src/main.ts`, que carrega o componente raiz `App` e a configuração global da aplicação. O componente principal reúne o `Header` e o `RouterOutlet`, responsável por renderizar cada página de acordo com a rota acessada.

O catálogo é mantido pelo `ProdutoService`, que disponibiliza os produtos e realiza buscas por nome ou artista. A `CarrinhoService` controla os itens da cesta por meio de um `BehaviorSubject`, permitindo que os componentes acompanhem as alterações de forma reativa.

O `AuthService` armazena os dados do usuário no navegador usando a chave `vinilshop-usuario`. Essa autenticação é apenas demonstrativa e deve ser substituída por um mecanismo seguro ligado a uma API em uma versão de produção.

## 🛠️ Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado;
- npm 11 ou versão compatível;
- Git instalado.

### Instalação

```bash
git clone https://github.com/SposatoDev/DiscotecaWeb.git
cd DiscotecaWeb/loja-virtual
npm install
```

### Servidor de desenvolvimento

```bash
npm start
```

Depois, acesse:

```text
http://localhost:4200/
```

A aplicação será recarregada automaticamente quando os arquivos forem alterados.

## 📦 Build de produção

Para gerar a versão otimizada do projeto:

```bash
npm run build
```

Os arquivos gerados serão disponibilizados na pasta `dist/`.

## 🖥️ Executar a versão SSR

O projeto está configurado para gerar uma aplicação Angular com renderização no servidor:

```bash
npm run build
npm run serve:ssr:loja-virtual
```

Por padrão, o servidor Express será executado na porta `4000`. É possível alterar a porta usando a variável de ambiente `PORT`:

```bash
PORT=8080 npm run serve:ssr:loja-virtual
```

O projeto utiliza o Vitest integrado ao Angular para executar os testes.

## 🎨 Identidade visual

O tema global está definido em `src/styles.scss` e utiliza:

- Fundo bege claro para a base da interface;
- Bege mais escuro para cards e seções;
- Vermelho escuro como cor de destaque;
- Preto para textos, navegação e rodapé;
- Bebas Neue para títulos;
- Poppins para textos e elementos de interface.

## 👨‍💻 Desenvolvimento

Projeto desenvolvido por **Renan Volpato**.
