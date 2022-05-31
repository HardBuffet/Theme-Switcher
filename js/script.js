const button = document.querySelector(".button");
const page = document.querySelector(".page");
const date = new Date();

function setThemeByTime() {
  if (date.getHours < "6" || date.getHours <= "20") {
    page.classList.add("page_dark");
    button.classList.add("button_active");
  } else {
    page.classList.remove("page_dark");
    button.classList.remove("button_active");
  }
}
setThemeByTime()

button.addEventListener("click", changeTheme);

function changeTheme() {
  this.classList.toggle("button_active");
  page.classList.toggle("page_dark");
}
