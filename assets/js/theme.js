// Light/Dark toggle with persistence
(function () {
  const root = document.documentElement;
  const key = "theme";

  function setTheme(theme) {
    if (theme) root.setAttribute("data-theme", theme);
    else root.removeAttribute("data-theme");
  }

  const saved = localStorage.getItem(key);
  if (saved === "dark" || saved === "light") setTheme(saved);

  window.toggleTheme = function toggleTheme() {
    const current = root.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(key, next);
  };
})();
