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

```bash

src/
├── app/
│   ├── (public)/                     # Rotas públicas (ex: login)
│   │   └── (login)/                  # Página de login
│   │       ├── page.tsx
│   │       └── layout.tsx
│   ├── (private)/dashboard/          # Área autenticada (restrita)
│   │   ├── components/               # Componentes reutilizáveis do dashboard
│   │   │   └── Menu, UserProfile...  # Menu, logout, links, etc.
│   │   └── eventos/                  # Página de eventos
│   │       ├── components/           # Componentes específicos da tela de eventos
│   │       └── page.tsx
│   └── layout.tsx                    # Layout base da aplicação
│
├── components/                       # Componentes globais (Input, Button, etc)
├── enum/                             # Enums globais (ex: níveis de usuário)
├── interface/                        # Interfaces TypeScript
├── mock/                             # Dados simulados (ex: usuários, eventos)
├── types/                            # Tipagens auxiliares
├── middleware.ts                     # Middleware para proteção de rotas

```

## ▶️ Como rodar o projeto

1. Instale as dependências:

```bash
npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
Acesse: http://localhost:3000
```

🔐 Autenticação
A autenticação é feita por cookies, verificados via middleware.ts. Usuários válidos estão mockados no arquivo:

``` bash
src/mock/users-response.mock.ts
```

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