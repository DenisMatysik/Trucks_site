import data from "./dataset.json";

export const rednerCard = (cards) => {
  const result = document.querySelector(".filter-result");
  result.innerHTML = `${cards.length} Results Found`;
  const allCards = document.querySelector(".allCards");
  allCards.innerHTML = "";
  if (cards.lenght === 0) {
    const text = document.createElement("div");
    text.innerHTML = `<div>Sorry now in DB no avalible truck</div>`;
    allCards.insertAdjacentElement("beforeend", text);
  } else {
    cards.forEach((card, i) => {
      const text = document.createElement("div");
      text.innerHTML = `<div class="card">
      <img src="${card.image}" id="card${[i + 1]}" />
      <div class="card-info">
        <div class="card-name-price">
          <div class="name">${card.title}</div>
          <div class="price">${card.price} ${card.price_currency}</div>
        </div>
        <div class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Itaque dicta repudiandae quos natus placeat autem, laboriosam
          libero aperiam ad quas sit? Omnis quasi ipsam veritatis
          mollitia culpa est! Aspernatur, ducimus!
        </div>
        <div class="card-tags">
          <div class="tag">${card.year}</div>
          <div class="tag">${card.mileage} ${card.mileage_measure} </div>
          <div class="tag">${card.axle_configuration}</div>
          <div class="tag">${card.payload}</div>
          <div class="tag">${card.power} ${card.power_measure}</div>
        </div>
      </div>
    </div>`;
      allCards.insertAdjacentElement("beforeEnd", text);
    });
  }
};
rednerCard(data.stock);
console.log(data);
