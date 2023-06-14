const buttonContainer = document.querySelector(".main_nav_container") as HTMLElement;
const buttonLoadMore = document.querySelector(".button_more") as HTMLElement;
let resultNode = document.querySelector(".book_cards") as HTMLElement;

interface Categories {
  [key: string]: string;
}

const categories: Categories = {
  main__button_architecture: "Architecture",
  main__button_art: "Art",
  main__button_biography: "Biography&Autobiography",
  main__button_business: "Business",
  main__button_crafts: "Crafts&Hobbies",
  main__button_drama: "Drama",
  main__button_fiction: "Fiction",
  main__button_food: "Cooking",
  main__button_health: "Health&Fitness",
  main__button_history: "History",
  main__button_humor: "Humor",
  main__button_poetry: "Poetry",
  main__button_psychology: "Psychology",
  main__button_science: "Science",
  main__button_technology: "Technology",
  main__button_travel: "Travel",
};

buttonContainer.addEventListener("click", (event) => {
  const clickedButton = event.target as HTMLElement;
  const buttonClass = Array.from(clickedButton.classList).find((className) =>
    categories.hasOwnProperty(className)
  );

  if (buttonClass) {
    const category = categories[buttonClass];
    resultNode.textContent = "";
    getResponse(category, startIndex);
  }
});

let startIndex = 0;
let itemsInBasket = 0;

getResponse("Architecture", startIndex);

async function getResponse(q: string, startIndex: number): Promise<void> {
  let response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q="subject:${q}"&key=AIzaSyAgFZXYAlQOitStVjgttWk32PeQI8KKpe0&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`
  );
  let data = await response.json();
  const books = data.items;

  for (let i = 0; i < books.length; i++) {
    let authors = books[i].volumeInfo.authors;
    authors = String(authors);

    let title = books[i].volumeInfo.title;
    title = String(title);

    let ratingsCountInfo: string | undefined;

    if (typeof books[i].volumeInfo.ratingsCount !== "undefined") {
      let ratingsCount = books[i].volumeInfo.ratingsCount;
      ratingsCount = String(ratingsCount);
      ratingsCountInfo = `<p class="ratingsCount">${ratingsCount}review</p>`;
    }

    let averageRatingElement = "";

    if (typeof books[i].volumeInfo.averageRating !== "undefined") {
      let averageRating = books[i].volumeInfo.averageRating;

      let singleReviewStar = `<div class="reviewStar"></div>`;
      let noneActiveStar = `<div class="reviewStarNone"></div>`;

      for (let i = 0; i < averageRating; i++) {
        averageRatingElement += singleReviewStar;
      }

      for (let i = 0; i < 5 - averageRating; i++) {
        averageRatingElement += noneActiveStar;
      }
    }

    let description = books[i].volumeInfo.description;
    description = String(description);

    let amountInfo: string | undefined;

    if (typeof books[i].saleInfo.retailPrice !== "undefined") {
      let currencyCode = books[i].saleInfo.retailPrice.currencyCode;
      currencyCode = String(currencyCode);

      let amount = books[i].saleInfo.retailPrice.amount;
      amount = String(amount);

      amountInfo = `<p class="amount">${currencyCode} ${amount}</p>`;
    }

    let bookPicture = books[i].volumeInfo.imageLinks.thumbnail;
    bookPicture = String(bookPicture);

    const averageElement = !averageRatingElement ? "" : averageRatingElement;

    const ratingCountElement =
      typeof ratingsCountInfo === "undefined" ? "" : ratingsCountInfo;

    const amountElement = typeof amountInfo === "undefined" ? "" : amountInfo;

    const cardBlock = `
                <div class="card">
                    <img src="${bookPicture}" class="bookPicture"/>
                    <div class="book_discription">
                        <p class="authors">${authors}</p>
                        <p class="title">${title}</p>
                        <div class="star__container">
                        ${averageElement}
                        ${ratingCountElement}
                        </div>
                        <p class="description">${description}</p>
                        ${amountElement}
                        <button class="button button_buy_now">Buy now</button>

                    </div>
                </div>
                `;
    resultNode.innerHTML = resultNode.innerHTML + cardBlock;
  }
  buttonLoadMore.onclick = function () {
    startIndex = startIndex + 6;
    getResponse(q, startIndex);
  };

  const buttonsAddToBasket = document.querySelectorAll(".button_buy_now");

  buttonsAddToBasket.forEach((button) => {
    button.onclick = () => {
      document.getElementsByClassName("items_in_basket")[0].style.visibility =
        "visible";

      itemsInBasket++;

      document.getElementsByClassName(
        "items_in_basket"
      )[0].textContent = `${itemsInBasket}`;
      button.classList.add("disabled");

      button.setAttribute("disabled", "");
      button.textContent = "in the cart";
    };
  });
}
