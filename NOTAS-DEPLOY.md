# ⚠️ Notas Importantes para Deploy

## 🔍 Problema com Imagens

As imagens estão sendo referenciadas com caminhos relativos (`src/images/...`), o que não funciona em produção.

### Solução Recomendada

**Opção 1: Mover imagens para `public/` (Mais simples)**

1. Mova as imagens de `src/images/` para `public/images/`
2. Atualize as referências de `src/images/...` para `/images/...` ou `images/...`

**Opção 2: Importar imagens no código (Recomendado para Vite)**

```tsx
// Exemplo
import logoImage from '@/images/logo-as.png'

<img src={logoImage} alt="Logo" />
```

### Arquivos que Precisam ser Atualizados

- `src/components/sections/Hero.tsx` - linha 16
- `src/components/layout/Header.tsx` - linha 207
- `src/data/services.ts` - linhas 29, 48, 67
- `src/components/sections/AboutAlexandre.tsx` - verificar

### Script de Correção Rápida (Opção 1)

Se escolher mover para `public/`:

```bash
# Mover imagens
mv src/images public/images

# Atualizar referências (substituir em todos os arquivos)
# De: src/images/
# Para: /images/ ou images/
```

## ✅ O que Já Está Configurado

- ✅ Workflow do GitHub Actions
- ✅ Configuração do Vite para base path
- ✅ React Router com basename
- ✅ Arquivo 404.html para SPA
- ✅ README atualizado

## 📝 Próximos Passos

1. Corrigir referências de imagens (ver acima)
2. Fazer commit e push
3. Habilitar GitHub Pages no repositório
4. Verificar o deploy automático

