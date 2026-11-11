/* Page behavior for Local Standard.
   Marquee, float, and spin live in brand.js.
   Menu, contact send, and EN/ES visibility live here.
   Editable copy: .t-en and .t-es text nodes in index.html. */

(() => {
  const STORAGE_KEY = "ls-lang";
  const root = document.documentElement;
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");
  const metaDescription = document.querySelector('meta[name="description"]');
  const formNote = document.querySelector("#form-note");

  let currentLang = "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") currentLang = saved;
  } catch (error) {
    currentLang = root.lang === "es" ? "es" : "en";
  }

  function attr(el, base) {
    return el.getAttribute(base + "-" + currentLang) || el.getAttribute(base + "-en") || "";
  }

  function applyLanguage(lang) {
    if (lang !== "en" && lang !== "es") return;
    currentLang = lang;
    root.lang = lang;
    root.classList.toggle("lang-es", lang === "es");
    root.classList.toggle("lang-en", lang === "en");

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* ignore private-mode storage failures */
    }

    document.querySelectorAll(".t-en").forEach((el) => {
      el.hidden = lang !== "en";
    });
    document.querySelectorAll(".t-es").forEach((el) => {
      el.hidden = lang !== "es";
    });

    document.querySelectorAll("option[data-en][data-es]").forEach((el) => {
      el.textContent = el.getAttribute(lang === "es" ? "data-es" : "data-en") || el.textContent;
    });

    document.querySelectorAll("[data-aria-en]").forEach((el) => {
      if (el.classList.contains("menu-toggle")) {
        const open = el.getAttribute("aria-expanded") === "true";
        el.setAttribute(
          "aria-label",
          open ? attr(el, "data-aria-close") || attr(el, "data-aria") : attr(el, "data-aria")
        );
        return;
      }
      el.setAttribute("aria-label", attr(el, "data-aria"));
    });

    document.querySelectorAll("[data-alt-en]").forEach((el) => {
      el.setAttribute("alt", attr(el, "data-alt"));
    });

    document.title = root.getAttribute(lang === "es" ? "data-title-es" : "data-title-en") || document.title;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        root.getAttribute(lang === "es" ? "data-desc-es" : "data-desc-en") || metaDescription.content
      );
    }

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function note(key) {
    if (!formNote) return "";
    return formNote.getAttribute("data-" + key + "-" + currentLang)
      || formNote.getAttribute("data-" + key + "-en")
      || "";
  }

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", attr(toggle, "data-aria"));
    menu.classList.remove("is-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute(
        "aria-label",
        open
          ? attr(toggle, "data-aria")
          : (attr(toggle, "data-aria-close") || attr(toggle, "data-aria"))
      );
      menu.classList.toggle("is-open", !open);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-set-lang"));
    });
  });

  applyLanguage(currentLang);

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const contactForm = document.querySelector("#contact-form");
  const contactEmail = "skhander@gmail.com";
  const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

  if (contactForm) {
    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const interest = String(formData.get("interest") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (submitButton) submitButton.disabled = true;
      if (formNote) formNote.textContent = note("sending");

      try {
        const response = await fetch("https://formsubmit.co/ajax/" + contactEmail, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            name: name,
            email: email,
            interest: interest,
            message: message || note("empty"),
            _subject: note("subject") + interest,
            _replyto: email,
            _template: "table"
          })
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(result.message || "Send failed");
        }

        contactForm.reset();
        applyLanguage(currentLang);
        if (formNote) formNote.textContent = note("success");
      } catch (error) {
        if (formNote) formNote.textContent = note("error");
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }
})();
