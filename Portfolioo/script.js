document.addEventListener("DOMContentLoaded", () => {
  let pageLoaded = false;

  window.addEventListener("load", () => {
    requestAnimationFrame(() => {
      pageLoaded = true;
    });
  });

  const LETTER_STAGGER = 65;
  const LETTER_DURATION = 750;
  const STAGE_GAP = 250;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  function setDelay(el, ms) {
    if (!el) return;
    el.style.transitionDelay = Math.max(ms, 0) + "ms";
  }

  function splitLetters(el) {
    if (!el) return 0;
    if (!el.dataset.split) {
      el.dataset.split = "true";
      el.dataset.originalText = el.textContent;
      const text = el.textContent.toUpperCase();
      el.textContent = "";
      const frag = document.createDocumentFragment();
      [...text].forEach((ch, i) => {
        const span = document.createElement("span");
        span.className = "letter";
        span.textContent = ch === " " ? "\u00A0" : ch;
        span.style.transitionDelay = i * LETTER_STAGGER + "ms";
        frag.appendChild(span);
      });
      el.appendChild(frag);
      return text.length * LETTER_STAGGER + LETTER_DURATION;
    } else {
      const lettersCount = el.querySelectorAll(".letter").length;
      return lettersCount * LETTER_STAGGER + LETTER_DURATION;
    }
  }

  function onScrollReveal(sectionEl, headingEl, afterHeading, resetSection) {
    if (!sectionEl || !headingEl) return;

    if (prefersReducedMotion) {
      headingEl.classList.add("show");
      afterHeading(sectionEl, 0);
      return;
    }

    splitLetters(headingEl);
    resetSection(sectionEl);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = splitLetters(headingEl);
            headingEl.classList.remove("show");
            requestAnimationFrame(() => {
              headingEl.classList.add("show");
              afterHeading(sectionEl, duration + STAGE_GAP);
            });
          } else {
            headingEl.classList.remove("show");
            resetSection(sectionEl);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    io.observe(sectionEl);
  }

  (function initHero() {
    const home = document.getElementById("home");
    if (!home) return;
    const img = home.querySelector(".myImg");
    const eyebrow = home.querySelector(".eyebrow");
    const nameEl = home.querySelector(".name");
    const para = home.querySelector(".para");
    if (!img || !nameEl || !para) return;

    const reveal = () => {
      if (prefersReducedMotion) {
        img.classList.add("show");
        eyebrow && eyebrow.classList.add("show");
        splitLetters(nameEl);
        nameEl.classList.add("show");
        para.classList.add("show");
        return;
      }

      const PHOTO_DURATION = 1000;
      img.classList.add("show");

      const nameStart = PHOTO_DURATION + 200;
      setDelay(eyebrow, PHOTO_DURATION);
      eyebrow && eyebrow.classList.add("show");

      const nameLetterSpan = splitLetters(nameEl);
      nameEl.querySelectorAll(".letter").forEach((sp) => {
        const ownDelay = parseInt(sp.style.transitionDelay, 10) || 0;
        sp.style.transitionDelay = nameStart + ownDelay + "ms";
      });
      nameEl.classList.add("show");

      const paraStart = nameStart + nameLetterSpan + STAGE_GAP;
      setDelay(para, paraStart);
      para.classList.add("show");
    };

    const resetHero = () => {
      img.classList.remove("show");
      eyebrow && eyebrow.classList.remove("show");
      nameEl.classList.remove("show");
      para.classList.remove("show");
      home.removeAttribute("data-revealed");
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!pageLoaded) return;
          if (entry.isIntersecting) {
            if (home.dataset.revealed) return;
            home.dataset.revealed = "true";
            reveal();
          } else {
            resetHero();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );
    io.observe(home);
  })();

  onScrollReveal(
    document.getElementById("education"),
    document.querySelector(".eduHead h2"),
    (section, delay) => {
      const cards = section.querySelectorAll(".card");
      const directions = ["slide-left", "fade-up", "slide-right"];
      cards.forEach((card, i) => {
        setDelay(card, delay);
        card.classList.add("show");
      });
    },
    (section) => {
      const cards = section.querySelectorAll(".card");
      const directions = ["slide-left", "fade-up", "slide-right"];
      cards.forEach((card, i) => {
        card.classList.remove("show");
        card.className = "card " + (directions[i] || "fade-up");
      });
    },
  );

  onScrollReveal(
    document.getElementById("skills"),
    document.querySelector(".skillHead h2"),
    (section, delay) => {
      const tiles = section.querySelectorAll(".skillTile");
      const STEP = 130;
      tiles.forEach((tile, i) => {
        setDelay(tile, delay + i * STEP);
        tile.classList.add("show");
      });
    },
    (section) => {
      section.querySelectorAll(".skillTile").forEach((tile) => {
        tile.classList.remove("show");
        tile.classList.add("scale-in");
      });
    },
  );

  onScrollReveal(
    document.getElementById("certifications"),
    document.querySelector(".certHead h2"),
    (section, delay) => {
      const scroller = section.querySelector(".certScroller");
      if (!scroller) return;
      setDelay(scroller, delay);
      scroller.classList.add("show");
    },
    (section) => {
      const scroller = section.querySelector(".certScroller");
      if (scroller) {
        scroller.classList.remove("show");
        scroller.classList.add("scale-in");
      }
    },
  );

  onScrollReveal(
    document.getElementById("projects"),
    document.querySelector(".projectHead h2"),
    (section, delay) => {
      const scroller = section.querySelector(".projectScroller");
      if (!scroller) return;
      setDelay(scroller, delay);
      scroller.classList.add("show");
    },
    (section) => {
      const scroller = section.querySelector(".projectScroller");
      if (scroller) {
        scroller.classList.remove("show");
        scroller.classList.add("scale-in");
      }
    },
  );

  onScrollReveal(
    document.getElementById("achievements"),
    document.querySelector(".achiHead h2"),
    (section, delay) => {
      const card = section.querySelector(".card");
      if (!card) return;
      setDelay(card, delay);
      card.classList.add("show");
    },
    (section) => {
      const card = section.querySelector(".card");
      if (card) {
        card.classList.remove("show");
        card.className = "card slide-right";
      }
    },
  );

  onScrollReveal(
    document.getElementById("otherSkills"),
    document.querySelector(".Head h2"),
    (section, delay) => {
      const boxes = section.querySelectorAll(".photo, .draw");
      const STEP = 200;
      boxes.forEach((box, i) => {
        setDelay(box, delay + i * STEP);
        box.classList.add("show");
      });
    },
    (section) => {
      section.querySelectorAll(".photo, .draw").forEach((box) => {
        box.classList.remove("show");
        box.classList.add("fade-up");
      });
    },
  );

  const footerSection = document.getElementById("connect");
  if (footerSection) {
    const connectContent = footerSection.querySelector(".connect");
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            connectContent && connectContent.classList.add("show");
          } else {
            connectContent && connectContent.classList.remove("show");
          }
        });
      },
      { threshold: 0.15 },
    );
    footerObserver.observe(footerSection);
  }
});
