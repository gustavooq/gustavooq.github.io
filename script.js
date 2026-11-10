/**
 * Script Principal do Linktree Pessoal
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar o ano atual no rodapé
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Sistema de Tema Claro / Escuro (com persistência em LocalStorage)
  const themeBtn = document.getElementById('theme-btn');
  const htmlRoot = document.documentElement;

  // Carregar preferência salva ou detectar preferência do sistema
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlRoot.setAttribute('data-theme', 'light');
  } else {
    htmlRoot.setAttribute('data-theme', 'dark');
  }

  themeBtn.addEventListener('click', () => {
    const currentTheme = htmlRoot.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // 3. Sistema de Compartilhamento / Copiar Link com Toast
  const shareBtn = document.getElementById('share-btn');
  const toast = document.getElementById('toast');
  let toastTimeout;

  function showToast(message) {
    if (message) {
      toast.textContent = message;
    }
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: document.title,
      text: 'Confira minha página de links:',
      url: window.location.href,
    };

    // Tenta usar a Web Share API nativa (muito comum em celulares)
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Usuário apenas cancelou o compartilhamento nativo
        if (err.name !== 'AbortError') {
          copyToClipboard();
        }
      }
    } else {
      // Fallback para área de transferência
      copyToClipboard();
    }
  });

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Link copiado para a área de transferência! 🚀');
    } catch (err) {
      // Fallback para navegadores antigos
      const input = document.createElement('input');
      input.value = window.location.href;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      showToast('Link copiado com sucesso! 🚀');
    }
  }
});
