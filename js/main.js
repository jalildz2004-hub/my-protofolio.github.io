/* ==========================================================================
   Abdel Djalil Aberkane — Portfolio
   Interactions, theme, bilingual FR / EN content and small enhancements.
   ========================================================================== */

(function () {
  "use strict";

  var html = document.documentElement;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  var translations = {
    en: {
      "a11y.skip": "Skip to content",
      "a11y.mainnav": "Main navigation",
      "a11y.mobilenav": "Mobile navigation",
      "a11y.footernav": "Footer navigation",
      "a11y.lang": "Switch to French",
      "a11y.theme": "Toggle theme",
      "a11y.top": "Back to top",

      "nav.about": "About",
      "nav.skills": "Skills",
      "nav.experience": "Journey",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.cta": "Let's talk",

      "hero.status": "Available immediately · Remote & relocation",
      "hero.role": "Full Stack Developer",
      "hero.lead": "I design and build complete web applications — from polished interfaces and robust APIs to well-modeled databases.",
      "hero.cta.projects": "View my projects",
      "hero.cta.cv": "Download my CV (FR)",
      "hero.meta.location": "El Eulma, Sétif — Algeria",

      "about.kicker": "About",
      "about.title": "From concept to deployment.",
      "about.p1": "Full Stack Developer based in El Eulma (Sétif), holding a <strong>TS in Computer Science (Bac+2)</strong>. I specialize in web application development and database management — from UML modeling all the way to production.",
      "about.p2": "During my internship at SAIEG, I contributed to the development and maintenance of internal software, working closely with the technical team on requirements analysis, database design and feature implementation. I also led a complete graduation project for OPGI Sétif, from modeling to automatic receipt generation.",
      "about.p3": "Open to international opportunities, remote work and relocation, I'm looking for a team where I can keep learning and ship useful products.",
      "about.quote": "A clear interface, reliable data, readable code. That's my definition of a good product.",
      "about.card.status": "Available immediately",
      "about.card.cv": "Download CV (FR)",
      "about.fact.location.label": "Location",
      "about.fact.location.value": "El Eulma, Sétif · Algeria",
      "about.fact.education.label": "Education",
      "about.fact.education.value": "Computer Science TS (Bac+2)",
      "about.fact.focus.label": "Focus",
      "about.fact.focus.value": "Full stack web development",
      "about.fact.looking.label": "Looking for",
      "about.fact.looking.value": "Full-time · Remote · Relocation",
      "about.fact.languages.label": "Languages",
      "about.fact.languages.value": "Arabic · French · English",

      "skills.kicker": "Skills",
      "skills.title": "A complete stack, front to back.",
      "skills.frontend": "Frontend",
      "skills.frontend.desc": "Reactive, accessible interfaces designed around the user.",
      "skills.backend": "Backend",
      "skills.backend.desc": "Solid APIs, clear business logic and secure authentication.",
      "skills.database": "Databases",
      "skills.database.desc": "Modeling, design and optimization of relational databases.",
      "skills.tools": "Tools & systems",
      "skills.tools.desc": "A solid environment for coding, version control and collaboration.",
      "skills.languages": "Languages",
      "skills.languages.desc": "Communicating with teams and clients from different cultures.",
      "lang.ar": "Arabic",
      "lang.ar.level": "Native language",
      "lang.fr": "French",
      "lang.fr.level": "Intermediate · improving",
      "lang.en": "English",
      "lang.en.level": "Professional",

      "exp.kicker": "Journey",
      "exp.title": "Education, field experience, growth.",
      "exp.job.role": "IT Internship",
      "exp.job.company": "SAIEG — Algerian Society of Electrical and Gas Industries · El Eulma",
      "exp.job.date": "Oct. 2023 — Apr. 2026",
      "exp.job.type": "Internship",
      "exp.job.b1": "Contributed to the development and maintenance of internal software solutions.",
      "exp.job.b2": "Worked with Python, JavaScript/TypeScript, PHP, SQL and PostgreSQL depending on technical needs.",
      "exp.job.b3": "Contributed to database design and management.",
      "exp.job.b4": "Collaborated with the technical team: requirements analysis and feature implementation.",
      "exp.edu.role": "Specialized Technician (TS) in Computer Science (Bac+2)",
      "exp.edu.school": "National Specialized Institute for Vocational Training (INSFP) · Aïn Tbinet, Sétif",
      "exp.edu.date": "Oct. 2023 — Apr. 2026",
      "exp.edu.type": "Education",
      "exp.edu.b1": "Specialization in web development and database management.",
      "exp.edu.b2": "Graduation project: contract and complaint management platform for OPGI Sétif.",
      "exp.cta": "Download my full CV (FR)",
      "exp.note": "Open to remote work and relocation.",

      "projects.kicker": "Projects",
      "projects.title": "Ideas turned into products.",
      "proj1.meta": "Graduation project · OPGI Sétif",
      "proj1.type": "Team project",
      "proj1.title": "Contract & complaint management platform",
      "proj1.desc": "A complete web application for managing contracts, complaints and payments, with automatic receipt generation and user role management.",
      "proj1.b1": "Complete UML modeling: use case, sequence and class diagrams.",
      "proj1.b2": "Secure authentication and role management: Admin, Agent, Cashier.",
      "proj1.b3": "Relational MySQL database design and management through phpMyAdmin.",
      "proj1.b4": "Contract renewals, payment tracking and automatically generated receipts.",
      "proj1.footer": "Academic project · 2026",
      "proj2.meta": "Personal project · Full Stack",
      "proj2.type": "Solo",
      "proj2.title": "Full stack web application with REST API",
      "proj2.desc": "A modern application built with a React / Next.js frontend and a Laravel REST API, backed by a PostgreSQL database.",
      "proj2.b1": "Modern architecture and REST API that cleanly separate frontend and backend.",
      "proj2.b2": "PostgreSQL database design and full React / Next.js frontend integration.",
      "proj2.b3": "TypeScript-typed components and responsive interfaces.",
      "proj2.footer": "Personal project",
      "portfolio.title": "This portfolio",
      "portfolio.desc": "Designed and built from scratch, without a framework: HTML, CSS and vanilla JavaScript, fully responsive and bilingual FR / EN.",
      "portfolio.here": "You are here",

      "contact.kicker": "Contact",
      "contact.title": "Let's build something together.",
      "contact.lead": "A mission, a role, a project? I reply quickly and I'm available immediately for a full-time position, internship or freelance collaboration — remote or after relocation.",
      "contact.cta": "Send an email",
      "contact.copy": "Copy email",
      "contact.copied": "Email copied!",
      "contact.availability": "Available immediately · Remote & relocation",
      "contact.email.label": "Email",
      "contact.phone.label": "Phone",
      "contact.github.label": "GitHub",
      "contact.location.label": "Location",
      "contact.location.value": "El Eulma, Sétif · Algeria",

      "footer.tagline": "Full Stack Developer · El Eulma",
      "footer.rights": "All rights reserved.",
      "footer.built": "Designed & built with HTML, CSS and JavaScript."
    }
  };

  var textOriginals = new Map();
  var htmlOriginals = new Map();
  var ariaOriginals = new Map();

  var descriptionMeta = document.querySelector('meta[name="description"]');
  var ogTitleMeta = document.querySelector('meta[property="og:title"]');
  var ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  var ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
  var twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
  var twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
  var themeColorMeta = document.getElementById("meta-theme");

  var originalMeta = {
    title: document.title,
    description: descriptionMeta ? descriptionMeta.getAttribute("content") : "",
    ogTitle: ogTitleMeta ? ogTitleMeta.getAttribute("content") : "",
    ogDescription: ogDescriptionMeta ? ogDescriptionMeta.getAttribute("content") : "",
    ogLocale: ogLocaleMeta ? ogLocaleMeta.getAttribute("content") : "fr_FR",
    twitterTitle: twitterTitleMeta ? twitterTitleMeta.getAttribute("content") : "",
    twitterDescription: twitterDescriptionMeta ? twitterDescriptionMeta.getAttribute("content") : ""
  };

  var englishMeta = {
    title: "Abdel Djalil Aberkane — Full Stack Developer",
    description: "Portfolio of Abdel Djalil Aberkane, a Full Stack Developer specializing in Python, PHP/Laravel and TypeScript/React. Based in El Eulma, Sétif, open to remote work and relocation.",
    ogTitle: "Abdel Djalil Aberkane — Full Stack Developer",
    ogDescription: "Full Stack Developer: Python, PHP/Laravel, TypeScript/React, PostgreSQL. Available immediately — remote & relocation.",
    ogLocale: "en_US",
    twitterTitle: "Abdel Djalil Aberkane — Full Stack Developer",
    twitterDescription: "Full Stack Developer: Python, PHP/Laravel, TypeScript/React, PostgreSQL. Available immediately."
  };

  var emailAddress = "jailidz2004@gmail.com";
  var emailSubjects = {
    fr: "Opportunité — Abdel Djalil Aberkane",
    en: "Opportunity — Abdel Djalil Aberkane"
  };

  var menuLabels = {
    fr: { open: "Ouvrir le menu", close: "Fermer le menu" },
    en: { open: "Open menu", close: "Close menu" }
  };

  var copyMessages = {
    fr: {
      success: "Email copié !",
      failure: "Copie impossible. Email : " + emailAddress
    },
    en: {
      success: "Email copied!",
      failure: "Copy failed. Email: " + emailAddress
    }
  };

  var currentLang = html.lang === "en" ? "en" : "fr";

  var menuToggle = document.getElementById("menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  var siteHeader = document.getElementById("site-header");
  var langToggle = document.getElementById("lang-toggle");
  var langLabel = document.getElementById("lang-label");
  var themeToggle = document.getElementById("theme-toggle");
  var copyEmailButton = document.getElementById("copy-email");
  var contactEmailCta = document.querySelector('.contact-actions a[href^="mailto:"]');
  var backTop = document.getElementById("back-top");
  var progressBar = document.getElementById("scroll-progress-bar");
  var toast = document.getElementById("toast");
  var toastText = document.getElementById("toast-text");
  var year = document.getElementById("year");
  var heroVisual = document.querySelector(".hero-visual");
  var codeCard = document.getElementById("code-card");
  var menuOpen = false;
  var toastTimer;

  /* Capture the French source content before applying any translation. */
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    textOriginals.set(element, element.textContent);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
    htmlOriginals.set(element, element.innerHTML);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
    ariaOriginals.set(element, element.getAttribute("aria-label") || "");
  });

  function updateDocumentMeta(lang) {
    var meta = lang === "en" ? englishMeta : originalMeta;

    document.title = meta.title;

    if (descriptionMeta) descriptionMeta.setAttribute("content", meta.description);
    if (ogTitleMeta) ogTitleMeta.setAttribute("content", meta.ogTitle);
    if (ogDescriptionMeta) ogDescriptionMeta.setAttribute("content", meta.ogDescription);
    if (ogLocaleMeta) ogLocaleMeta.setAttribute("content", meta.ogLocale);
    if (twitterTitleMeta) twitterTitleMeta.setAttribute("content", meta.twitterTitle);
    if (twitterDescriptionMeta) twitterDescriptionMeta.setAttribute("content", meta.twitterDescription);
  }

  function updateLangToggle(lang) {
    if (!langToggle || !langLabel) return;

    langLabel.textContent = lang === "fr" ? "EN" : "FR";
    langToggle.setAttribute(
      "aria-label",
      lang === "fr" ? "Passer en anglais" : "Switch to French"
    );
    langToggle.setAttribute("title", lang === "fr" ? "English version" : "Version française");
  }

  function updateMenuLabel() {
    if (!menuToggle) return;

    menuToggle.setAttribute(
      "aria-label",
      menuOpen ? menuLabels[currentLang].close : menuLabels[currentLang].open
    );
  }

  function applyLanguage(lang, persist) {
    var dictionary = lang === "en" ? translations.en : null;
    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (element) {
      var key = element.getAttribute("data-i18n");
      var original = textOriginals.get(element);
      element.textContent =
        dictionary && dictionary[key] != null ? dictionary[key] : original;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-html");
      var original = htmlOriginals.get(element);
      element.innerHTML =
        dictionary && dictionary[key] != null ? dictionary[key] : original;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (element) {
      var key = element.getAttribute("data-i18n-aria");
      var original = ariaOriginals.get(element);
      element.setAttribute(
        "aria-label",
        dictionary && dictionary[key] != null ? dictionary[key] : original
      );
    });

    html.lang = lang;
    updateDocumentMeta(lang);
    updateLangToggle(lang);
    updateMenuLabel();
    updateEmailSubject();

    if (persist) {
      try {
        localStorage.setItem("portfolio-lang", lang);
      } catch (error) {}
    }
  }

  function updateEmailSubject() {
    if (!contactEmailCta) return;

    contactEmailCta.setAttribute(
      "href",
      "mailto:" + emailAddress + "?subject=" + encodeURIComponent(emailSubjects[currentLang])
    );
  }

  /* Theme ------------------------------------------------------------------ */

  function applyTheme(theme, persist) {
    html.dataset.theme = theme;

    if (themeColorMeta) {
      themeColorMeta.setAttribute("content", theme === "light" ? "#f6f7f2" : "#080a0d");
    }

    if (persist) {
      try {
        localStorage.setItem("portfolio-theme", theme);
      } catch (error) {}
    }
  }

  var initialTheme = html.dataset.theme === "light" ? "light" : "dark";
  applyTheme(initialTheme, false);

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      applyTheme(html.dataset.theme === "light" ? "dark" : "light", true);
    });
  }

  /* Language --------------------------------------------------------------- */

  if (langToggle) {
    langToggle.addEventListener("click", function () {
      applyLanguage(currentLang === "fr" ? "en" : "fr", true);
    });
  }

  applyLanguage(currentLang, false);

  /* Mobile menu ------------------------------------------------------------ */

  function setMenu(open) {
    if (!menuToggle || !mobileMenu) return;

    menuOpen = open;
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    updateMenuLabel();
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      setMenu(!menuOpen);
    });
  }

  if (mobileMenu) {
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuOpen) {
      setMenu(false);
      menuToggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (menuOpen && siteHeader && !siteHeader.contains(event.target)) {
      setMenu(false);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 980 && menuOpen) {
      setMenu(false);
    }
  });

  /* Header, scroll progress and back to top -------------------------------- */

  function onScroll() {
    var scrollTop = window.scrollY || window.pageYOffset;
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;

    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", scrollTop > 8);
    }

    if (backTop) {
      backTop.classList.toggle("is-visible", scrollTop > 700);
    }

    if (progressBar) {
      progressBar.style.width = Math.min(progress, 100) + "%";
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    });
  }

  /* Scroll spy ------------------------------------------------------------- */

  var navLinks = document.querySelectorAll(".nav-link");
  var sections = document.querySelectorAll("main section[id]");

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          navLinks.forEach(function (link) {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }

  /* Reveal on scroll ------------------------------------------------------- */

  var revealElements = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    revealElements.forEach(function (element) {
      element.classList.add("in-view");
    });
  } else {
    var revealer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach(function (element) {
      revealer.observe(element);
    });
  }

  /* Card spotlight --------------------------------------------------------- */

  if (finePointer) {
    document.querySelectorAll(".spotlight").forEach(function (card) {
      card.addEventListener("pointermove", function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", event.clientX - rect.left + "px");
        card.style.setProperty("--my", event.clientY - rect.top + "px");
      });
    });
  }

  /* Subtle tilt on the hero code window ------------------------------------ */

  if (finePointer && !prefersReducedMotion && heroVisual && codeCard) {
    heroVisual.addEventListener("pointermove", function (event) {
      if (window.innerWidth <= 980) return;

      var rect = heroVisual.getBoundingClientRect();
      var x = (event.clientX - rect.left) / rect.width - 0.5;
      var y = (event.clientY - rect.top) / rect.height - 0.5;

      codeCard.style.transform =
        "rotateX(" + (-y * 5).toFixed(2) + "deg) rotateY(" + (x * 6).toFixed(2) + "deg)";
    });

    heroVisual.addEventListener("pointerleave", function () {
      codeCard.style.transform = "";
    });
  }

  /* Copy email ------------------------------------------------------------- */

  function showToast(message) {
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add("is-visible");

    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2600);
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(
        function () {
          return true;
        },
        function () {
          return legacyCopy(text);
        }
      );
    }

    return Promise.resolve(legacyCopy(text));
  }

  function legacyCopy(text) {
    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();

    var success = false;
    try {
      success = document.execCommand("copy");
    } catch (error) {
      success = false;
    }

    textarea.remove();
    return success;
  }

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", function () {
      copyToClipboard(emailAddress).then(function (success) {
        showToast(
          success
            ? copyMessages[currentLang].success
            : copyMessages[currentLang].failure
        );
      });
    });
  }

  /* CV download fallback --------------------------------------------------- */

  var cvDownloadLinks = document.querySelectorAll('a[download][href$=".pdf"]');
  var nativeDownload = window.location.protocol === "http:" || window.location.protocol === "https:";
  var cvBase64Promise = null;

  function loadCvBase64(link) {
    if (!cvBase64Promise) {
      cvBase64Promise = new Promise(function (resolve, reject) {
        if (window.PORTFOLIO_CV_BASE64) {
          resolve(window.PORTFOLIO_CV_BASE64);
          return;
        }

        var script = document.createElement("script");
        script.src = link.href.replace(/[^/]+$/, "cv-pdf-base64.js");
        script.onload = function () {
          if (window.PORTFOLIO_CV_BASE64) {
            resolve(window.PORTFOLIO_CV_BASE64);
          } else {
            reject(new Error("CV data missing"));
          }
        };
        script.onerror = function () {
          reject(new Error("CV data failed to load"));
        };
        document.head.appendChild(script);
      });
    }

    return cvBase64Promise;
  }

  function downloadCv(link) {
    loadCvBase64(link)
      .then(function (base64) {
        var binary = window.atob(base64);
        var bytes = new Uint8Array(binary.length);

        for (var i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }

        var blob = new Blob([bytes], { type: "application/pdf" });
        var url = URL.createObjectURL(blob);
        var anchor = document.createElement("a");

        anchor.href = url;
        anchor.download = link.getAttribute("download") || "Abdel_Djalil_Aberkane_CV_FR.pdf";
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();
        anchor.remove();

        window.setTimeout(function () {
          URL.revokeObjectURL(url);
        }, 10000);
      })
      .catch(function () {
        window.location.href = link.href;
      });
  }

  if (!nativeDownload) {
    cvDownloadLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        downloadCv(link);
      });
    });
  }

  /* Footer year ------------------------------------------------------------ */

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  window.__portfolioReady = true;
})();
