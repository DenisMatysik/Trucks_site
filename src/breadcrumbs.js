import data from "./dataset.json";

const rednerBreadcrumbs = (breadcrumbs) => {
  const breadcrumbsWrapper = document.querySelector(".breadcrumb");
  breadcrumbs.forEach((item, i) => {
    const text = document.createElement("a");
    text.href = item.href;
    text.innerHTML = `${item.text}`;
    text.classList.add("breadcrumb-item");
    breadcrumbsWrapper.insertAdjacentElement("beforeEnd", text);
  });
  document
    .querySelectorAll(".breadcrumb-item")
    [document.querySelectorAll(".breadcrumb-item").length - 1].classList.add(
      "active"
    ); // просто выделить последний элемент
};
rednerBreadcrumbs(data.breadcrumbs);
