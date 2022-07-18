import data from "./dataset.json";

const rednerNavigate = (navs) => {
  const navWrapper = document.querySelector(".navigate");
  navs.forEach((navLink, i) => {
    const text = document.createElement("a");
    text.href = navLink.href;
    text.classList.add("nav-item");
    text.innerHTML = `${navLink.text}`;
    navWrapper.insertAdjacentElement("beforeEnd", text);
  });
};
rednerNavigate(data.nav);
