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


AOS.init({
  once: true,
  duration: 1000
});

function mostrarTexto(tipo) {
  const textos = {
    Arquitecta: "Artistas que se definen por una carga emotiva intensa en sus letras, interpretaciones y discursos públicos. Conectan desde la vulnerabilidad.",
    Performatica: "Popstars cuya fuerza está en el escenario: shows complejos, coreografías potentes, cuerpos en movimiento y energía escénica total.",
    Estética: "Figuras que construyen su identidad a través de lo visual: vestuarios icónicos, maquillajes, portadas y una coherencia estética marcada.",
    Íntima: "Artistas que se acercan al público desde historias personales, confesiones y una comunicación emocional directa. Parecen cercanas, reales."
  };

  const imagenes = {
    Arquitecta: [
      "beyonce.png",
      "rihanna.png",
      "shakira.png"
    ],
    Íntima: [
      "adele.png",
      "taylor.png",
      "ariana.png"
    ],
    Performatica: [
      "lady.png",
      "katy.png",
      "nickiminajj.png"
    ],
    Estética: [
      "britney.png",
      "miley.png"
    ]
  };

  document.getElementById("texto-subperfil").innerHTML = `
    <p>${textos[tipo]}</p>
    <div id="imagen-subperfil" class="contenedor-imagen"></div>
  `;

  const contenedor = document.getElementById("imagen-subperfil");
  const rotaciones = ["rotar-izquierda", "rotar-derecha", "rotar-centro"];

  imagenes[tipo].forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = tipo;
    img.className = `imagen-subperfil ${rotaciones[index % rotaciones.length]}`;
    contenedor.appendChild(img);
  });
}






const logo = document.querySelector('.logo_giratorio');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    logo.style.opacity = '0';
  } else {
    logo.style.opacity = '1';
  }
});



