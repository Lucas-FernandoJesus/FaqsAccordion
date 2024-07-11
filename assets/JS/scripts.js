document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.icon');
  
            if (content.style.display === 'block') {
                // Fechar o conteúdo atual e redefinir o ícone
                content.style.display = 'none';
                icon.src = './assets/images/icon-plus.svg';
            } else {
                // Fechar todos os conteúdos e redefinir os ícones
                document.querySelectorAll('.accordion-content').forEach(item => item.style.display = 'none');
                document.querySelectorAll('.icon').forEach(icon => icon.src = './assets/images/icon-plus.svg');
  
                // Abrir o conteúdo clicado e atualizar o ícone
                content.style.display = 'block';
                icon.src = './assets/images/icon-minus.svg';
            }
        });
    });
  });
  