export default function homePage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const heroText = document.createElement("div");
  const heroImg = document.createElement("div");
  heroText.classList.add("hero-text");
  heroImg.classList.add("hero-img");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.innerHTML = "Best Pizza Plaze in Town";
  p.innerHTML =
    "Whether you’re craving a classic Margherita, a fiery Diavola, or a fully loaded feast, our ovens are fired up and ready to deliver pure happiness";
  heroText.appendChild(h1);
  heroText.appendChild(p);
  contentDiv.appendChild(heroText);
  contentDiv.appendChild(heroImg);
}
