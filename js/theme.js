// Theme management
class ThemeManager {
  constructor() {
    this.init();
  }

  init() {
    const currentTheme = this.getCurrentTheme();
    this.updateThemeIcon(currentTheme === "dark");

    this.setupThemeToggle();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem("theme")) {
          this.setDarkMode(e.matches);
        }
      });
  }

  setDarkMode(isDark) {

    const html = document.documentElement;

    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Update icons immediately
    this.updateThemeIcon(isDark);
  }

  updateThemeIcon(isDark) {
    const sunIcon = document.getElementById("sun-icon");
    const moonIcon = document.getElementById("moon-icon");

    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
      } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      }
    }
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const isDark = document.documentElement.classList.contains("dark");
        this.setDarkMode(!isDark);
      });
    }
  }

  getCurrentTheme() {
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    window.themeManager = new ThemeManager();
  });
} else {
  window.themeManager = new ThemeManager();
}
