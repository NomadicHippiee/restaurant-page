import "./styles.css";
import homePage from "../pages/home.js";
import menuPage from "../pages/menu.js";
import contactPage from "../pages/contact.js";

function tabNavigation() {
    const homeTab = document.querySelector("#home");
    const menuTab = document.querySelector("#menu");
    const contactTab = document.querySelector("#contact");

    homeTab.addEventListener("click", () => {
        homePage();
        setActiveTab(homeTab);
    });

    menuTab.addEventListener("click", () => {
        menuPage();
        setActiveTab(menuTab);
    });

    contactTab.addEventListener("click", () =>{
        contactPage();
        setActiveTab(contactTab);
    });

    homePage();
    setActiveTab(homeTab);
}

function setActiveTab(activeButton) {
    const buttons = document.querySelectorAll("nav button");
    buttons.forEach(btn => btn.classList.remove("active"));
    activeButton.classList.add("active");

}

tabNavigation();


