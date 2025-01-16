if (
  localStorage.getItem("isDark") != undefined &&
  Boolean(localStorage.getItem("isDark"))
) {
  document.body.classList.toggle("dark");
  textChange();
}

function themeChange() {
  document.body.classList.toggle("dark");
  textChange();
}

function textChange() {
  if (document.body.classList[0] == "dark") {
    document.querySelector("#themeButton").innerHTML = "Theme ☀️";
    localStorage.setItem("isDark", "true");
  } else {
    document.querySelector("#themeButton").innerHTML = "Theme 🌙";
    localStorage.setItem("isDark", "false");
  }
}
