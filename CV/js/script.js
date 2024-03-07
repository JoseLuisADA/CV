document.addEventListener('DOMContentLoaded', function() {

    initializeThemeToggle();

    // Función para hacer el desplazamiento suave al hacer clic en los enlaces del footer
    const footerLinks = document.querySelectorAll('footer nav ul li a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID de la sección objetivo
            const targetSection = document.getElementById(targetId); // Obtener la sección objetivo
            const offsetTop = targetSection.offsetTop; // Obtener la posición de desplazamiento
            // Hacer el desplazamiento suave hacia la sección objetivo
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        });
    });

    const links = document.querySelectorAll('a[href^="#"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }
        
        function clickHandler(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            const offsetTop = document.querySelector(href).offsetTop;
    
            scroll({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    
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
    const toggleThemeButton = document.querySelector('#toggle-theme');
    if(toggleThemeButton) {
        toggleThemeButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            // Guardar la preferencia de tema en el almacenamiento local
            if(document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
                document.querySelector('header').style.transition = 'background 0.9s ease';
                document.querySelector('header').style.background = 'url("CV/resources/images/noche.jpg") center/cover';
            } else {
                localStorage.removeItem('theme');
                document.querySelector('header').style.transition = 'background 0.9s ease';
                document.querySelector('header').style.background = 'url("CV/resources/images/dia.webp") center/cover';
            }
        });
    }

    // Aplicar el tema según la preferencia guardada al cargar la página
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
        document.querySelector('header').style.transition = 'background 0.9s ease';
        document.querySelector('header').style.background = 'url("CV/resources/images/noche.jpg") center/cover';
    } else {
        document.querySelector('header').style.transition = 'background 0.9s ease';
        document.querySelector('header').style.background = 'url("CV/resources/images/dia.webp") center/cover';
    }
}

