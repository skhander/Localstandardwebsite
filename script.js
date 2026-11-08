/* Page behavior for Local Standard.
   Marquee, float, and spin live in brand.js.
   The menu and the email draft are this page. */

(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menu");
    menu.classList.remove("is-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Menu" : "Close menu");
      menu.classList.toggle("is-open", !open);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const contactForm = document.querySelector("#contact-form");
  const formNote = document.querySelector("#form-note");
  const contactEmail = "skhander@gmail.com";

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const interest = String(formData.get("interest") || "").trim();
      const message = String(formData.get("message") || "").trim();
      const subject = encodeURIComponent("Project inquiry — " + interest);
      const body = encodeURIComponent(
        "Hi Local Standard,\n\n" +
        "My name is " + name + " (" + email + ").\n" +
        "I’m interested in: " + interest + ".\n\n" +
        (message ? message + "\n\n" : "") +
        "Looking forward to talking."
      );

      window.location.href = "mailto:" + contactEmail + "?subject=" + subject + "&body=" + body;
      if (formNote) formNote.textContent = "Your email draft is ready. Give it a look, then hit send.";
    });
  }
})();
