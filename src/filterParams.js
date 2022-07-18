import data from "./dataset.json";
import { rednerCard } from "./card";

const minPrice = document.querySelector("#minPrice");
const maxPrice = document.querySelector("#maxPrice");
const yearSelect = document.querySelector("#yearSelect");
const btn = document.querySelector("#applyParams");
const reset = document.querySelector("#resetParams");
const typeLabels = document.querySelectorAll(".form-check-label");
let yearVal = 0,
  minPriceVal = 0,
  maxPriceVal = 1000000;
minPrice.addEventListener("input", (e) => {
  minPriceVal = e.target.value;
});
maxPrice.addEventListener("input", (e) => {
  maxPriceVal = e.target.value;
});
yearSelect.addEventListener("input", (e) => {
  yearVal = e.target.value;
});
btn.addEventListener("click", () => {
  if (maxPrice.value == "" || maxPrice.value == "" || yearSelect.value == "") {
    alert("Должны быть заданы все поля 'Price' и 'Year'");
  } else {
    let finalParams = data.stock
      .filter((el) => el.price >= minPriceVal)
      .filter((el) => el.price <= maxPriceVal)
      .filter((el) => el.year >= yearVal);
    if (finalParams.length != 0) {
      rednerCard(finalParams);
      const result = document.querySelector(".filter-result");
      result.innerHTML = `${finalParams.length} Results Found`;
    } else {
      const result = document.querySelector(".filter-result");
      result.innerHTML = `0 Results Found`;
      const allCards = document.querySelector(".allCards");
      allCards.innerHTML = "";
      const text = document.createElement("div");
      text.innerHTML = `<div> Sorry in DB no avalible truck by you params</div>`;
      allCards.insertAdjacentElement("beforeend", text);
    }
  }
});
reset.addEventListener("click", () => {
  rednerCard(data.stock);
  yearVal = 0;
  minPriceVal = 0;
  maxPriceVal = 0;
  minPrice.value = "";
  maxPrice.value = "";
  yearSelect.value = "";
});
typeLabels.forEach((el) => {
  el.addEventListener("click", (e) => {
    let finalParams = data.stock.filter(
      (item) => item.type == e.target.textContent
    );
    rednerCard(finalParams);
  });
});
