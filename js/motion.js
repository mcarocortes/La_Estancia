(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const intro = document.querySelector("[data-intro]");
  const veil = document.querySelector("[data-veil]");
  const nav = document.querySelector(".nav-grid");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  const playIntro = () => {
    if (!intro || reduce) {
      document.body.classList.remove("is-intro");
      if (intro) intro.classList.add("is-out");
      return;
    }
    document.body.classList.add("is-intro");
    requestAnimationFrame(() => intro.classList.add("is-ready"));
    window.setTimeout(() => {
      intro.classList.add("is-out");
      document.body.classList.remove("is-intro");
    }, 1400);
  };

  if (sessionStorage.getItem("estancia-seen")) {
    if (intro) intro.classList.add("is-out");
    document.body.classList.remove("is-intro");
    if (veil && !reduce) {
      veil.classList.add("is-leave");
      window.setTimeout(() => veil.classList.remove("is-leave"), 850);
    }
  } else {
    playIntro();
    sessionStorage.setItem("estancia-seen", "1");
  }

  document.querySelectorAll('a[href$=".html"], a[href^="index.html"], a[href^="carta.html"]').forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https:") || a.target === "_blank") return;
    if (href.includes("#") && href.split("#")[0] === (location.pathname.split("/").pop() || "index.html")) return;
    a.addEventListener("click", (e) => {
      if (reduce || !veil || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      veil.classList.add("is-cover");
      window.setTimeout(() => {
        location.href = href;
      }, 620);
    });
  });

  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  const clockPin = document.querySelector("[data-clock-pin]");
  const hourHand = document.querySelector("[data-hand-hour]");
  const minuteHand = document.querySelector("[data-hand-minute]");
  const clockTime = document.querySelector("[data-clock-time]");
  const clockLabel = document.querySelector("[data-clock-label]");

  const setClock = (progress) => {
    const start = 13 * 60 + 30;
    const end = 24 * 60;
    const minutes = Math.round(start + (end - start) * progress);
    const h24 = Math.floor(minutes / 60) % 24;
    const m = minutes % 60;
    const pad = (n) => String(n).padStart(2, "0");
    if (clockTime) clockTime.textContent = `${pad(h24)}:${pad(m)}`;
    if (clockLabel) {
      clockLabel.textContent = h24 >= 19 || h24 < 1 ? "Cena a la brasa" : "Mediodía de fin de semana";
    }
    const hourDeg = ((h24 % 12) + m / 60) * 30;
    const minuteDeg = m * 6;
    if (hourHand) hourHand.style.transform = `rotate(${hourDeg}deg)`;
    if (minuteHand) minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  };

  const hscroll = document.querySelector("[data-hscroll]");
  const track = document.querySelector("[data-hscroll-track]");
  const heroPin = document.querySelector("[data-hero-pin]");
  const heroMeat = document.querySelector("[data-hero-meat]");
  const heroCopy = document.querySelector("[data-hero-copy]");
  const heroLines = [...document.querySelectorAll("[data-hero-line]")];
  const frames = [...document.querySelectorAll("[data-parallax-slow] img")];
  const words = [...document.querySelectorAll("[data-word]")];

  const updateHero = () => {
    if (!heroPin || !heroMeat || !heroCopy) return;
    if (reduce) {
      heroMeat.style.transform = "none";
      heroCopy.style.transform = "none";
      heroLines.forEach((line) => {
        line.style.opacity = "1";
        line.style.filter = "none";
      });
      return;
    }
    const rect = heroPin.getBoundingClientRect();
    const total = Math.max(heroPin.offsetHeight - window.innerHeight, 1);
    const p = clamp(-rect.top / total, 0, 1);
    const scale = 0.78 + p * 0.52;
    heroMeat.style.transform = `scale(${scale})`;
    heroCopy.style.transform = `translate3d(0, ${-p * 72}vh, 0)`;
    const focusY = window.innerHeight * 0.5;
    const band = window.innerHeight * 0.26;
    heroLines.forEach((line) => {
      const mid = line.getBoundingClientRect().top + line.offsetHeight / 2;
      const dist = Math.abs(mid - focusY) / band;
      const t = clamp(1 - dist, 0, 1);
      line.style.opacity = String((0.12 + t * 0.88).toFixed(3));
      line.style.filter = `blur(${((1 - t) * 8).toFixed(1)}px)`;
    });
  };

  const onScroll = () => {
    updateHero();

    if (clockPin && !reduce) {
      const rect = clockPin.getBoundingClientRect();
      const total = clockPin.offsetHeight - window.innerHeight;
      const p = clamp((-rect.top) / Math.max(total, 1), 0, 1);
      setClock(p);
    }

    if (hscroll && track && window.innerWidth > 980 && !reduce) {
      const rect = hscroll.getBoundingClientRect();
      const total = hscroll.offsetHeight - window.innerHeight;
      const p = clamp((-rect.top) / Math.max(total, 1), 0, 1);
      const max = track.scrollWidth - window.innerWidth;
      track.style.transform = `translate3d(${-max * p}px,0,0)`;
    }

    frames.forEach((img) => {
      if (reduce) return;
      const box = img.parentElement.getBoundingClientRect();
      const offset = (box.top - window.innerHeight * 0.35) * 0.1;
      img.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    });

    words.forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.72) {
        window.setTimeout(() => el.classList.add("is-on"), i * 90);
      }
    });
  };

  if (clockPin) setClock(0);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  document.querySelectorAll(".fade-up, .reveal-line").forEach((el) => {
    if (reduce) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
  });
})();
