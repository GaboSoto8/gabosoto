// -----------------------------
// GALERÍA AUTOMÁTICA
// -----------------------------
let currentIndex = 0;
const images = document.querySelectorAll(".gallery img");
const totalImages = images.length;

// Función que cambia la imagen activa
function changeImage() {
  // Quitar la clase "active" de todas
  images.forEach(img => img.classList.remove("active"));
  
  // Sumar al índice y reiniciar si se pasa
  currentIndex = (currentIndex + 1) % totalImages;
  
  // Mostrar imagen correspondiente
  images[currentIndex].classList.add("active");
}

// Inicia el slider automático cada 4 segundos
setInterval(changeImage, 4000);

function scrollToPlan(planId) {
  const planElement = document.getElementById(planId);
  if(planElement) {
    planElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// Botones de WhatsApp en planes
document.querySelectorAll('.btn-whatsapp').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.getAttribute('data-plan'); 
    const numero = "59898271560"; // Tu número de WhatsApp sin "+" y con código de país
    const mensaje = `Hola quiero más información sobre el PLAN ${plan}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank'); 
  });
});
