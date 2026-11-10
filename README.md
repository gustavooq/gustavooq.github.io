# 🌟 Meu Linktree no GitHub Pages

Uma página de links pessoal, moderna, ultrarrápida e 100% gratuita para hospedar no **GitHub Pages**.

---

## 🚀 Como Visualizar Agora no seu Computador
Basta ir até a pasta onde este projeto foi criado e dar **dois cliques no arquivo `index.html`**. Ele abrirá diretamente no seu navegador padrão (Chrome, Edge, Firefox, etc.) para você ver como ficou!

---

## 🎨 Como Personalizar Seus Dados

Abra o arquivo `index.html` em qualquer editor de texto (como VS Code, Bloco de Notas ou aqui no Antigravity):

1. **Sua Foto de Perfil**:
   - Salve sua foto (ex: `foto.jpg` ou `avatar.png`) dentro desta pasta `meu-linktree`.
   - No `index.html`, procure pela linha `<img src="avatar.svg" ...>` e troque `avatar.svg` pelo nome da sua foto (ex: `src="foto.jpg"`).

2. **Seu Nome e Bio**:
   - Altere `Seu Nome`, `@seuusuario` e a descrição na seção `<div class="profile-info">`.

3. **Seus Ícones de Redes Sociais**:
   - Na seção `<div class="social-bar">`, altere os links `href="..."` para o seu usuário do GitHub, LinkedIn, Instagram e WhatsApp.

4. **Seus Links**:
   - Na seção `<section class="links-list">`, edite os títulos, descrições, links `href` e emojis dos cartões.
   - Para adicionar um novo link, basta copiar um dos blocos `<a class="link-card">...</a>` e colar abaixo.

---

## 🌐 Como Publicar Gratuitamente no GitHub Pages

Você tem duas formas de escolher a URL do seu Linktree:

- **Opção 1 (Recomendada - URL principal):** `https://seu-usuario.github.io`
- **Opção 2 (Subpasta):** `https://seu-usuario.github.io/links`

---

### Passo a Passo: Publicando pelo Navegador (Sem instalar nada!)

1. Acesse [github.com](https://github.com) e faça login na sua conta.
2. No canto superior direito, clique no botão **`+`** e selecione **`New repository`** (Novo repositório).
3. No campo **Repository name**:
   - Se quiser que seu linktree seja seu site principal: digite exatamente `seu-usuario.github.io` (substitua `seu-usuario` pelo seu username exato do GitHub).
   - Se preferir uma página secundária: digite por exemplo `links` ou `bio`.
4. Marque o repositório como **Public** (Público).
5. Deixe desmarcadas as opções de README, .gitignore e licença e clique em **Create repository**.
6. Na tela que aparecer, clique no link **"uploading an existing file"** (enviar arquivos existentes).
7. Arraste todos os arquivos desta pasta:
   - `index.html`
   - `style.css`
   - `script.js`
   - `avatar.svg` (e sua foto de perfil, se tiver)
8. Clique no botão verde **Commit changes**.

---

### Ativando o GitHub Pages:

> *Nota: Se você nomeou o repositório como `seu-usuario.github.io`, o GitHub Pages muitas vezes é ativado automaticamente na branch `main`!*

Para conferir ou ativar manualmente:
1. No seu repositório no GitHub, clique na aba **Settings** (Configurações) no topo.
2. Na barra lateral esquerda, clique em **Pages** (dentro da seção *Code and automation*).
3. Em **Build and deployment > Source**, selecione **Deploy from a branch**.
4. Em **Branch**, selecione `main` (ou `master`) e a pasta `/(root)`.
5. Clique em **Save**.
6. Aguarde cerca de 1 a 2 minutos. Atualize a página e o GitHub exibirá no topo da tela o link oficial:
   👉 **`https://seu-usuario.github.io`** (ou `https://seu-usuario.github.io/links`).

Pronto! Agora você pode colocar esse link na bio do seu Instagram, LinkedIn, GitHub e WhatsApp! 🎉
