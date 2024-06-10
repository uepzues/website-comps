const links = document.querySelectorAll(".link");
const gtSigns = document.querySelectorAll(".gtSign");
const sections = document.querySelectorAll("section");
const imageSet1 = document.querySelectorAll(".heading img:first-child");
const imageSet2 = document.querySelectorAll(".heading img:last-child");
const h2Before = document.querySelectorAll("h2");

for (let i = 0; i < sections.length; i++) {
  sections[i].addEventListener("mouseover", () => {
    imageSet1[i].classList.remove("hidden");
    imageSet2[i].classList.add("hidden");
    imageSet1[i].style.scale = "1.2";
    sections[i].style.filter = "sepia(0.2)";
    if (i !== 2) {
      imageSet1[i].style.rotate = "30deg";
    }
    h2Before[i].style.setProperty("--width", "100%");
  });
  sections[i].addEventListener("mouseout", () => {
    imageSet1[i].classList.add("hidden");
    imageSet2[i].classList.remove("hidden");
    h2Before[i].style.setProperty("--width", "0%");
    sections[i].style.filter = "initial";

  });

  sections[i].addEventListener("touchstart", () => {
    imageSet2[i].classList.add("hidden");
    imageSet1[i].classList.remove("hidden");
    h2Before[i].style.setProperty("--width", "100%");
  });
  sections[i].addEventListener("touchend", () => {
    setTimeout(() => {
      imageSet1[i].classList.add("hidden");
      imageSet2[i].classList.remove("hidden");
      h2Before[i].style.setProperty("--width", "0%");
    }, 1000);
  });
}

links.forEach((link) => {
  link.style.fontSize = "1.6rem";
  link.style.textShadow = "2px 2px 10px var(--color-dark)";
  link.style.cursor = "pointer";
  link.style.fontWeight = "500";
  link.style.alignSelf = "center";
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.opacity = ".7";
    link.style.scale = "1.05";
  });
  link.addEventListener("mouseout", () => {
    link.style.opacity = "initial";
    link.style.scale = "initial";
  });
});

gtSigns.forEach((gtSign) => {
  gtSign.style.marginLeft = "10px";
});
