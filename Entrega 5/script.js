// Detectar elementos con la clase .scroll-fade
const scrollElements = document.querySelectorAll('.scroll-fade');

// Función para verificar si el elemento está en vista
const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

// Añadir clase visible al hacer scroll
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add('visible');
    }
  });
};

// Ejecutar cuando se hace scroll o se carga la página
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);
