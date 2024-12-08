document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    // Agregar evento de clic a cada enlace
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar comportamiento predeterminado del enlace

            const targetId = event.target.dataset.target;

            // Ocultar todas las secciones
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Mostrar la sección seleccionada
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add("active");
        });
    });
});
