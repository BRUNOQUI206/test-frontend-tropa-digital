# 🧠 Tropa Digital - Painel Administrativo

Este é um projeto construído com **Next.js 15.1.6** e **React 19**, utilizando a abordagem moderna de **App Router** com estilização via **Tailwind CSS**. O objetivo é oferecer um painel administrativo para gerenciar eventos e equipes, com autenticação via cookies e layout responsivo.

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15.1.6** — Framework para aplicações React com suporte SSR/CSR
- **React 19** — Biblioteca para construção de interfaces
- **TypeScript** — Tipagem estática para maior confiabilidade no código
- **Tailwind CSS 3.4.1** — Estilização com classes utilitárias
- **Lucide React** — Conjunto de ícones leves e elegantes
- **js-cookie** — Manipulação de cookies no client-side
- **clsx** — Utilitário para construção condicional de classes
- **@fontsource/roboto** — Fonte Roboto auto-hospedada

## 📁 Estrutura de Pastas

src/
├─ app/ # Rotas com App Router (Next 13+)
│ ├─ (public)/ # Rotas públicas (login, etc)
│ ├─ (private)/dashboard # Painel interno com autenticação
│ │ ├─ eventos/ # Página de eventos
│ │ └─ components/ # Componentes reutilizáveis do dashboard
├─ components/ # Componentes globais (botões, inputs, etc)
├─ mock/ # Dados mockados (ex: usuários, eventos)
├─ enum/ # Enums globais (nível de usuário, etc)
├─ interface/ # Tipagens TypeScript
├─ middleware.ts # Middleware de autenticação com cookies

csharp
Copiar
Editar

## ▶️ Como rodar o projeto

1. Instale as dependências:

```bash
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash
Copiar
Editar
npm run dev
# ou
yarn dev
Acesse: http://localhost:3000

🔐 Autenticação
A autenticação é feita por cookies, verificados via middleware.ts. Usuários válidos estão mockados no arquivo:

bash
Copiar
Editar
src/mock/users-response.mock.ts
✨ Funcionalidades
Página de login com cookies persistentes

Redirecionamento de rotas baseado em autenticação

Menu lateral com controle ativo baseado em rota

Listagem de eventos

Estilização responsiva e limpa com Tailwind

Componentes desacoplados e reutilizáveis

📦 Deploy
Recomendado o deploy via Vercel, com suporte nativo ao App Router do Next.js.

Desenvolvido por Bruno Guilherme dos Santos ✨