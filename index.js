let accordion = document.querySelector(".accordion");
accordion.addEventListener("click", function (e) {
  let t = e.target;
  let active = this.querySelector(".item.active");
  let item = t.parentElement;
  if (t.matches(".head")) {
    item.classList.toggle("active");
  }
  if (active && t !== active) {
    active.classList.remove("active");
  }
});
