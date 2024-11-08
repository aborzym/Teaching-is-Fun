let currentImageIndex = 0; // Indeks aktualnie otwartego zdjęcia

function openModal(index) {
  currentImageIndex = index;
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = `./assets/images/refs/ref${index}.jpg`;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

window.onclick = function (event) {
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
};
