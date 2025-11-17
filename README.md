# Site Dr. Alexandre Santos - Odontologia e Estética Facial

Site institucional do Dr. Alexandre Santos, especialista em Odontologia Avançada e Harmonização Orofacial.

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Radix UI** - Componentes acessíveis (shadcn/ui)
- **React Router** - Roteamento SPA

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages através do GitHub Actions.

### Configuração Inicial

1. **Habilitar GitHub Pages no repositório:**
   - Vá em Settings > Pages
   - Source: selecione "GitHub Actions"

2. **O workflow já está configurado:**
   - O deploy acontece automaticamente ao fazer push na branch `main` ou `master`
   - O workflow está em `.github/workflows/deploy.yml`

### URLs

- **Repositório `username.github.io`:** `https://username.github.io`
- **Repositório com nome customizado:** `https://username.github.io/nome-do-repo`

O projeto detecta automaticamente o base path baseado no nome do repositório.

## 📁 Estrutura do Projeto

```
/app
├── src/
│   ├── components/     # Componentes React
│   │   ├── layout/    # Header, Footer, etc
│   │   ├── sections/  # Seções da homepage
│   │   └── ui/        # Componentes UI (shadcn/ui)
│   ├── pages/         # Páginas/rotas
│   ├── data/          # Dados estáticos (serviços, depoimentos)
│   └── images/        # Imagens do projeto
├── public/            # Arquivos estáticos
└── .github/           # Workflows do GitHub Actions
```

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build local
- `npm run lint` - Executa ESLint

## 📝 Notas de Desenvolvimento

- O projeto usa React Router com `BrowserRouter` configurado para GitHub Pages
- Imagens devem ser colocadas em `src/images/` e referenciadas com caminhos relativos
- Componentes UI seguem o padrão shadcn/ui

## 📄 Licença

Este projeto é privado e de uso exclusivo do Dr. Alexandre Santos.
