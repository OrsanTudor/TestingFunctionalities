// When the button is clicked, show the message
document.getElementById("clickMeBtn").addEventListener("click", () => {
  document.getElementById("message").textContent = "You clicked the button!";
});

// Modal functionality
var modal = document.getElementById("myModal");
var modalBtn = document.getElementById("modalBtn");
var closeModal = document.getElementsByClassName("close")[0];

// Show the modal
modalBtn.onclick = function () {
  modal.style.display = "block";
};

// Close the modal when the user clicks on <span> (x)
closeModal.onclick = function () {
  modal.style.display = "none";
};

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
