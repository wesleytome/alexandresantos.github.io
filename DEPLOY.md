# 📦 Guia de Deploy - GitHub Pages

Este guia explica como fazer o deploy do site no GitHub Pages.

## ✅ Pré-requisitos

1. Repositório criado no GitHub
2. Código commitado e enviado para o GitHub
3. Permissões para configurar GitHub Pages no repositório

## 🚀 Passo a Passo

### 1. Habilitar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Salve as configurações

### 2. Fazer Push do Código

O workflow está configurado para fazer deploy automaticamente quando você fizer push na branch `main` ou `master`:

```bash
git add .
git commit -m "Configurar deploy no GitHub Pages"
git push origin main
```

### 3. Verificar o Deploy

1. Vá em **Actions** no repositório
2. Você verá o workflow "Deploy to GitHub Pages" em execução
3. Aguarde a conclusão (geralmente 2-3 minutos)
4. O site estará disponível em:
   - Se o repositório for `username.github.io`: `https://username.github.io`
   - Se for outro nome: `https://username.github.io/nome-do-repo`

## 🔧 Configuração de Base Path

O projeto detecta automaticamente o base path baseado no nome do repositório:

- **Repositório `username.github.io`**: Base path = `/` (raiz)
- **Outros repositórios**: Base path = `/nome-do-repo/`

Isso é configurado automaticamente no workflow do GitHub Actions.

## 🐛 Solução de Problemas

### Erro: "Get Pages site failed" ou "Not Found"

**Este é o erro mais comum!** Significa que o GitHub Pages não está habilitado no repositório.

**Solução:**
1. Acesse o repositório no GitHub
2. Vá em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **GitHub Actions**
5. Salve as configurações
6. Execute o workflow novamente (faça um novo push ou execute manualmente em Actions)

### O site não carrega após o deploy

1. Verifique se o GitHub Pages está habilitado (Settings > Pages)
2. Verifique se o workflow foi executado com sucesso (Actions)
3. Aguarde alguns minutos - pode levar até 10 minutos para o DNS propagar

### Rotas não funcionam (404)

O arquivo `public/404.html` está configurado para redirecionar para `index.html`, permitindo que o React Router funcione corretamente. Se ainda houver problemas:

1. Verifique se o arquivo `404.html` está na pasta `public/`
2. Verifique se o base path está configurado corretamente no `vite.config.ts`

### Imagens não aparecem

1. Verifique se as imagens estão em `src/images/`
2. Use caminhos relativos ou importe as imagens no código
3. Após o build, verifique se as imagens estão na pasta `dist/assets/`

## 📝 Notas Importantes

- O deploy é automático a cada push na branch `main` ou `master`
- Você também pode fazer deploy manual através da aba **Actions** > **Deploy to GitHub Pages** > **Run workflow**
- O build de produção é gerado na pasta `dist/`
- Não commite a pasta `dist/` - ela é gerada automaticamente pelo workflow

## 🔄 Atualizar o Site

Para atualizar o site, basta fazer push das alterações:

```bash
git add .
git commit -m "Atualizar conteúdo"
git push origin main
```

O deploy será feito automaticamente!

