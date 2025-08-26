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

// 🔧 Archivo: config.js
const whatsappConfig = {
  number: "598271560", // 👉 Reemplaza con el número real
  mensajesPlanes: {
    impulso: "Hola, quiero información sobre el Plan Impulso",
    transforma: "Hola, quiero información sobre el Plan Transforma",
    elite: "Hola, quiero información sobre el Plan Elite"
  }
};

// 📌 Función global para abrir WhatsApp
function contactar(plan) {
  const mensaje = encodeURIComponent(whatsappConfig.mensajesPlanes[plan]);
  const url = `https://wa.me/${whatsappConfig.number}?text=${mensaje}`;
  window.open(url, "_blank");
}
