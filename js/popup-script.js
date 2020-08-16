var popup = document.querySelector(".size-popup");
var popupBlure = document.querySelector(".blurred-background");
var links = document.querySelectorAll(".catalog-item__order-cart");


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupBlure.classList.contains("blurred-background--show")) {
      popupBlure.classList.remove("blurred-background--show");
      popupBlure.classList.add("visually-hidden");
    }
  }
});

for (var i = 0; i < links.length; i++) {
  let link = links[i];
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBlure.classList.remove("visually-hidden");
    popupBlure.classList.add("blurred-background--show");
  });
}
