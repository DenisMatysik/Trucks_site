import data from "./dataset.json";

const rednerPageText = (texts) => {
  const textWrapper = document.querySelector(".some-text");
  texts.forEach((item, i) => {
    const text = document.createElement(`${item.tag}`);
    text.innerHTML = `${item.content}`;
    textWrapper.insertAdjacentElement("beforeEnd", text);
  });
};

rednerPageText(data.page_text);
