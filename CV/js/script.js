document.addEventListener('DOMContentLoaded', function() {
    // Abrir lightbox
    document.querySelectorAll('.proyecto-item').forEach(item => {
        item.onclick = function(e) {
            e.preventDefault();
            document.querySelector(item.getAttribute('href')).style.display = 'flex';
        }
    });

    // Cerrar lightbox
    document.querySelectorAll('.lightbox .close').forEach(item => {
        item.onclick = function(e) {
            e.preventDefault();
            this.parentElement.parentElement.style.display = 'none';
        }
    });
});

// Contenido de analytics.js
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'TU_ID_DE_SEGUIMIENTO');