document.addEventListener('DOMContentLoaded', () => {
    const carruselInner = document.querySelector('.carrusel-inner');
    const images = document.querySelectorAll('.carrusel-inner img');
    let index = 0;
    const interval = 3000; // Tiempo entre cambios en milisegundos

    function moveToNextImage() {
        index = (index + 1) % images.length;
        carruselInner.style.transform = translateX(-${index * 20}%);
    }

    setInterval(moveToNextImage, interval);
});
