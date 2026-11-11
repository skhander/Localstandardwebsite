/* Page behavior for Local Standard.
   Marquee, float, and spin live in brand.js.
   Menu, contact send, and EN/ES copy live here. */

(() => {
  const copy = {
    en: {
      "skip": "Skip to content",
      "lang.group": "Language",
      "nav.label": "Main navigation",
      "nav.services": "Services",
      "nav.book": "Book with Us",
      "nav.menu": "Menu",
      "nav.close": "Close menu",
      "brand.home": "Local Standard, home",
      "doc.title": "NYC Web Design & SEO Agency | Local Standard",
      "doc.description": "Web design, branding, SEO, and AI automation for New York City small businesses. Local Standard helps neighborhood shops get found online.",
      "hero.before": "Great businesses deserve to ",
      "hero.heat": "be seen",
      "hero.after": ".",
      "hero.sub": "Local Standard builds websites and tools to help them stand out.",
      "hero.cta": "Explore Services",
      "services.title": "Services",
      "services.web.title": "Websites",
      "services.web.body": "A modern, clean site that turns visitors into customers.",
      "services.web.cta": "Build your site",
      "services.brand.title": "Branding",
      "services.brand.body": "A clear identity people recognize and remember.",
      "services.brand.cta": "Create your brand",
      "services.vis.title": "Visibility",
      "services.vis.body": "SEO & AEO to help more customers find you.",
      "services.vis.cta": "Get found",
      "services.ai.title": "Automation",
      "services.ai.body": "Custom AI agents set up to handle repetitive tasks.",
      "services.ai.cta": "Save time",
      "offer.label": "Intro Package",
      "offer.lede": "Everything handled. So you can run your business.",
      "offer.web.title": "Your own website",
      "offer.web.body": "A polished, fast site with your services, prices, hours, photos, and a one-tap call button.",
      "offer.search.title": "Google & ChatGPT",
      "offer.search.body": "Your search presence maximized so local customers can find you.",
      "offer.photos.title": "Fresh photos",
      "offer.photos.body": "We visit your shop, take new photos, and add them to your site.",
      "offer.updates.title": "On-demand updates",
      "offer.updates.body": "Text us new hours, prices, or holiday closures. We’ll update your site the same day.",
      "offer.fee": "One-time fee",
      "offer.cta": "Let’s talk",
      "contact.title": "Contact",
      "contact.sub": "Tell us about your business. We'll take it from there.",
      "form.name": "Name",
      "form.email": "Email",
      "form.service": "Service",
      "form.choose": "Choose a Service",
      "form.opt.intro": "Intro Package",
      "form.opt.web": "Website Design & Development",
      "form.opt.brand": "Brand & Identity",
      "form.opt.search": "Reputation & Search (SEO + AEO)",
      "form.opt.ai": "AI & Automation",
      "form.opt.all": "A little bit of everything",
      "form.details": "Details",
      "form.submit": "Let’s talk",
      "form.sending": "Sending…",
      "form.success": "Got it — we’ll be in touch soon.",
      "form.error": "Something went wrong. Email skhander@gmail.com directly and we’ll get back to you.",
      "form.empty": "(No details added.)",
      "form.subject": "Project inquiry — ",
      "footer.speak": "We speak Español, বাংলা, اردو, and हिन्दी",
      "footer.top": "Back to the top"
    },
    es: {
      "skip": "Saltar al contenido",
      "lang.group": "Idioma",
      "nav.label": "Navegación principal",
      "nav.services": "Servicios",
      "nav.book": "Agenda con nosotros",
      "nav.menu": "Menú",
      "nav.close": "Cerrar menú",
      "brand.home": "Local Standard, inicio",
      "doc.title": "Agencia de diseño web y SEO en NYC | Local Standard",
      "doc.description": "Diseño web, marca, SEO y automatización con IA para pequeños negocios en Nueva York. Local Standard ayuda a que te encuentren online.",
      "hero.before": "Los grandes negocios merecen ",
      "hero.heat": "verse",
      "hero.after": ".",
      "hero.sub": "Local Standard crea sitios web y herramientas para que destaquen.",
      "hero.cta": "Ver servicios",
      "services.title": "Servicios",
      "services.web.title": "Sitios web",
      "services.web.body": "Un sitio moderno y limpio que convierte visitas en clientes.",
      "services.web.cta": "Crea tu sitio",
      "services.brand.title": "Marca",
      "services.brand.body": "Una identidad clara que la gente reconoce y recuerda.",
      "services.brand.cta": "Crea tu marca",
      "services.vis.title": "Visibilidad",
      "services.vis.body": "SEO y AEO para que más clientes te encuentren.",
      "services.vis.cta": "Aparece online",
      "services.ai.title": "Automatización",
      "services.ai.body": "Agentes de IA a tu medida para tareas repetitivas.",
      "services.ai.cta": "Ahorra tiempo",
      "offer.label": "Paquete intro",
      "offer.lede": "Todo resuelto. Tú enfócate en tu negocio.",
      "offer.web.title": "Tu propio sitio",
      "offer.web.body": "Un sitio pulido y rápido con tus servicios, precios, horarios, fotos y un botón para llamar al toque.",
      "offer.search.title": "Google y ChatGPT",
      "offer.search.body": "Tu presencia en búsquedas al máximo para que te encuentren clientes locales.",
      "offer.photos.title": "Fotos nuevas",
      "offer.photos.body": "Vamos a tu local, tomamos fotos nuevas y las subimos a tu sitio.",
      "offer.updates.title": "Actualizaciones al momento",
      "offer.updates.body": "Mándanos un texto con horarios, precios o cierres por feriado. Actualizamos tu sitio el mismo día.",
      "offer.fee": "Pago único",
      "offer.cta": "Hablemos",
      "contact.title": "Contacto",
      "contact.sub": "Cuéntanos de tu negocio. Nosotros nos encargamos.",
      "form.name": "Nombre",
      "form.email": "Correo",
      "form.service": "Servicio",
      "form.choose": "Elige un servicio",
      "form.opt.intro": "Paquete intro",
      "form.opt.web": "Diseño y desarrollo web",
      "form.opt.brand": "Marca e identidad",
      "form.opt.search": "Reputación y búsqueda (SEO + AEO)",
      "form.opt.ai": "IA y automatización",
      "form.opt.all": "Un poco de todo",
      "form.details": "Detalles",
      "form.submit": "Hablemos",
      "form.sending": "Enviando…",
      "form.success": "Listo — te escribimos pronto.",
      "form.error": "Algo falló. Escríbenos a skhander@gmail.com y te respondemos.",
      "form.empty": "(Sin detalles.)",
      "form.subject": "Consulta de proyecto — ",
      "footer.speak": "Hablamos Español, বাংলা, اردو y हिन्दी",
      "footer.top": "Volver arriba"
    }
  };

  const STORAGE_KEY = "ls-lang";
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector("#site-menu");
  const metaDescription = document.querySelector('meta[name="description"]');

  let currentLang = "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") currentLang = saved;
  } catch (error) {
    currentLang = document.documentElement.lang === "es" ? "es" : "en";
  }

  function t(key) {
    return (copy[currentLang] && copy[currentLang][key]) || copy.en[key] || key;
  }

  function applyLanguage(lang) {
    if (lang !== "en" && lang !== "es") return;
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-es", lang === "es");
    document.documentElement.classList.toggle("lang-en", lang === "en");

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* ignore private-mode storage failures */
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key || !copy.en[key]) return;
      el.textContent = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (!key || !copy.en[key]) return;
      if (el.classList.contains("menu-toggle")) {
        const open = el.getAttribute("aria-expanded") === "true";
        el.setAttribute("aria-label", open ? t("nav.close") : t("nav.menu"));
        return;
      }
      el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (!key || !copy.en[key]) return;
      el.setAttribute("alt", t(key));
    });

    document.title = t("doc.title");
    if (metaDescription) metaDescription.setAttribute("content", t("doc.description"));

    document.querySelectorAll("[data-set-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  function closeMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", t("nav.menu"));
    menu.classList.remove("is-open");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? t("nav.menu") : t("nav.close"));
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
      if (formNote) formNote.textContent = t("form.sending");

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
            message: message || t("form.empty"),
            _subject: t("form.subject") + interest,
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
        if (formNote) {
          formNote.textContent = t("form.success");
        }
      } catch (error) {
        if (formNote) {
          formNote.textContent = t("form.error");
        }
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }
})();
