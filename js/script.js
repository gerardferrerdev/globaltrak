document.addEventListener('DOMContentLoaded', () => {
    // 1. FUNÇÃO PARA ROLAGEM SUAVE (Smooth Scroll)
    
    // Seleciona todos os links que começam com '#' (âncoras)
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            
            // Verifica se o link é apenas uma âncora (não um link externo)
            const href = this.getAttribute('href');
            if (href === '#' || href.length < 2) {
                return; // Ignora links vazios
            }
            
            e.preventDefault(); // Impede o comportamento padrão de salto
            
            // Encontra o elemento de destino
            const targetId = href.substring(1); // Remove o '#'
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Usa a API de rolagem nativa do navegador para rolagem suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. FUNÇÃO ADICIONAL: ADICIONAR CLASSE AO HEADER NA ROLAGEM
    // (Opcional, mas útil para mudar o estilo do header quando o usuário rola)

    const header = document.getElementById('main-header');
    
    // Se o cabeçalho for fixo (sticky), isso garante que ele esteja sempre visível.
    // Se quisermos que ele mude de cor ao rolar, usaremos este código:

    // window.addEventListener('scroll', () => {
    //     // Se a posição da rolagem for maior que 50px
    //     if (window.scrollY > 50) {
    //         header.classList.add('scrolled'); 
    //     } else {
    //         header.classList.remove('scrolled');
    //     }
    // });
    
    // Se você implementar o código acima, adicione este CSS ao style.css:
    /*
    .scrolled {
        background-color: var(--color-primary); 
        opacity: 0.95; 
        transition: opacity 0.3s;
    }
    */

});