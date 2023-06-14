const dots = document.querySelectorAll(".slider_circle") as NodeListOf<HTMLElement>;
const image = document.querySelectorAll(".slider__bookshop_image") as NodeListOf<HTMLElement>;

let im = 0;

function slider(): void {
  image[im].classList.remove("show");
  dots[im].classList.remove("pressed");
  im = (im + 1) % image.length;
  image[im].classList.add("show");
  dots[im].classList.add("pressed");
}

const intervalId = setInterval(slider, 5000);

let currentIndex = 0;

function focus(index: number): void {
  for (let i = 0; i < image.length; i++) {
    image[i].classList.remove("show");
    image[index].classList.add("show");

    dots[i].classList.remove("pressed");
    dots[index].classList.add("pressed");
  }
}

dots.forEach((item, indexDots) => {
  item.addEventListener("click", () => {
    currentIndex = indexDots;
    focus(currentIndex);
    clearInterval(intervalId);
  });
});
