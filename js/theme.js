(() => {
  const key = "site-theme";
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let preference;

  try {
    const stored = localStorage.getItem(key);
    if (stored === "light" || stored === "dark") preference = stored;
  } catch {
    // The switch still works for this page when storage is unavailable.
  }

  function applyTheme(theme) {
    root.dataset.bsTheme = theme;
    document.querySelector(".theme-toggle")?.setAttribute("aria-pressed", String(theme === "dark"));
  }

  function applyPreference() {
    applyTheme(preference ?? (systemTheme.matches ? "dark" : "light"));
  }

  applyPreference();
  systemTheme.addEventListener("change", applyPreference);
  window.addEventListener("storage", event => {
    if (event.key !== key && event.key !== null) return;
    preference = event.newValue === "light" || event.newValue === "dark" ? event.newValue : undefined;
    applyPreference();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    applyPreference();
    toggle.hidden = false;
    toggle.addEventListener("click", () => {
      preference = root.dataset.bsTheme === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(key, preference);
      } catch {
        // Apply the preference even when storage is unavailable.
      }
      applyPreference();
    });
  });
})();
