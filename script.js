document.addEventListener("DOMContentLoaded", function() {
    // Scroll suave para los enlaces
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Agregar animación al cargar la página
    const title = document.querySelector(".animate-title");
    setTimeout(() => {
        title.style.opacity = 1;
    }, 500);
});