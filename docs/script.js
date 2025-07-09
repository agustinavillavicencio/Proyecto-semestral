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

AOS.init({
  once: true,
  duration: 1000
});

function mostrarTexto(tipo) {
  const textos = {
    Arquitecta: "Estilo elegante y sofisticado, presencia dominante y segura en escena, comunicación asertiva y manejo estratégico de imagen pública.",
    Performatica: "Estética llamativa y experimental, desplante teatral y explosivo, actitud disruptiva, uso de símbolos visuales, interacción fuerte con fans.",
    Estética: "Estilo variable, actitud resiliente y abierta, comunicación franca sobre luchas personales, desplante fluctuante.",
    Íntima: "Estilo sobrio y simple, desplante íntimo y emocional, comunicación cercana y empática, narrativas personales profundas."
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

function toggleVisualizacion() {
  const iframe2 = document.querySelector('.iframe-superpuesta');
  if (iframe2.style.opacity === "1") {
    iframe2.style.opacity = "0";
    iframe2.style.pointerEvents = "none";
  } else {
    iframe2.style.opacity = "1";
    iframe2.style.pointerEvents = "auto";
  }
}

// Info específica para la sección de queens (Visualización 1)
const infoQueens = {
  Beyonce: "Reconocida por su fuerza escénica, versatilidad y liderazgo artístico. Su carrera ha marcado un antes y un después en la industria del pop.",
  Taylor: "Maestra de la narrativa personal, Taylor Swift ha sabido reinventarse en cada álbum, dominando tanto la industria musical como el discurso público.",
  Rihanna: "Su impacto trasciende la música, con una estética poderosa y una presencia cultural global que redefine el estrellato.",
  Lady: "Innovadora visual y sonora. Lady Gaga rompió esquemas con su teatralidad y sensibilidad artística.",
  Britney: "Icono de los 2000, Britney simboliza la cultura pop global y la complejidad del éxito en la era mediática.",
  Ariana: "Con una voz virtuosa y una estética cuidada, Ariana combina el legado del R&B con el pop contemporáneo.",
  Adele: "Su honestidad emocional y voz poderosa la han convertido en una figura imprescindible del pop intimista.",
  Nicki: "Desafiante y camaleónica, Nicki Minaj redefinió el papel femenino en el rap-pop con identidad y performance.",
  Miley: "Miley Cyrus ha transitado múltiples etapas creativas, abrazando la transformación como parte esencial de su identidad artística.",
  Shakira: "Fusión cultural y energía. Shakira es una de las artistas más internacionales y versátiles del pop.",
  Katy: "Con su estilo visual extravagante y éxitos contagiosos, Katy Perry se ha consolidado como un ícono pop de su generación."
};

// Evento de clic para mostrar el popup de artistas queens
document.querySelectorAll('.artista-img').forEach(img => {
  img.addEventListener('click', () => {
    const clave = img.dataset.artista;
    const contenido = infoQueens[clave] || "Información no disponible.";
    document.getElementById('contenido-popup-queen').textContent = contenido;
    document.getElementById('popup-queen').style.display = 'block';
  });
});

// Evento para cerrar el popup
document.querySelector('.cerrar-queen').addEventListener('click', () => {
  document.getElementById('popup-queen').style.display = 'none';
});



