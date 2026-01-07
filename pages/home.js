// export default function homePage() {
//   const contentDiv = document.querySelector("#content");
//   contentDiv.innerHTML = "";
//   const heroText = document.createElement("div");
//   const heroImg = document.createElement("div");
//   heroText.classList.add("hero-text");
//   heroImg.classList.add("hero-img");
//   const h1 = document.createElement("h1");
//   const p = document.createElement("p");

//   h1.innerHTML = "Best Pizza Plaze in Town";
//   p.innerHTML =
//     "Whether you’re craving a classic Margherita, a fiery Diavola, or a fully loaded feast, our ovens are fired up and ready to deliver pure happiness";
//   heroText.appendChild(h1);
//   heroText.appendChild(p);
//   contentDiv.appendChild(heroText);
//   contentDiv.appendChild(heroImg);
// }

export default function homePage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(createHeroSection());
}

function createHeroSection() {
  const wrapper = document.createElement("div");
  wrapper.classList.add("flex-container", "wrapper")

  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");

  heroText.innerHTML = `
    <h1>Best Pizza Plaze in Town</h1>
    <p>
      Whether you’re craving a classic Margherita, a fiery Diavola, or a fully loaded feast,
      our ovens are fired up and ready to deliver pure happiness
    </p>
  `;

  const heroImg = document.createElement("div");
  heroImg.classList.add("hero-img");
  heroImg.innerHTML = "Image Placeholder"

  wrapper.append(heroText, heroImg);
  return wrapper;
}

