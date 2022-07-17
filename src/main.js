import "bootstrap/dist/css/bootstrap.min.css";
import data from "./dataset.json";
import "./sass/main.scss";
import "./header";
import "./navigate";
import "./breadcrumbs";
import "./card.js";
import "./filterSort";
import "./pageText";
import "./images";
import "./filterParams";
import logoPict from "./assets/logo.png";

const wrapper = document.createElement("div");
wrapper.classList.add("titleWrapper");
const contactWrapper = document.querySelector(".contacts");
const contactTitle = document.createElement("h2");

const logo = document.createElement("img");
logo.id = "logo";
logo.src = logoPict;

wrapper.appendChild(logo);
wrapper.appendChild(contactTitle);

contactTitle.innerHTML = `${data.page_meta.h1}`;
contactWrapper.insertAdjacentElement("afterbegin", wrapper);
