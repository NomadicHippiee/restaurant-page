export default function menuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(createMenuSection());
}

function createMenuSection() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper", "flex-container");

  const items = [
    { name: "Margherita", desc: "Classic tomato, mozzarella, and basil." },
    { name: "Pepperoni", desc: "Loaded with spicy pepperoni slices." },
    {
      name: "Diavola",
      desc: "Hot salami, chili flakes, and fresh mozzarella.",
    },
    {
      name: "Quattro Formaggi",
      desc: "Mozzarella, gorgonzola, parmesan, and provolone.",
    },
    {
      name: "Veggie Delight",
      desc: "Peppers, onions, mushrooms, olives, and sweetcorn.",
    },
    {
      name: "BBQ Chicken",
      desc: "Chicken, BBQ sauce, red onions, and mozzarella.",
    },
  ];

  items.forEach((item) => {
    menuWrapper.append(createMenuItem(item));
  });
  return menuWrapper;
}

function createMenuItem({ name, desc }) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const title = document.createElement("h3");
  title.textContent = name;

  const description = document.createElement("p");
  description.textContent = desc;

  menuItem.append(title, description);

  return menuItem;
}
