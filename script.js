/* Page behavior for Local Standard.
   Marquee, float, and spin live in brand.js.
   The menu and the contact email send are this page. */

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
      if (formNote) formNote.textContent = "Sending…";

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
            message: message || "(No details added.)",
            _subject: "Project inquiry — " + interest,
            _replyto: email,
            _template: "table"
          })
        });

        const result = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(result.message || "Send failed");
        }

        contactForm.reset();
        if (formNote) {
          formNote.textContent = "Got it — we’ll be in touch soon.";
        }
      } catch (error) {
        if (formNote) {
          formNote.textContent = "Something went wrong. Email skhander@gmail.com directly and we’ll get back to you.";
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }
})();
