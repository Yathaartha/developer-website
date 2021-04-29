const image = document.querySelector("img");
const body = document.querySelector("body");

if (body.classList.contains("bg-light-body")) {
  image.src = "../images/resume.jpg";
} else {
  image.src = "../images/resume-dark.jpg";
}
