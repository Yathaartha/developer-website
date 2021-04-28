const toggler = document.getElementById("toggler");
if (document.querySelector(".links")) {
  const listItems = document.querySelector(".links");
  const li = listItems.querySelectorAll("li");
  toggler.addEventListener("click", () => {
    li.forEach((listItem) => {
      if (listItem.classList.contains("bg-light-btn")) {
        listItem.style.backgroundColor = "#3b3d42";
        listItem.classList.remove("bg-light-btn");
      } else {
        listItem.classList.add("bg-light-btn");
        listItem.style.backgroundColor = "#eaeaea";
      }
    });
  });
}
const body = document.querySelector("body");
const header = document.querySelector("header");

toggler.addEventListener("click", () => {
  if (body.classList.contains("bg-light-body")) {
    body.classList.remove("bg-light-body");
  } else {
    body.classList.add("bg-light-body");
  }
  if (header.classList.contains("bg-light-nav")) {
    header.classList.remove("bg-light-nav");
  } else {
    header.classList.add("bg-light-nav");
  }
});
