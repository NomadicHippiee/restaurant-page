export default function contactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(createContactSection());
}

function createContactSection() {
  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("contact-wrapper", "flex-container");

  const title = document.createElement("h3");
  title.textContent = "Contact Us";

  const intro = document.createElement("p");
  intro.textContent =
    'Welcome to Pizza Place — the finest imaginary pizzeria on the internet. If you`re looking for the team behind the dough, the code, or the questionable topping choices, you’re in the right spot.';

  const sectionTitle = document.createElement("h2");
  sectionTitle.textContent = "Find Us Online";

  const description = document.createElement("p");
  description.textContent =
    "Follow the icons below to explore the secret labs where Pizza Place was built:";
  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("icon-wrapper", "flex-container");

  const github = document.createElement("p");
  github.textContent =
    "GitHub — Where the code for this entire restaurant lives.";

  const x = document.createElement("p");
  x.textContent =
    "X — Lets connect, Ill make sure to giva you a follow back";

  const reddit = document.createElement("p");
  reddit.textContent =
    "Reddit — Where the behind-the-scenes chaos and pizza lore reside.";

    iconWrapper.append(
        github,
        x,
        reddit
    );

    menuWrapper.append(
        title,
        intro,
        sectionTitle,
        description,
        iconWrapper
    );
    return menuWrapper;
}
