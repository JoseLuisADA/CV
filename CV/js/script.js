document.addEventListener('DOMContentLoaded', function() {
    console.log("Documento cargado");

    initializeThemeToggle();
    
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

    // Contenido de analytics.js
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'TU_ID_DE_SEGUIMIENTO');

});

function initializeThemeToggle() {
    console.log("Entrando en cambio de tema");
    const toggleThemeButton = document.querySelector('#toggle-theme');

    if(toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            console.log("Itento de cambio de tema");
            document.body.classList.toggle('dark-theme');
            // Guardar la preferencia de tema en el almacenamiento local
            if(document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.removeItem('theme');
            }
        });
    }

    // Aplicar el tema según la preferencia guardada al cargar la página
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

