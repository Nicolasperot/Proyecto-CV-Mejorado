/* ENCABEZADO */

const categorias = document.querySelectorAll('.categoria');
const textos = document.querySelectorAll('.texto');

categorias.forEach((categoria, index) => {
  categoria.addEventListener('mouseover', () => {
    textos[index].style.display = 'block';
  });
  categoria.addEventListener('mouseout', () => {
    textos[index].style.display = 'none';
  });
});


/* FIN ENCABEZADO */

/* IMÁGEN */

const contenedorImagen = document.getElementById("contenedorImagen");
const texto = document.getElementById("texto");
const perfil = document.getElementById("perfil");

contenedorImagen.addEventListener("click", function() {
  texto.style.display = "none";
  perfil.style.display = "block";
});

/* FIN IMÁGEN */

/* BOTON EXPERIENCIA Y HABILIDADES */

const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('click', () => {
  const habilidades = document.getElementById('habilidades');
  const experiencia = document.getElementById('experiencia');

  if (habilidades.style.display === 'none') {
    habilidades.style.display = 'block';
    experiencia.style.display = 'block';
  } else {
    habilidades.style.display = 'none';
    experiencia.style.display = 'none';
  }
});

/* FIN BOTON EXPERIENCIA Y HABILIDADES */

/* Carta Presentación */
    
document.getElementById("show-card-btn").addEventListener("click", function(){
    var receiverName = document.getElementById("receiver-name").value;
    document.getElementById("receiver-span").innerHTML = receiverName;
    var card = document.getElementById("card");
    if (card.style.display === "none") {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
  
/* Fin Carta Presentación*/



















