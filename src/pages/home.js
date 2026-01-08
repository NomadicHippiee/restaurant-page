

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

  wrapper.append(heroText, heroImg);
  return wrapper;
}

