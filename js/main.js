(function () {
  const price = (value) => `${value} €`;

  const allergensFor = (item, groupName) => {
    const fromDish = (window.DISH_ALLERGENS && window.DISH_ALLERGENS[item.es]) || item.allergens || [];
    const fromGroup = (groupName && window.GROUP_ALLERGENS && window.GROUP_ALLERGENS[groupName]) || [];
    return [...new Set([...fromDish, ...fromGroup])];
  };

  const allergenChips = (codes) => {
    if (!codes.length) {
      return `<div class="allergens"><span class="allergen allergen-empty">Sin alérgenos declarados</span></div>`;
    }
    const labels = window.ALLERGEN_LABELS || {};
    return `<div class="allergens" aria-label="Alérgenos">${codes
      .map((c) => `<span class="allergen" title="${labels[c] || c}">${c}<span>${labels[c] || c}</span></span>`)
      .join("")}</div>`;
  };

  const itemHtml = (item, groupName) => {
    const codes = allergensFor(item, groupName);
    return `
    <article class="menu-item">
      <div>
        <div class="es">${item.es}</div>
        <div class="en">${item.en}</div>
        ${item.note ? `<div class="note">${item.note}</div>` : ""}
        ${allergenChips(codes)}
      </div>
      <div class="price">${price(item.price)}</div>
    </article>`;
  };

  function renderMenu(root, compact) {
    if (!root || !window.MENU_DATA) return;
    const cats = window.MENU_DATA.categories;
    const tabs = document.querySelector("[data-menu-tabs]");
    if (tabs) {
      tabs.innerHTML = cats
        .map(
          (c, i) =>
            `<button class="chip${i === 0 ? " is-active" : ""}" data-target="${c.id}">${c.es}</button>`
        )
        .join("");
    }

    root.innerHTML = cats
      .map((cat) => {
        const groups = cat.groups
          ? cat.groups
              .map(
                (g) =>
                  `<div class="menu-group"><h3>${g.es} <small style="font-family:var(--sans);letter-spacing:.16em;text-transform:uppercase;font-size:.68rem;color:var(--gold);margin-left:.4rem">${g.en}</small></h3>${g.items.map((item) => itemHtml(item, g.es)).join("")}</div>`
              )
              .join("")
          : (cat.items || []).map(itemHtml).join("");
        return `<section class="menu-section" id="${cat.id}">
          <h2>${cat.es} <small>${cat.en}</small></h2>
          ${groups}
        </section>`;
      })
      .join("");

    if (tabs) {
      tabs.querySelectorAll("[data-target]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const el = document.getElementById(btn.dataset.target);
          if (!el) return;
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      const chips = [...tabs.querySelectorAll("[data-target]")];
      const sections = cats.map((c) => document.getElementById(c.id)).filter(Boolean);
      const spy = () => {
        let current = sections[0];
        sections.forEach((s) => {
          if (s.getBoundingClientRect().top <= 160) current = s;
        });
        chips.forEach((c) => c.classList.toggle("is-active", c.dataset.target === current.id));
      };
      window.addEventListener("scroll", spy, { passive: true });
      spy();
    }

    if (compact) return;
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 80);
    }
  }

  renderMenu(document.querySelector("[data-menu]"));

  const galleryRoot = document.querySelector("[data-gallery]");
  if (galleryRoot) {
    const items = [
      { src: "assets/images/tomahawk.jpg", title: "Tomahawk a la brasa", cat: "carnes" },
      { src: "assets/images/gallery/ribeye.jpg", title: "Chuletón", cat: "carnes" },
      { src: "assets/images/gallery/ribs.jpg", title: "Costillas", cat: "carnes" },
      { src: "assets/images/gallery/tomahawk-stock.jpg", title: "Corte premium", cat: "carnes" },
      { src: "assets/images/carne-close.jpg", title: "Carne a punto", cat: "carnes" },
      { src: "assets/images/steak-plate.jpg", title: "Plato de parrilla", cat: "carnes" },
      { src: "assets/images/feast.jpg", title: "Parrillada", cat: "parrilla" },
      { src: "assets/images/asado.webp", title: "Asado", cat: "parrilla" },
      { src: "assets/images/grill-fire.jpg", title: "Brasa", cat: "parrilla" },
      { src: "assets/images/gallery/grill.jpg", title: "Grill", cat: "parrilla" },
      { src: "assets/images/gallery/ember.jpg", title: "Brasas", cat: "parrilla" },
      { src: "assets/images/gallery/chimichurri.jpg", title: "Cocina de fuego", cat: "parrilla" },
      { src: "assets/images/gallery/seafood.jpg", title: "Mariscos", cat: "mariscos" },
      { src: "assets/images/gallery/prawns.jpg", title: "Gambas", cat: "mariscos" },
      { src: "assets/images/gallery/cuttlefish.jpg", title: "Pescado a la parrilla", cat: "mariscos" },
      { src: "assets/images/plato-3.png", title: "Especialidad de la casa", cat: "carnes" },
      { src: "assets/images/plato-4.png", title: "Cortes argentinos", cat: "carnes" },
      { src: "assets/images/insta-1.jpg", title: "La Estancia", cat: "ambiente" },
      { src: "assets/images/insta-2.jpg", title: "Sala", cat: "ambiente" },
      { src: "assets/images/insta-3.jpg", title: "Mesa", cat: "ambiente" },
      { src: "assets/images/gallery/dining.jpg", title: "Comedor", cat: "ambiente" },
      { src: "assets/images/gallery/steakhouse.jpg", title: "Asador", cat: "ambiente" },
      { src: "assets/images/interior.jpg", title: "Interior", cat: "ambiente" },
      { src: "assets/images/evento.jpg", title: "Ambiente", cat: "ambiente" },
      { src: "assets/images/gallery/wine.jpg", title: "Vinos", cat: "ambiente" },
      { src: "assets/images/panqueques.jpg", title: "Panqueque", cat: "parrilla" },
      { src: "assets/images/portada-luis.png", title: "Luis, al frente de la casa", cat: "equipo" },
      { src: "assets/images/gallery/plated.jpg", title: "Mesa servida", cat: "ambiente" },
      { src: "assets/images/bebidas.jpg", title: "Bebidas", cat: "ambiente" },
      { src: "assets/images/istock-steak.jpg", title: "Corte a la brasa", cat: "carnes" }
    ];

    const draw = (filter) => {
      galleryRoot.innerHTML = items
        .filter((i) => filter === "all" || i.cat === filter)
        .map(
          (i) =>
            `<figure data-src="${i.src}" data-title="${i.title}"><img src="${i.src}" alt="${i.title}" loading="lazy"><figcaption>${i.title}</figcaption></figure>`
        )
        .join("");
    };
    draw("all");

    document.querySelectorAll("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        draw(btn.dataset.filter);
      });
    });

    const box = document.querySelector("[data-lightbox]");
    const boxImg = box && box.querySelector("img");
    galleryRoot.addEventListener("click", (e) => {
      const fig = e.target.closest("figure");
      if (!fig || !box) return;
      boxImg.src = fig.dataset.src;
      boxImg.alt = fig.dataset.title;
      box.classList.add("is-open");
    });
    if (box) {
      box.addEventListener("click", () => box.classList.remove("is-open"));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") box.classList.remove("is-open");
      });
    }
  }

  const calRoot = document.querySelector("[data-calendar]");
  if (calRoot) {
    const title = document.querySelector("[data-cal-title]");
    const slotsRoot = document.querySelector("[data-slots]");
    const dateInput = document.querySelector("[name='fecha']");
    const timeInput = document.querySelector("[name='hora']");
    let view = new Date();
    view.setDate(1);
    let selected = null;

    const lunch = ["13:30", "14:00", "14:30", "15:00"];
    const dinner = ["19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];

    const months = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const renderCal = () => {
      const year = view.getFullYear();
      const month = view.getMonth();
      title.textContent = `${months[month]} ${year}`;
      const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
      const days = new Date(year, month + 1, 0).getDate();
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      let html = ["L", "M", "X", "J", "V", "S", "D"].map((d) => `<div class="dow">${d}</div>`).join("");
      for (let i = 0; i < firstDow; i++) html += "<div></div>";
      for (let d = 1; d <= days; d++) {
        const date = new Date(year, month, d);
        const iso = date.toISOString().slice(0, 10);
        const disabled = date < today;
        const isSel = selected === iso;
        html += `<button type="button" ${disabled ? "disabled" : ""} class="${isSel ? "is-selected" : ""}" data-day="${iso}">${d}</button>`;
      }
      calRoot.innerHTML = html;
    };

    const renderSlots = (iso) => {
      if (!iso) {
        slotsRoot.innerHTML = "<p class='proto-note'>Elige un día para ver horarios.</p>";
        return;
      }
      const day = new Date(iso + "T12:00:00").getDay();
      const times = day === 0 || day === 5 || day === 6 ? lunch.concat(dinner) : dinner;
      slotsRoot.innerHTML = times
        .map((t) => `<button type="button" data-time="${t}">${t} Hrs</button>`)
        .join("");
    };

    renderCal();
    renderSlots(null);

    document.querySelector("[data-cal-prev]").addEventListener("click", () => {
      view.setMonth(view.getMonth() - 1);
      renderCal();
    });
    document.querySelector("[data-cal-next]").addEventListener("click", () => {
      view.setMonth(view.getMonth() + 1);
      renderCal();
    });
    calRoot.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-day]");
      if (!btn) return;
      selected = btn.dataset.day;
      if (dateInput) dateInput.value = selected;
      renderCal();
      renderSlots(selected);
    });
    slotsRoot.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-time]");
      if (!btn) return;
      slotsRoot.querySelectorAll("button").forEach((b) => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      if (timeInput) timeInput.value = btn.dataset.time;
    });

    const form = document.querySelector("[data-booking-form]");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const note = document.querySelector("[data-booking-ok]");
        if (note) {
          note.hidden = false;
          note.textContent =
            "Maquetación: en WordPress este formulario lo sustituye el plugin Booking Calendar. Tus reservas reales no se tocan.";
        }
      });
    }
  }

  const contact = document.querySelector("[data-contact-form]");
  if (contact) {
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      const note = document.querySelector("[data-contact-ok]");
      if (note) {
        note.hidden = false;
        note.textContent = "Mensaje de prueba del prototipo. En WordPress se conectará al formulario real.";
      }
    });
  }

  const legend = document.querySelector("[data-allergen-legend]");
  if (legend && window.ALLERGEN_LABELS) {
    legend.innerHTML = Object.entries(window.ALLERGEN_LABELS)
      .map(([code, name]) => `<span class="allergen">${code}<span>${name}</span></span>`)
      .join("");
  }

})();
