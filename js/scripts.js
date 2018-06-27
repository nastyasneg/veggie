var menuToggles = document.querySelectorAll(".toggle-item");
var menuSlides = document.querySelectorAll(".menu-wrapper");
var j, h, k;

for (i = 0; i < menuToggles.length; ++i) {
  menuToggles[i].addEventListener("click", function (event) {
    for (j = 0; j < menuToggles.length; ++j) {
      menuToggles[j].classList.remove("toggle-item-current");
    }
    for (h = 0; h < menuToggles.length; ++h) {
      if (menuToggles[h] == this) {
        menuToggles[h].classList.add("toggle-item-current");
        for (k = 0; k < menuSlides.length; ++k) {
          menuSlides[k].classList.remove("menu-show");
        }
          menuSlides[h].classList.add("menu-show");
      }
    }
	})
}
