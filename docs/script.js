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

(function(vegaEmbed) {
  // todo el largo código del gráfico, hasta el vegaEmbed del final que busca un elemento html con un id específico para insertar el gráfico (esto es lo más importante y debe ser el mismo id que el que se encuentra en el archivo HTML)
   var embedOpt = {"mode": "vega-lite"};

    function showError(el, error){
        el.innerHTML = ('<div class="error" style="color:red;">'
                        + '<p>JavaScript Error: ' + error.message + '</p>'
                        + "<p>This usually means there's a typo in your chart specification. "
                        + "See the javascript console for the full traceback.</p>"
                        + '</div>');
        throw error;
    }
    const el = document.getElementById('vis');
    vegaEmbed("#vis", spec, embedOpt)
      .catch(error => showError(el, error));
})(vegaEmbed);

AOS.init({
  once: true,
  duration: 1000
});

function mostrarTexto(tipo) {
  const textos = {
    emocional: "Artistas que se definen por una carga emotiva intensa en sus letras, interpretaciones y discursos públicos. Conectan desde la vulnerabilidad.",
    performativa: "Popstars cuya fuerza está en el escenario: shows complejos, coreografías potentes, cuerpos en movimiento y energía escénica total.",
    estética: "Figuras que construyen su identidad a través de lo visual: vestuarios icónicos, maquillajes, portadas y una coherencia estética marcada.",
    narrativa: "Artistas que se acercan al público desde historias personales, confesiones y una comunicación emocional directa. Parecen cercanas, reales."
  };

  const imagenes = {
    Arquitecta: ["/Users/agustinavillavicencio/Desktop/Proyecto-semestral/beyonce_png.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/Rihanna-PNG-Background.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/Shakira-Transparent-Image.png"],
    Íntima: ["/Users/agustinavillavicencio/Desktop/Proyecto-semestral/1948861_8837c.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/Adele-Singing-Transparent-PNG.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/elegant-platinum-hairstyle-portrait-2bqk7ridqr1cz0dm.png"],
    Performatica: ["/Users/agustinavillavicencio/Desktop/Proyecto-semestral/Lady-Gaga-Transparent-File.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/Katy-Perry-PNG-Image.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/157-1576628_nicki-minaj-png-transparent-photo-nicki-minaj-anaconda.png"],
    Ícono: ["/Users/agustinavillavicencio/Desktop/Proyecto-semestral/Britney-Spears-PNG-Download-Image.png", "/Users/agustinavillavicencio/Desktop/Proyecto-semestral/miley-cyrus-png.png"]
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
  
    // Aplica clase de rotación alternada
    img.classList.add(rotaciones[index % rotaciones.length]);
  
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



