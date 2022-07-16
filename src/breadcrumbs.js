import data from "./dataset.json";

const rednerBreadcrumbs = (breadcrumbs) => {
  const breadcrumbsWrapper = document.querySelector(".breadcrumbs");

  breadcrumbs.forEach((item, i) => {
    const text = document.createElement("a");
    text.href = item.href;
    text.innerHTML = `${item.text}`;
    breadcrumbsWrapper.insertAdjacentElement("beforeEnd", text);
  });
};

rednerBreadcrumbs(data.breadcrumbs);
