var dots = document.querySelectorAll(".slider_circle");
var image = document.querySelectorAll(".slider__bookshop_image");
var im = 0;
function slider() {
  image[im].classList.remove("show");
  dots[im].classList.remove("pressed");
  im = (im + 1) % image.length;
  image[im].classList.add("show");
  dots[im].classList.add("pressed");
}
var intervalId = setInterval(slider, 5000);
var currentIndex = 0;
function focus(index) {
  for (var i = 0; i < image.length; i++) {
    image[i].classList.remove("show");
    image[index].classList.add("show");
    dots[i].classList.remove("pressed");
    dots[index].classList.add("pressed");
  }
}
dots.forEach(function (item, indexDots) {
  item.addEventListener("click", function () {
    currentIndex = indexDots;
    focus(currentIndex);
    clearInterval(intervalId);
  });
});
