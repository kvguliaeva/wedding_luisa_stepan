const toast = document.querySelector(".toast");
let toastTimer;

document.querySelectorAll("[data-toast]").forEach((button) => {
  button.addEventListener("click", () => {
    toast.textContent = button.dataset.toast;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("is-visible");
    }, 3200);
  });
});
