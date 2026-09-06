(function () {
  const STORAGE_KEY = "estancia-lang";
  const ICONS = {
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>',
    fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z"/></svg>'
  };

  const I18N = {
    es: {
      skip: "Saltar al contenido",
      menu: "Menú",
      close: "Cerrar",
      book: "Reservar",
      bookTable: "Reservar mesa",
      bookNow: "Reservar mesa ahora",
      call: "Llamar",
      write: "Escribir",
      maps: "Abrir en Maps",
      howTo: "Cómo llegar",
      nav: { inicio: "Inicio", carta: "Carta", galeria: "Galería", contacto: "Ubicación", reservas: "Reservar" },
      footer: {
        blurb: "Parrilla argentina en Alicante. Carnes a la brasa, mariscos y una carta de vinos para quedarse.",
        menu: "Carta",
        full: "Carta completa",
        gallery: "Galería de platos",
        qr: "Carta QR",
        hours: "Horario",
        hoursText: "Lu–Mi y Ju: 19:00 – 00:00<br>Ma: Cerrado<br>Vi–Sa–Do: 13:30–16:00 / 19:00 – 00:00",
        contact: "Contacto",
        proto: "Prototipo de rediseño · WordPress en el siguiente paso",
        find: "Encuentra el restaurante",
        visit: "Visítanos",
        address: "Virgen del Socorro 79, Alicante, España",
        directions: "Cómo llegar",
        bookK: "Reserva mesa",
        reserve: "Reservar",
        reserveP: "¿Una cena para dos o una mesa larga con familia o amigos? Reserva ahora.",
        booking: "Reserva",
        email: "Email",
        callUs: "Llámanos",
        online: "Reserva online"
      },
      home: {
        title: "Asador La Estancia · Parrilla argentina en Alicante",
        h1: "Bienvenidos a",
        note: "Parrilla argentina en Alicante · Virgen del Socorro 79",
        aboutK: "Nuestro patrimonio",
        galleryK: "Los platos",
        galleryMore: "Ver galería",
        intro: "Somos la parrilla argentina de Alicante, un sitio para sentarse con los tuyos y disfrutar",
        introP: "Asador La Estancia es un clásico restaurante de carnes argentinas. Con raíces en la tradición, ofrecemos a nuestros clientes un ambiente elegante y vibrante, una cocina galardonada y vinos impecables, haciendo de cada comida con nosotros una experiencia inolvidable.",
        cta1: "Excelencia en cada brasa, elegancia en cada detalle.",
        cardMeats: "Carnes",
        cardSea: "Mariscos",
        cardDesserts: "Postres",
        cardWine: "Vinos y cócteles",
        fullMenu: "Ver carta completa",
        kicker: "Recomendado por el chef",
        grill: "Destacados del Menú",
        starters: "Entrantes",
        meats: "Carnes",
        visualAlt: "Plato de la casa a la parrilla",
        cta: "Un rincón exclusivo: descubre una experiencia gastronómica única.",
        beach: "Virgen del Socorro 79, Alicante. España",
        awardsK: "Nuestra excelencia reconocida",
        awards: "Premios",
        eventsK: "Momentos Compartidos",
        eventsTitle: "Grupos y Celebraciones",
        eventsP: "Diseñado para celebraciones y eventos grupales, ofrecemos menús concertados a medida, mesas largas y un servicio impecable. Disfruta de la auténtica alta cocina a las brasas en un ambiente exclusivo para tus reuniones familiares o de empresa.",
        events1: "Menús para grupos",
        events2: "Menús concertados",
        events3: "Celebraciones y mesas largas",
        eventsMore: "Reservar mesa para grupos",
        quote: "Más que un restaurante, buscamos construir un refugio donde el espacio, el fuego y la calma logren que cada visita se sienta como en casa.",
        cite: "- Luis Cortés. Chef / Dueño"
      },
      tiles: {
        from: "De la casa", menu: "Carta", viewMenu: "Ver menú",
        grill: "Parrilla", meats: "Carnes", viewDishes: "Ver platos",
        sea: "También el mar", seafood: "Mariscos", viewCarta: "Ver carta",
        end: "El final", desserts: "Postres",
        long: "Mesas largas", celebrate: "Celebrar", book: "Reservar"
      },
      dishes: [
        ["Pulpo braseado", "Con puré de patatas."],
        ["Empanadas criollas", "Carne o pollo."],
        ["Gambas al ajillo", "Al ajillo, de la casa."],
        ["Queso provoleta", "Fundido a la parrilla."],
        ["Mollejas de ternera", "Al limón."],
        ["Calamares a la andaluza", "Crujientes."],
        ["Entrecot argentino", "Con patatas fritas."],
        ["Entraña", "Con patatas fritas."],
        ["Solomillo de ternera", "Con patatas fritas."],
        ["Chuletón de Ávila 500 g", "Con patatas fritas."],
        ["Tomahawk 1,1 kg", "Para 2. Ensalada, patatas y vino de la casa."],
        ["Parrillada de carnes", "Para 2. Pollo, chorizo, costillas, tira, entraña y entrecot."]
      ],
      awards: [
        "Insignia de recomendación por opiniones de clientes.",
        "TripAdvisor. Certificado de excelencia por 5 años consecutivos.",
        "Más de 2.000 opiniones en Google",
        "Puntuado una de los mejores restaurantes asadores de Alicante"
      ],
      carta: {
        title: "Carta · Asador La Estancia",
        h1: "La carta",
        lead: "Carnes, mar, vinos y postres. En español e inglés, con alérgenos en cada plato.",
        all: "Toda la carta",
        legend: "<strong>Alérgenos.</strong> Códigos según el reglamento UE. Orientativo: confirma siempre en sala si viajas con alergia.",
        table: "Mesa"
      },
      galeria: {
        title: "Galería · Asador La Estancia",
        h1: "Los platos",
        lead: "Brasa, mar y mesa. Una galería para ver lo que llega al plato."
      },
      reservas: {
        title: "Reservar · Asador La Estancia",
        h1: "Reservar mesa",
        lead: "Misma lógica que el Booking Calendar actual. En WordPress, el plugin entra en esta caja.",
        hours: "Horario",
        h2: "Tu mesa, a la hora de la brasa.",
        notice: "La reserva se anula automáticamente al existir un retraso de 15 minutos respecto a la hora programada.",
        d1: "Lunes, miércoles y jueves",
        d2: "Viernes a domingo",
        box: "Hueco reservado para el calendario de WordPress. No se toca el historial de reservas.",
        boxP: "Cuando pases este diseño a WordPress, aquí irá el shortcode del plugin que ya usas. El formulario (nombre, personas, hora, teléfono) se mantiene."
      },
      contacto: {
        title: "Contacto · Asador La Estancia",
        h1: "Ubicación",
        lead: "Virgen del Socorro 79, Alicante. A un paso de la playa.",
        visit: "Visítanos",
        h2: "Cómo llegar.",
        phone: "Teléfono",
        d1: "Lu–Mi y Ju",
        d2: "Vi–Sa–Do"
      }
    },
    en: {
      skip: "Skip to content",
      menu: "Menu",
      close: "Close",
      book: "Book a table",
      bookTable: "Book a table",
      bookNow: "Book a table now",
      call: "Call",
      write: "Message",
      maps: "Open in Maps",
      howTo: "Find us",
      nav: { inicio: "Home", carta: "Menu", galeria: "Gallery", contacto: "Location", reservas: "Book a table" },
      footer: {
        blurb: "Argentinian grill in Alicante. Fire-cooked meats, seafood and a wine list worth staying for.",
        menu: "Menu",
        full: "Full menu",
        gallery: "Dish gallery",
        qr: "QR menu",
        hours: "Hours",
        hoursText: "Mon–Wed & Thu: 19:00 – 00:00<br>Tues: Closed<br>Fri–Sun: 13:30–16:00 / 19:00 – 00:00",
        contact: "Contact",
        proto: "Redesign prototype · WordPress comes next",
        find: "Find the restaurant",
        visit: "Visit us",
        address: "Virgen del Socorro 79, Alicante, Spain",
        directions: "Get directions",
        bookK: "Book a table",
        reserve: "Reservation",
        reserveP: "Planning a dinner for two or a long table with family or friends? Book a table now.",
        booking: "Booking",
        email: "Email",
        callUs: "Call us",
        online: "Online reservation"
      },
      home: {
        title: "Asador La Estancia · Argentinian grill in Alicante",
        h1: "Welcome to",
        note: "Argentinian grill in Alicante · Virgen del Socorro 79",
        aboutK: "The house",
        galleryK: "The dishes",
        galleryMore: "View gallery",
        intro: "We are Alicante’s Argentinian grill, a place to sit with your people and enjoy",
        introP: "Asador La Estancia is a classic Argentinian steakhouse. Rooted in tradition, we offer our guests an elegant, vibrant room, award-winning cooking and impeccable wines, making every meal with us unforgettable.",
        cta1: "Excellence in every ember, elegance in every detail.",
        cardMeats: "Meats",
        cardSea: "Seafood",
        cardDesserts: "Desserts",
        cardWine: "Wine & cocktails",
        fullMenu: "View full menu",
        kicker: "Recommended by the chef",
        grill: "Menu highlights",
        starters: "Starters",
        meats: "Meats",
        visualAlt: "House grill dish",
        cta: "One house. The grill, the wine and the table, in the centre of Alicante.",
        beach: "Virgen del Socorro 79, a step from the beach.",
        awardsK: "Awards",
        awards: "Recognition",
        eventsK: "Shared moments",
        eventsTitle: "Groups and celebrations",
        eventsP: "Designed for celebrations and group events, we offer tailored set menus, long tables and impeccable service. Enjoy authentic fire-cooked cuisine in an exclusive room for family or company gatherings.",
        events1: "Group menus",
        events2: "Set menus",
        events3: "Celebrations and long tables",
        eventsMore: "Book a table for groups",
        quote: "More than a restaurant, we want to build a refuge where space, fire and calm make every visit feel like home.",
        cite: "- Luis Cortés. Chef / Owner"
      },
      tiles: {
        from: "The house", menu: "Menu", viewMenu: "View menu",
        grill: "Grill", meats: "Meats", viewDishes: "See dishes",
        sea: "The sea too", seafood: "Seafood", viewCarta: "View menu",
        end: "The end", desserts: "Desserts",
        long: "Long tables", celebrate: "Celebrate", book: "Book a table"
      },
      dishes: [
        ["Grilled octopus", "With mashed potatoes."],
        ["Criolla empanadas", "Meat or chicken."],
        ["Garlic prawns", "House garlic prawns."],
        ["Provoleta cheese", "Melted on the grill."],
        ["Beef sweetbreads", "With lemon."],
        ["Andalusian-style squid", "Crispy."],
        ["Argentinian entrecôte", "With french fries."],
        ["Skirt steak", "With french fries."],
        ["Beef tenderloin", "With french fries."],
        ["Ávila ribeye 500 g", "With french fries."],
        ["Tomahawk 1.1 kg", "For 2. Salad, fries and house wine."],
        ["Mixed grill", "For 2. Chicken, chorizo, ribs, short rib, skirt and entrecôte."]
      ],
      awards: [
        "Recommendation badge from guest reviews.",
        "TripAdvisor. Certificate of Excellence for several years running.",
        "More than 2,000 reviews. The house people look for in Alicante.",
        "Nearly 900 reviews. Meat, room, and coming back."
      ],
      carta: {
        title: "Menu · Asador La Estancia",
        h1: "The menu",
        lead: "Meat, sea, wine and dessert. Spanish and English, with allergens on every dish.",
        all: "Full menu",
        legend: "<strong>Allergens.</strong> EU codes. Indicative: always confirm with the room if you travel with an allergy.",
        table: "Table"
      },
      galeria: {
        title: "Gallery · Asador La Estancia",
        h1: "The dishes",
        lead: "Fire, sea and table. A gallery of what reaches the plate."
      },
      reservas: {
        title: "Book · Asador La Estancia",
        h1: "Book a table",
        lead: "Same logic as the current Booking Calendar. In WordPress, the plugin sits in this box.",
        hours: "Hours",
        h2: "Your table, at grill time.",
        notice: "Reservations are cancelled automatically after a 15-minute delay.",
        d1: "Monday, Wednesday and Thursday",
        d2: "Friday to Sunday",
        box: "Reserved for the WordPress calendar. Existing bookings stay untouched.",
        boxP: "When this design moves to WordPress, the same plugin shortcode goes here. Name, party size, time and phone stay."
      },
      contacto: {
        title: "Contact · Asador La Estancia",
        h1: "Location",
        lead: "Virgen del Socorro 79, Alicante. A step from the beach.",
        visit: "Visit us",
        h2: "How to find us.",
        phone: "Phone",
        d1: "Mon–Wed & Thu",
        d2: "Fri–Sun"
      }
    }
  };

  const NAV = [
    { href: "index.html", id: "inicio" },
    { href: "carta.html", id: "carta" },
    { href: "galeria.html", id: "galeria" },
    { href: "contacto.html", id: "contacto" },
    { href: "reservas.html", id: "reservas" }
  ];

  let lang = localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
  let menuFilter = "all";
  let paintMenu = () => {};

  function t() { return I18N[lang]; }

  function allergenLabels() {
    const pack = window.ALLERGEN_LABELS || {};
    return pack[lang] || pack.es || pack;
  }

  function navLinks(active) {
    const labels = t().nav;
    return NAV.map((item) => {
      const current = item.id === active ? " is-active" : "";
      return `<a class="${current}" href="${item.href}" data-nav="${item.id}">${labels[item.id]}</a>`;
    }).join("");
  }

  function langButtons() {
    return `
      <div class="lang-toggle header-lang" data-lang role="group" aria-label="Language">
        <button type="button" data-set-lang="es" class="${lang === "es" ? "is-active" : ""}" aria-pressed="${lang === "es"}">ES</button>
        <button type="button" data-set-lang="en" class="${lang === "en" ? "is-active" : ""}" aria-pressed="${lang === "en"}">EN</button>
      </div>
    `;
  }

  function mountChrome() {
    const active = document.body.dataset.page || "inicio";
    const header = document.querySelector("[data-header]");
    const footer = document.querySelector("[data-footer]");
    const copy = t();

    if (header) {
      header.innerHTML = `
        <div class="header-top">
          <button class="menu-toggle" type="button" data-open-nav aria-label="${copy.menu}">
            <span data-i18n="menu">${copy.menu}</span>
            <span class="menu-toggle-icon" aria-hidden="true"></span>
          </button>
          <a class="brand" href="index.html">
            <img class="brand-logo brand-logo-full" src="assets/images/brand/logo2.png" alt="Asador La Estancia">
            <img class="brand-logo brand-logo-mark" src="assets/images/brand/Logo1.png" alt="Asador La Estancia">
          </a>
          <div class="header-actions">
            ${langButtons()}
            <a class="btn-ghost header-cta" href="reservas.html" data-i18n="book">${copy.book}</a>
          </div>
        </div>
        <nav class="header-nav" aria-label="Principal">${navLinks(active)}</nav>
      `;
    }

    if (footer) {
      footer.innerHTML = `
        <section class="visit-band">
          <div class="visit-grid">
            <div class="visit-col visit1">
              <p class="section-kicker">${copy.footer.find}</p>
              <h2>${copy.footer.visit}</h2>
              <p class="visit-text">${copy.footer.address}</p>
              <h3>${copy.footer.hours}</h3>
              <p class="visit-text">${copy.footer.hoursText}</p>
              <a class="intro-more" href="https://www.google.com/maps/search/?api=1&query=Virgen+del+Socorro+79+Alicante" target="_blank" rel="noopener">${copy.footer.directions}</a>
            </div>
            <div class="visit-col reservation2">
              <p class="section-kicker">${copy.footer.bookK}</p>
              <h2>${copy.footer.reserve}</h2>
              <p class="visit-text">${copy.footer.reserveP}</p>
              <h3>${copy.footer.booking}</h3>
              <p class="visit-text">${copy.footer.email}: <a href="mailto:reservas.laestancia79@gmail.com">laestancia79@gmail.com</a><br>${copy.footer.callUs}: <a href="tel:+34966350321">+34 966 35 03 21</a></p>
              <a class="intro-more" href="reservas.html">${copy.footer.online}</a>
            </div>
          </div>
        </section>
        <div class="footer-bar">
          <div class="container footer-bar-inner">
            <div class="footer-socials">
              <a href="https://www.facebook.com/AsadorLaEstancia79" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.fb}</a>
              <a href="https://www.instagram.com/asadorlaestancia/" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.ig}</a>
              <a href="https://wa.me/34966350321" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.wa}</a>
            </div>
            <nav class="footer-nav" aria-label="Footer">
              <a href="index.html">${copy.nav.inicio}</a>
              <a href="carta.html">${copy.nav.carta}</a>
              <a href="reservas.html">${copy.nav.reservas}</a>
              <a href="contacto.html">${copy.nav.contacto}</a>
            </nav>
            <p class="footer-legal">© Asador La Estancia · Creado por Macarena Caro</p>
          </div>
        </div>
      `;
    }

    const skip = document.querySelector(".skip");
    if (skip) skip.textContent = copy.skip;

    const drawer = document.querySelector(".nav-drawer") || document.createElement("div");
    drawer.className = "nav-drawer";
    drawer.innerHTML = `
      <button class="close" type="button" data-close-nav>${copy.close}</button>
      <nav>${navLinks(active)}</nav>
    `;
    if (!drawer.parentNode) document.body.appendChild(drawer);

    if (!document.querySelector(".wa")) {
      const wa = document.createElement("a");
      wa.className = "wa";
      wa.href = "https://wa.me/34966350321";
      wa.target = "_blank";
      wa.rel = "noopener";
      wa.setAttribute("aria-label", "WhatsApp");
      wa.innerHTML = ICONS.wa;
      document.body.appendChild(wa);
    }
  }

  function applyPageCopy() {
    const copy = t();
    const page = document.body.dataset.page;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const path = el.dataset.i18n.split(".");
      let value = copy;
      path.forEach((key) => { value = value?.[key]; });
      if (typeof value === "string") el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const path = el.dataset.i18nHtml.split(".");
      let value = copy;
      path.forEach((key) => { value = value?.[key]; });
      if (typeof value === "string") el.innerHTML = value;
    });

    if (page === "inicio" || !page) {
      document.title = copy.home.title;
      setText("[data-copy=h1]", copy.home.h1);
      setText("[data-copy=note]", copy.home.note);
      setText("[data-copy=aboutK]", copy.home.aboutK);
      setText("[data-copy=galleryK]", copy.home.galleryK);
      setText("[data-copy=galleryMore]", copy.home.galleryMore);
      setText("[data-copy=intro]", copy.home.intro);
      setText("[data-copy=introP]", copy.home.introP);
      setText("[data-copy=cta1]", copy.home.cta1);
      setText("[data-copy=cardMeats]", copy.home.cardMeats);
      setText("[data-copy=cardSea]", copy.home.cardSea);
      setText("[data-copy=cardDesserts]", copy.home.cardDesserts);
      setText("[data-copy=cardWine]", copy.home.cardWine);
      setText("[data-copy=fullMenu]", copy.home.fullMenu);
      setText("[data-copy=kicker]", copy.home.kicker);
      setText("[data-copy=grill]", copy.home.grill);
      setText("[data-copy=starters]", copy.home.starters);
      setText("[data-copy=meats]", copy.home.meats);
      document.querySelectorAll("[data-copy-alt]").forEach((el) => {
        const value = copy.home[el.dataset.copyAlt];
        if (value) el.setAttribute("alt", value);
      });
      setText("[data-copy=cta]", copy.home.cta);
      setText("[data-copy=beach]", copy.home.beach);
      setText("[data-copy=awardsK]", copy.home.awardsK);
      setText("[data-copy=awards]", copy.home.awards);
      setText("[data-copy=eventsK]", copy.home.eventsK);
      setText("[data-copy=eventsTitle]", copy.home.eventsTitle);
      setText("[data-copy=eventsP]", copy.home.eventsP);
      setText("[data-copy=events1]", copy.home.events1);
      setText("[data-copy=events2]", copy.home.events2);
      setText("[data-copy=events3]", copy.home.events3);
      setText("[data-copy=eventsMore]", copy.home.eventsMore);
      setText("[data-copy=quote]", copy.home.quote);
      setText("[data-copy=cite]", copy.home.cite);
      document.querySelectorAll("[data-dish]").forEach((el) => {
        const item = copy.dishes[Number(el.dataset.dish)];
        if (!item) return;
        const name = el.querySelector(".name, h4");
        const desc = el.querySelector("p");
        if (name) name.textContent = item[0];
        if (desc) desc.textContent = item[1];
      });
      document.querySelectorAll("[data-award]").forEach((el) => {
        const text = copy.awards[Number(el.dataset.award)];
        if (text) el.textContent = text;
      });
      Object.entries(copy.tiles).forEach(([key, value]) => setText(`[data-tile=${key}]`, value));
    }

    if (page === "carta") {
      document.title = copy.carta.title;
      setText("[data-copy=h1]", copy.carta.h1);
      setText("[data-copy=lead]", copy.carta.lead);
      setHtml("[data-copy=legend]", copy.carta.legend);
      setText("[data-copy=table]", copy.carta.table);
    }

    if (page === "galeria") {
      document.title = copy.galeria.title;
      setText("[data-copy=h1]", copy.galeria.h1);
      setText("[data-copy=lead]", copy.galeria.lead);
    }

    if (page === "reservas") {
      document.title = copy.reservas.title;
      setText("[data-copy=h1]", copy.reservas.h1);
      setText("[data-copy=lead]", copy.reservas.lead);
      setText("[data-copy=hours]", copy.reservas.hours);
      setText("[data-copy=h2]", copy.reservas.h2);
      setText("[data-copy=notice]", copy.reservas.notice);
      setText("[data-copy=d1]", copy.reservas.d1);
      setText("[data-copy=d2]", copy.reservas.d2);
      setText("[data-copy=box]", copy.reservas.box);
      setText("[data-copy=boxP]", copy.reservas.boxP);
    }

    if (page === "contacto") {
      document.title = copy.contacto.title;
      setText("[data-copy=h1]", copy.contacto.h1);
      setText("[data-copy=lead]", copy.contacto.lead);
      setText("[data-copy=visit]", copy.contacto.visit);
      setText("[data-copy=h2]", copy.contacto.h2);
      setText("[data-copy=phone]", copy.contacto.phone);
      setText("[data-copy=d1]", copy.contacto.d1);
      setText("[data-copy=d2]", copy.contacto.d2);
    }
  }

  function setText(sel, value) {
    document.querySelectorAll(sel).forEach((el) => { el.textContent = value; });
  }

  function setHtml(sel, value) {
    document.querySelectorAll(sel).forEach((el) => { el.innerHTML = value; });
  }

  function setLang(next) {
    lang = next === "en" ? "en" : "es";
    localStorage.setItem(STORAGE_KEY, lang);
    mountChrome();
    applyPageCopy();
    paintMenu();
  }

  function bindChrome() {
    document.addEventListener("click", (event) => {
      const langBtn = event.target.closest("[data-set-lang]");
      if (langBtn) {
        setLang(langBtn.dataset.setLang);
        return;
      }
      const drawer = document.querySelector(".nav-drawer");
      if (event.target.closest("[data-open-nav]")) drawer?.classList.add("is-open");
      if (event.target.closest("[data-close-nav]") || event.target.closest(".nav-drawer a")) {
        drawer?.classList.remove("is-open");
      }
    });

    const header = document.querySelector("[data-header]");
    const solidAt = Number(document.body.dataset.solid || 80);
    const onScroll = () => header?.classList.toggle("is-solid", window.scrollY > solidAt);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function allergenChips(name, group) {
    const map = window.DISH_ALLERGENS || {};
    const groups = window.GROUP_ALLERGENS || {};
    const labels = allergenLabels();
    const codes = map[name] || groups[group] || [];
    if (!codes.length) return "";
    return `<div class="allergens">${codes.map((code) => `<span class="chip" title="${labels[code] || code}">${code}</span>`).join("")}</div>`;
  }

  function itemHTML(item, group) {
    const name = item[lang] || item.es;
    const alt = lang === "es" ? item.en : item.es;
    const note = item.note || "";
    return `
      <article class="menu-item">
        <header>
          <h4 class="name">${name}</h4>
          <span class="price">${item.price} €</span>
        </header>
        ${note ? `<p class="desc">${note}</p>` : ""}
        ${alt && alt !== name ? `<p class="en">${alt}</p>` : ""}
        ${allergenChips(item.es, group)}
      </article>
    `;
  }

  function renderFullMenu() {
    const root = document.querySelector("[data-menu]");
    const tabs = document.querySelector("[data-tabs]");
    const legend = document.querySelector("[data-legend]");
    if (!root || !window.MENU_DATA) return;

    const cats = window.MENU_DATA.categories;

    paintMenu = () => {
      const labels = allergenLabels();
      if (legend) {
        legend.innerHTML = Object.entries(labels)
          .map(([code, label]) => `<span class="chip">${code} · ${label}</span>`)
          .join("");
      }
      if (tabs) {
        tabs.innerHTML = `<button type="button" data-cat="all" class="${menuFilter === "all" ? "is-active" : ""}">${t().carta.all}</button>` +
          cats.map((cat) => `<button type="button" data-cat="${cat.id}" class="${menuFilter === cat.id ? "is-active" : ""}">${cat[lang]}</button>`).join("");
      }
      root.innerHTML = cats
        .filter((cat) => menuFilter === "all" || cat.id === menuFilter)
        .map((cat) => {
          const groups = cat.groups
            ? cat.groups.map((group) => `
                <h3>${group[lang]}</h3>
                ${group.items.map((item) => itemHTML(item, group.es)).join("")}
              `).join("")
            : cat.items.map((item) => itemHTML(item)).join("");
          return `<section class="menu-section" id="${cat.id}"><h2>${cat[lang]}</h2><div class="menu-grid">${groups}</div></section>`;
        })
        .join("");
    };

    paintMenu();

    const scrollToMenuHash = () => {
      const id = location.hash.replace("#", "");
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      el.scrollIntoView({ behavior: "auto", block: "start" });
    };

    if (location.hash) {
      requestAnimationFrame(() => {
        scrollToMenuHash();
        setTimeout(scrollToMenuHash, 160);
      });
    }
    window.addEventListener("hashchange", scrollToMenuHash);

    tabs?.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-cat]");
      if (!btn) return;
      menuFilter = btn.dataset.cat;
      paintMenu();
      if (menuFilter !== "all") document.getElementById(menuFilter)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function startHeroSlides() {
    const slides = document.querySelectorAll("[data-hero-slides] .hero-bg");
    if (slides.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    const show = (next) => {
      slides.forEach((slide, i) => slide.classList.toggle("is-active", i === next));
    };

    setInterval(() => {
      index = (index + 1) % slides.length;
      const incoming = slides[index];
      incoming.classList.remove("is-active");
      void incoming.offsetWidth;
      show(index);
    }, 5000);
  }

  function revealOnScroll() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const blocks = document.querySelectorAll([
      ".intro-photo-tall",
      ".intro-copy > *",
      ".intro-stack .intro-photo",
      ".featured",
      ".featured .menu-col",
      ".menu-visual",
      ".cta-band .inner",
      ".cta-cards",
      ".cta-actions",
      ".mosaic",
      ".awards",
      ".award-card",
      ".events-photo",
      ".events-copy",
      ".quote-block",
      ".lookbook",
      ".split-copy",
      ".booking-box",
      ".map-wrap",
      ".menu-page .container > *",
      ".gallery-grid",
      ".page-hero-content"
    ].join(","));

    blocks.forEach((el) => el.classList.add("reveal"));

    document.querySelectorAll(".intro-photo-tall, .intro-copy > *, .intro-stack .intro-photo").forEach((el, i) => {
      el.style.transitionDelay = `${i * 0.12}s`;
    });

    document.querySelectorAll(".award-card, .featured .menu-col").forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i, 4) * 0.12}s`;
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -48px 0px" });

    blocks.forEach((el) => io.observe(el));
  }

  function startLookbook() {
    const rail = document.querySelector("[data-lookbook]");
    if (!rail) return;

    const track = rail.querySelector(".lookbook-track");
    if (!track || track.dataset.cloned === "1") return;

    const set = document.createElement("div");
    set.className = "lookbook-set";
    while (track.firstChild) set.appendChild(track.firstChild);

    const clone = set.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.append(set, clone);
    track.dataset.cloned = "1";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(([entry]) => {
      track.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
    }, { threshold: 0.08 });
    io.observe(rail);
  }

  mountChrome();
  applyPageCopy();
  renderFullMenu();
  bindChrome();
  startHeroSlides();
  startLookbook();
  revealOnScroll();
})();
