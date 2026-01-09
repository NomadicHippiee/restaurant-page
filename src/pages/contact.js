import githubIcon from "../img/github-logo.png";
import xIcon from "../img/x-icon.png";
import redditIcon from "../img/reddit-icon.png";

export default function contactPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  contentDiv.append(createContactSection());
}

function createContactSection() {
  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("contact-wrapper", "flex-container");

  const title = document.createElement("h2");
  title.textContent = "Contact Us";

  const intro = document.createElement("p");
  intro.textContent =
    "Welcome to Pizza Place — the finest imaginary pizzeria on the internet. If you`re looking for the team behind the dough, the code, or the questionable topping choices, you’re in the right spot.";

  const sectionTitle = document.createElement("h3");
  sectionTitle.textContent = "Find Us Online";

  const description = document.createElement("p");
  description.textContent =
    "Follow the icons below to explore the secret labs where Pizza Place was built:";

  const iconWrapper = document.createElement("div");
  iconWrapper.classList.add("icon-wrapper", "flex-container");

  const items = [
    {
      name: "Github",
      text: "Where the code for this entire restaurant lives.",
      icon: githubIcon,
      url: "https://github.com/NomadicHippiee",
    },
    {
      name: "X",
      text: "Let's connect, I'll make sure to give you a follow back",
      icon: xIcon,
      url: "https://x.com/nomadhippies",
    },
    {
      name: "Reddit",
      text: "Home to all the chaos, bloopers, and pizza tales.",
      icon: redditIcon,
      url: "https://www.reddit.com/user/NomadicHippies/",
    },
  ];

  items.forEach((item) => {
    iconWrapper.append(createIconCard(item))
  });

    contactWrapper.append(title, intro, sectionTitle, description, iconWrapper);
      return contactWrapper;
};

function createIconCard(item) {
  const iconCard = document.createElement("div");
  iconCard.classList.add(item.name, "square", "flex-container");
  const iconImg = document.createElement("div");
  iconImg.classList.add("icon-img");
  iconImg.style.backgroundImage = `url("${item.icon}")`;
  const iconText = document.createElement("p");
  iconText.textContent = item.text;
  iconCard.append(iconImg, iconText)
  const link = document.createElement("a");
  link.href = item.url;
  link.target = "_blank";
  link.append(iconCard);


  return link;
}





  // const github = 
  // github.classList.add("square", "flex-container");
  // github.textContent = "GitHub — ";

  // const x = document.createElement("p");
  // x.classList.add("square", "flex-container");
  // x.textContent = "X — ";

  // const reddit = document.createElement("p");
  // reddit.classList.add("square", "flex-container");
  // reddit.textContent =
  //   "Reddit — Where the behind-the-scenes chaos and pizza lore reside.";

  // iconWrapper.append(github, x, reddit);