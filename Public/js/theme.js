const themeSwitcher = document.getElementById("themeSwitcher");
// const accessModeMediaQuery = window.matchMedia("(prefers-color-scheme: access)");

if (localStorage.getItem("themeMode") === null) {
  localStorage.setItem("themeMode", "normal");
  themeSwitcher.checked = false;
}

updateTheme();
updateThemeToggle();

function updateTheme() {
  if (localStorage.getItem("themeMode") === "access") {
    document.documentElement.style.setProperty(
      "--current-background",
      "var(--access-background)"
    );
    document.documentElement.style.setProperty(
      "--reverse-current-background",
      "var(--access-reverse-background)"
    );
    document.documentElement.style.setProperty(
      "--current-font",
      "var(--access-font)"
    );
    document.documentElement.style.setProperty(
      "--current-shadow",
      "var(--access-shadow)"
    );
    document.documentElement.style.setProperty(
      "--current-transparent",
      "var(--access-transparent)"
    );
    document.documentElement.style.setProperty(
      "--current-main-color",
      "var(--access-main-color)"
    );
    document.documentElement.style.setProperty(
      "--current-secondary-color",
      "var(--access-secondary-color)"
    );
    document.documentElement.style.setProperty(
      "--current-tertiary-color",
      "var(--access-tertiary-color)"
    );
  } else {
    // Use default values for normal mode
    document.documentElement.style.setProperty(
      "--current-background",
      "var(--normal-background)"
    );
    document.documentElement.style.setProperty(
      "--reverse-current-background",
      "var(--normal-reverse-background)"
    );
    document.documentElement.style.setProperty(
      "--current-font",
      "var(--normal-font)"
    );
    document.documentElement.style.setProperty(
      "--current-shadow",
      "var(--normal-shadow)"
    );
    document.documentElement.style.setProperty(
      "--current-transparent",
      "var(--normal-transparent)"
    );
    document.documentElement.style.setProperty(
      "--current-main-color",
      "var(--normal-main-color)"
    );
    document.documentElement.style.setProperty(
      "--current-secondary-color",
      "var(--normal-secondary-color)"
    );
    document.documentElement.style.setProperty(
      "--current-tertiary-color",
      "var(--normal-tertiary-color)"
    );
  }
  updateThemeToggle();
}

// Listen for changes in the theme switcher
themeSwitcher.addEventListener("change", function () {
  theme = localStorage.getItem("themeMode");
  if (theme === "access") {
    localStorage.setItem("themeMode", "normal");
  } else {
    localStorage.setItem("themeMode", "access");
  }
  updateTheme();
});

document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("themeSwitcher");
  themeSwitcher.addEventListener("keydown", function (event) {
    if (event.key === " ") {
      // event.preventDefault();
      if (theme === "access") {
        localStorage.setItem("themeMode", "normal");
      } else {
        localStorage.setItem("themeMode", "access");
      }
      updateTheme();
    }
  });
});

function updateThemeToggle() {
  if (localStorage.getItem("themeMode") === "access") {
    themeSwitcher.checked = true;
  } else {
    themeSwitcher.checked = false;
  }
}
