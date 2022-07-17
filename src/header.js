import data from "./dataset.json";
import logoPict from "./assets/logo.png";

const rednerHeader = (header) => {
  const headerWrapper = document.querySelector(".header");
  const textWrapper = document.createElement(`div`);
  textWrapper.classList.add("textWrapper");
  const text = document.createElement(`h1`);
  const title = document.createElement(`div`);
  const logo = document.createElement("img");

  text.innerHTML = `${header.h1}`;
  title.innerHTML = `${header.title}`;
  logo.id = "logo";
  logo.src = logoPict;

  textWrapper.appendChild(logo);
  textWrapper.appendChild(text);
  headerWrapper.insertAdjacentElement("beforeEnd", textWrapper);
  headerWrapper.insertAdjacentElement("beforeEnd", title);
};

rednerHeader(data.page_meta);
