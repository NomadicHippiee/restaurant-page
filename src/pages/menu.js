import margarita from "../img/pizza-margarita.png";
import pepperoni from "../img/pizza-pepperoni.png";
import diavola from "../img/pizza-hot-salami.png";
import formaggi from "../img/pizza-formaggi.png";
import veggie from "../img/pizza-veggie.png";
import bbq from "../img/pizza-bbq-chicken.png";

export default function menuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(createMenuSection());
}

function createMenuSection() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper", "flex-container");

  const items = [
    {
      name: "Margherita",
      desc: "Classic tomato, mozzarella, and basil.",
      image: margarita,
    },
    {
      name: "Pepperoni",
      desc: "Loaded with spicy pepperoni slices.",
      image: pepperoni,
    },
    {
      name: "Diavola",
      desc: "Hot salami, chili flakes, and fresh mozzarella.",
      image: diavola,
    },
    {
      name: "Quattro Formaggi",
      desc: "Mozzarella, gorgonzola, parmesan, and provolone.",
      image: formaggi,
    },
    {
      name: "Veggie Delight",
      desc: "Peppers, onions, mushrooms, olives, and sweetcorn.",
      image: veggie,
    },
    {
      name: "BBQ Chicken",
      desc: "Chicken, BBQ sauce, red onions, and mozzarella.",
      image: bbq,
    },
  ];

  items.forEach((item) => {
    menuWrapper.append(createMenuItem(item));
  });
  return menuWrapper;
}

function createMenuItem({ name, desc, image }) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item", "flex-container");
  const menuImg = document.createElement("div");
  menuImg.classList.add("menu-image");
  menuImg.style.backgroundImage = `url("${image}")`;
  const menuText = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = name;

  const description = document.createElement("p");
  description.textContent = desc;

  menuText.append(title, description);

  menuItem.append(menuImg, menuText);

  return menuItem;
}
