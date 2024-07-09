let currentIndex = 0;
const images = document.querySelectorAll('.gallery .thumbnail img');

function openImage(imgElement) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    currentIndex = Array.from(images).indexOf(imgElement);

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.alt;
}

function closeImage() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}