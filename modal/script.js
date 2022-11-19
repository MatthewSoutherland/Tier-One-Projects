let openBtn = document.getElementById("open-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// e.target = the target that triggered the event
window.addEventListener("click", function () {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
