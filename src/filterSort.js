import data from "./dataset.json";
import { rednerCard } from "./card";

const filterSorts = document.querySelector("#sorts");

filterSorts.addEventListener("change", (e) => {
  const filterArr = data.stock;
  const filterOpt = e.target.value;
  switch (filterOpt) {
    case "payload":
      filterArr.sort((a, b) => {
        const firstVal = +a.payload.replace(" ", "").replace("kg", "");
        const secondVal = +b.payload.replace(" ", "").replace("kg", "");
        if (firstVal > secondVal) return 1;
        if (firstVal == secondVal) return 0;
        if (firstVal < secondVal) return -1;
      });
      rednerCard(filterArr);
      break;
    case "year":
      filterArr.sort((a, b) => a.year - b.year);
      rednerCard(filterArr);
      break;
    case "power":
      filterArr.sort((a, b) => a.power - b.power);
      rednerCard(filterArr);
      break;
    default:
      filterArr.sort((a, b) => a.price - b.price);
      rednerCard(filterArr);
      break;
  }
});
