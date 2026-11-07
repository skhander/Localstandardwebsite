const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.querySelector(".sr-only").textContent = isOpen ? "Open navigation" : "Close navigation";
    siteMenu.classList.toggle("is-open", !isOpen);
  });

  siteMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.querySelector(".sr-only").textContent = "Open navigation";
      siteMenu.classList.remove("is-open");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());

const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");
// Contact form recipient provided by Local Standard.
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