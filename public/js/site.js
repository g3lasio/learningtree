// Partes que se mueven: menú del teléfono, submenús, idioma, testimonios, ventana de bienvenida y formulario.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));

  // Menú del teléfono (panel verde de pantalla completa, como en Wix)
  const toggle = $(".menu-toggle");
  const menu = $("#mobile-menu");
  if (toggle && menu) {
    const closeBtn = $(".mobile-close", menu);
    const setOpen = (open) => {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
      (open ? closeBtn : toggle).focus();
    };
    toggle.addEventListener("click", () => setOpen(true));
    closeBtn.addEventListener("click", () => setOpen(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) setOpen(false); });
  }

  // Submenús (Our Approach, Admissions)
  $$(".sub-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const li = btn.parentElement;
      const open = li.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });

  // Selector de idioma
  const lang = $(".lang");
  if (lang) {
    const b = $(".lang-btn", lang);
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = lang.classList.toggle("open");
      b.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", () => {
      lang.classList.remove("open");
      b.setAttribute("aria-expanded", "false");
    });
  }

  // Testimonios
  const slides = $$(".slide");
  if (slides.length) {
    const dots = $$(".dot");
    let i = 0;
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => (s.hidden = k !== i));
      dots.forEach((d, k) => d.setAttribute("aria-current", String(k === i)));
    };
    dots.forEach((d, k) => d.addEventListener("click", () => show(k)));
    const prev = $(".slide-prev");
    const next = $(".slide-next");
    if (prev) prev.addEventListener("click", () => show(i - 1));
    if (next) next.addEventListener("click", () => show(i + 1));
  }

  // Ventana de bienvenida ($60): se abre sola una vez por visita y con el botón redondo.
  const box = $("#welcome");
  if (box) {
    const close = () => (box.hidden = true);
    const open = () => (box.hidden = false);
    $(".welcome-close", box).addEventListener("click", close);
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    const opener = $(".welcome-open");
    if (opener) opener.addEventListener("click", open);
    let seen = false;
    try { seen = sessionStorage.getItem("lt-welcome") === "1"; } catch (e) {}
    if (!seen) {
      setTimeout(open, 3000);
      try { sessionStorage.setItem("lt-welcome", "1"); } catch (e) {}
    }
  }

  // Ventana de vacunas (página de inscripción) con sus pestañas.
  const vx = $("#vaccines");
  if (vx) {
    const opener = $('[data-open="vaccines"]');
    const hide = () => {
      vx.hidden = true;
      if (opener) opener.focus();
    };
    if (opener) opener.addEventListener("click", () => {
      vx.hidden = false;
      $(".tab", vx).focus();
    });
    $$(".modal-close, .modal-x", vx).forEach((b) => b.addEventListener("click", hide));
    vx.addEventListener("click", (e) => { if (e.target === vx) hide(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !vx.hidden) hide(); });
    const tabs = $$(".tab", vx);
    tabs.forEach((t) =>
      t.addEventListener("click", () => {
        tabs.forEach((o) => {
          const on = o === t;
          o.setAttribute("aria-selected", String(on));
          document.getElementById(o.getAttribute("aria-controls")).hidden = !on;
        });
      })
    );
  }

  // Fecha de inicio: muestra "Choose a date" como en Wix y abre el calendario al tocarla.
  $$(".date-input").forEach((d) => {
    d.addEventListener("focus", () => {
      d.type = "date";
      try { if (d.showPicker) d.showPicker(); } catch (e) {}
    });
    d.addEventListener("blur", () => { if (!d.value) d.type = "text"; });
  });

  // Galerías del portafolio: como en Wix, cada foto va a la columna que va más corta.
  const pfGrid = $(".pf-grid");
  if (pfGrid) {
    const cols = $$(".pf-col", pfGrid);
    const items = $$(".pf-item", pfGrid).sort((a, b) => parseInt(a.style.order, 10) - parseInt(b.style.order, 10));
    const place = () => {
      if (cols.length !== 2 || getComputedStyle(cols[0]).display === "contents") return;
      const h = [0, 0];
      items.forEach((it) => {
        const im = $("img", it);
        const r = im && im.naturalWidth ? im.naturalHeight / im.naturalWidth : 16 / 9;
        const k = h[1] < h[0] ? 1 : 0;
        cols[k].appendChild(it);
        h[k] += r + 0.07;
      });
    };
    $$("img", pfGrid).forEach((im) => { if (!im.complete) im.addEventListener("load", place); });
    window.addEventListener("resize", place);
    place();
  }

  // Formulario de contacto: revisa los obligatorios y lo manda sin salir de la página.
  const form = $(".contact-form");
  if (form) {
    const es = form.dataset.lang === "es";
    const status = $(".form-status", form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const ageErr = $(".field-error", form);
      const age = form.elements.child_age;
      if (ageErr) ageErr.hidden = !!age.value;
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const btn = $("button[type=submit]", form);
      btn.disabled = true;
      const data = Object.fromEntries(new FormData(form));
      try {
        const r = await fetch(form.action, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!r.ok) throw new Error(String(r.status));
        form.reset();
        // TODO: confirmar el mensaje exacto que Wix muestra al enviar.
        status.textContent = es ? "¡Gracias por tu envío!" : "Thanks for submitting!";
      } catch (err) {
        status.textContent = es ? "No se pudo enviar. Intenta de nuevo." : "Something went wrong. Please try again.";
      }
      status.hidden = false;
      btn.disabled = false;
    });
  }
})();
