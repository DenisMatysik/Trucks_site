import data from "./dataset.json";

const rednerHeader = (header) => {
  const headerWrapper = document.querySelector(".header");

  const text = document.createElement(`h1`);
  const title = document.createElement(`div`);
  text.innerHTML = `${header.h1}`;
  title.innerHTML = `${header.title}`;
  headerWrapper.insertAdjacentElement("beforeEnd", text);
  headerWrapper.insertAdjacentElement("beforeEnd", title);
};

rednerHeader(data.page_meta);
