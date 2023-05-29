const btn = document.querySelector(".btn"),
  frontFice = document.querySelector(".front");

const RemoveFront = () => frontFice.classList.add("hide");

btn.addEventListener("click", RemoveFront);

//
const cardItems = document.querySelectorAll(".card__preview");

cardItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    cardItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
