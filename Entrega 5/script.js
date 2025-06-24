const scrollElements = document.querySelectorAll('.scroll-fade');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el)) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Info para cada artista
const infoArtistas = {
  Beyonce: "Dua Lipa: Cantante británica-albanesa. Ícono pop moderno con estética disco y empoderamiento.",
  Taylor: "Billie Eilish: Revolucionó el pop con su estilo minimalista y oscuro. Ganadora de múltiples Grammys.",
  Rihanna: "Doja Cat: Fusiona pop, rap y R&B con una estética visual arriesgada y versátil.",
  Lady: "hola",
  Britney: "hola",
  Ariana: "hola",
  Adele: "hola",
  Nicki: "hola",
  Miley: "hola",
  Shakira: "hola",
  Katy: "hola",
};

// Mostrar popup
document.querySelectorAll('.boton-artista').forEach(img => {
  img.addEventListener('click', () => {
    const clave = img.dataset.artista;
    const contenido = infoArtistas[clave] || "Información no disponible.";
    document.getElementById('contenido-popup').textContent = contenido;
    document.getElementById('popup').style.display = 'block';
  });
});

// Cerrar popup
document.querySelector('.cerrar').addEventListener('click', () => {
  document.getElementById('popup').style.display = 'none';
});

