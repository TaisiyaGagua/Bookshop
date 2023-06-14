var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var buttonContainer = document.querySelector(".main_nav_container");
var buttonLoadMore = document.querySelector(".button_more");
var resultNode = document.querySelector(".book_cards");
var categories = {
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
buttonContainer.addEventListener("click", function (event) {
  var clickedButton = event.target;
  var buttonClass = Array.from(clickedButton.classList).find(function (
    className
  ) {
    return categories.hasOwnProperty(className);
  });
  if (buttonClass) {
    var category = categories[buttonClass];
    resultNode.textContent = "";
    getResponse(category, startIndex);
  }
});
var startIndex = 0;
var itemsInBasket = 0;
getResponse("Architecture", startIndex);
function getResponse(q, startIndex) {
  return __awaiter(this, void 0, void 0, function () {
    var response,
      data,
      books,
      i,
      authors,
      title,
      ratingsCountInfo,
      ratingsCount,
      averageRatingElement,
      averageRating,
      singleReviewStar,
      noneActiveStar,
      i_1,
      i_2,
      description,
      amountInfo,
      currencyCode,
      amount,
      bookPicture,
      averageElement,
      ratingCountElement,
      amountElement,
      cardBlock,
      buttonsAddToBasket;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [
            4 /*yield*/,
            fetch(
              'https://www.googleapis.com/books/v1/volumes?q="subject:'
                .concat(
                  q,
                  '"&key=AIzaSyAgFZXYAlQOitStVjgttWk32PeQI8KKpe0&printType=books&startIndex='
                )
                .concat(startIndex, "&maxResults=6&langRestrict=en")
            ),
          ];
        case 1:
          response = _a.sent();
          return [4 /*yield*/, response.json()];
        case 2:
          data = _a.sent();
          books = data.items;
          for (i = 0; i < books.length; i++) {
            authors = books[i].volumeInfo.authors;
            authors = String(authors);
            title = books[i].volumeInfo.title;
            title = String(title);
            ratingsCountInfo = void 0;
            if (typeof books[i].volumeInfo.ratingsCount !== "undefined") {
              ratingsCount = books[i].volumeInfo.ratingsCount;
              ratingsCount = String(ratingsCount);
              ratingsCountInfo = '<p class="ratingsCount">'.concat(
                ratingsCount,
                "review</p>"
              );
            }
            averageRatingElement = "";
            if (typeof books[i].volumeInfo.averageRating !== "undefined") {
              averageRating = books[i].volumeInfo.averageRating;
              singleReviewStar = '<div class="reviewStar"></div>';
              noneActiveStar = '<div class="reviewStarNone"></div>';
              for (i_1 = 0; i_1 < averageRating; i_1++) {
                averageRatingElement += singleReviewStar;
              }
              for (i_2 = 0; i_2 < 5 - averageRating; i_2++) {
                averageRatingElement += noneActiveStar;
              }
            }
            description = books[i].volumeInfo.description;
            description = String(description);
            amountInfo = void 0;
            if (typeof books[i].saleInfo.retailPrice !== "undefined") {
              currencyCode = books[i].saleInfo.retailPrice.currencyCode;
              currencyCode = String(currencyCode);
              amount = books[i].saleInfo.retailPrice.amount;
              amount = String(amount);
              amountInfo = '<p class="amount">'
                .concat(currencyCode, " ")
                .concat(amount, "</p>");
            }
            bookPicture = books[i].volumeInfo.imageLinks.thumbnail;
            bookPicture = String(bookPicture);
            averageElement = !averageRatingElement ? "" : averageRatingElement;
            ratingCountElement =
              typeof ratingsCountInfo === "undefined" ? "" : ratingsCountInfo;
            amountElement = typeof amountInfo === "undefined" ? "" : amountInfo;
            cardBlock =
              '\n                <div class="card">\n                    <img src="'
                .concat(
                  bookPicture,
                  '" class="bookPicture"/>\n                    <div class="book_discription">\n                        <p class="authors">'
                )
                .concat(
                  authors,
                  '</p>\n                        <p class="title">'
                )
                .concat(
                  title,
                  '</p>\n                        <div class="star__container">\n                        '
                )
                .concat(averageElement, "\n                        ")
                .concat(
                  ratingCountElement,
                  '\n                        </div>\n                        <p class="description">'
                )
                .concat(description, "</p>\n                        ")
                .concat(
                  amountElement,
                  '\n                        <button class="button button_buy_now">Buy now</button>\n\n                    </div>\n                </div>\n                '
                );
            resultNode.innerHTML = resultNode.innerHTML + cardBlock;
          }
          buttonLoadMore.onclick = function () {
            startIndex = startIndex + 6;
            getResponse(q, startIndex);
          };
          buttonsAddToBasket = document.querySelectorAll(".button_buy_now");
          buttonsAddToBasket.forEach(function (button) {
            button.onclick = function () {
              document.getElementsByClassName(
                "items_in_basket"
              )[0].style.visibility = "visible";
              itemsInBasket++;
              document.getElementsByClassName(
                "items_in_basket"
              )[0].textContent = "".concat(itemsInBasket);
              button.classList.add("disabled");
              button.setAttribute("disabled", "");
              button.textContent = "in the cart";
            };
          });
          return [2 /*return*/];
      }
    });
  });
}
