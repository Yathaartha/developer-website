startTimer();
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
if (document.getElementById("myResume")) {
  const myResume = document.getElementById("myResume");
  const resume = myResume.querySelector("img");
}
const cursor = document.querySelector(".cursor");
const body = document.querySelector("body");
const header = document.querySelector("header");

let milisec = 0;

toggler.addEventListener("click", () => {
  if (body.classList.contains("bg-light-body")) {
    body.classList.remove("bg-light-body");
    if (document.getElementById("myResume")) {
      const myResume = document.getElementById("myResume");
      const resume = myResume.querySelector("img");
      resume.src = "images/resume-dark.jpg";
    }
  } else {
    body.classList.add("bg-light-body");
    if (document.getElementById("myResume")) {
      const myResume = document.getElementById("myResume");
      const resume = myResume.querySelector("img");
      resume.src = "images/resume.jpg";
    }
  }
  if (header.classList.contains("bg-light-nav")) {
    header.classList.remove("bg-light-nav");
  } else {
    header.classList.add("bg-light-nav");
  }
});

if (document.querySelector(".current")) {
  const currentPage = document.querySelector(".current");
  const displayCurrent = document.querySelector(".currentPage");
  if (currentPage.textContent != "home") {
    displayCurrent.innerHTML = `<a href="#">${currentPage.textContent.toLowerCase()}</a>/`;
  }
}

function startTimer() {
  setInterval(timeHandler, 10);
}

function timeHandler() {
  milisec++;
  if (milisec === 100) {
    cursor.style.visibility = "hidden";
  }
  if (milisec === 200) {
    cursor.style.visibility = "visible";
    milisec = 0;
  }
}
