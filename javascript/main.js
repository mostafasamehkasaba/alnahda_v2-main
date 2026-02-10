// ط§ظ„ظ„ط؛ط©
let currentLang = "en";
let translations = {};

fetch("translations.json")
  .then((response) => response.json())
  .then((data) => {
    translations = data;
    setLanguage(currentLang);
  });

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  setLanguage(currentLang);
}

function setLanguage(lang) {
  // Helper function: ظٹطھط£ظƒط¯ ط¥ظ† ط§ظ„ط¹ظ†طµط± ظ…ظˆط¬ظˆط¯ ظ‚ط¨ظ„ ظ…ط§ ظٹط؛ظٹط±ظ‡
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };

  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };

  // Navbar + Home
  setText("Alnahda", translations[lang].Alnahda);
  setText("Alnahdaa", translations[lang].Alnahdaa);
  setText("HOME", translations[lang].HOME);
  setText("ABOUT", translations[lang].ABOUT);
  setText("ABOUTS", translations[lang].ABOUTS);
  setText("SERVICES", translations[lang].SERVICES);
  setText("FINISHES", translations[lang].FINISHES);
  setText("EXPORTS", translations[lang].EXPORTS);
  setText("RAISED", translations[lang].RAISED);
  setText("WOODEN", translations[lang].WOODEN);
  setText("LABS", translations[lang].LABS);
  setText("GENREAL", translations[lang].GENREAL);
  setText("OTHER", translations[lang].OTHER);
  setText("Contact", translations[lang].Contact);
  setText("ContactUs", translations[lang].ContactUs);
  setText("WelcomeTo", translations[lang].WelcomeTo);
  setText("WelcomeDe", translations[lang].WelcomeDe);

  // About Section
  setText("AboutTitle", translations[lang].AboutTitle);
  setText("AboutDesc", translations[lang].AboutDesc);
  setText("AboutDetails", translations[lang].AboutDetails);
  setText("AboutContact", translations[lang].AboutContact);

  // Services Section
  setText("ServicesTitle", translations[lang].ServicesTitle);
  setText("ServiceFinishesTitle", translations[lang].ServiceFinishesTitle);
  setText("ServiceFinishesDesc", translations[lang].ServiceFinishesDesc);
  setText("ServiceFinishesLink", translations[lang].ServiceFinishesLink);
  setText("ServiceRaisedTitle", translations[lang].ServiceRaisedTitle);
  setText("ServiceRaisedDesc", translations[lang].ServiceRaisedDesc);
  setText("ServiceRaisedLink", translations[lang].ServiceRaisedLink);
  setText("ServiceWoodTitle", translations[lang].ServiceWoodTitle);
  setText("ServiceWoodDesc", translations[lang].ServiceWoodDesc);
  setText("ServiceWoodLink", translations[lang].ServiceWoodLink);
  setText("ServiceLabsTitle", translations[lang].ServiceLabsTitle);
  setText("ServiceLabsLink", translations[lang].ServiceLabsLink);
  setText("ServiceContractTitle", translations[lang].ServiceContractTitle);
  setText("ServiceContractLink", translations[lang].ServiceContractLink);
  setText("ServiceMarbleTitle", translations[lang].ServiceMarbleTitle);
  setText("ServiceMarbleLink", translations[lang].ServiceMarbleLink);

  // Feature Section
  setText("FeatureTitle", translations[lang].FeatureTitle);
  setText("FeatureDesc", translations[lang].FeatureDesc);
  setText("FeatureCreative", translations[lang].FeatureCreative);
  setText("FeatureDesigners", translations[lang].FeatureDesigners);
  setText("FeatureFree", translations[lang].FeatureFree);
  setText("FeatureConsultation", translations[lang].FeatureConsultation);
  setText("FeatureWork", translations[lang].FeatureWork);
  setText("FeatureOnTime", translations[lang].FeatureOnTime);
  setText("FeatureCustomer", translations[lang].FeatureCustomer);
  setText("FeatureSupport", translations[lang].FeatureSupport);

  // Projects Section
  setText("ProjectsTitle", translations[lang].ProjectsTitle);
  setText("Project1Category", translations[lang].Project1Category);
  setText("Project1Title", translations[lang].Project1Title);
  setText("Project2Category", translations[lang].Project2Category);
  setText("Project2Title", translations[lang].Project2Title);
  setText("Project3Category", translations[lang].Project3Category);
  setText("Project3Title", translations[lang].Project3Title);
  setText("Project1More", translations[lang].ProjectMore);
  setText("Project2More", translations[lang].ProjectMore);
  setText("Project3More", translations[lang].ProjectMore);

  // Team Section
  setText("TeamTitle", translations[lang].TeamTitle);
  setText("TeamMember1Name", translations[lang].TeamMember1Name);
  setText("TeamMember2Name", translations[lang].TeamMember2Name);
  setText("TeamMember3Name", translations[lang].TeamMember3Name);

  // Footer Section
  setText("FooterAddressTitle", translations[lang].FooterAddressTitle);
  setHTML(
    "FooterAddress",
    `<i class="fa fa-map-marker-alt me-3"></i> ${translations[lang].FooterAddress}`,
  );
  setHTML(
    "FooterPhone",
    `<i class="fa fa-phone-alt me-3"></i> ${translations[lang].FooterPhone}`,
  );
  setHTML(
    "FooterEmail",
    `<i class="fa fa-envelope me-3"></i> ${translations[lang].FooterEmail}`,
  );
  setText("FooterServicesTitle", translations[lang].FooterServicesTitle);
  setText("FooterFinishes", translations[lang].FooterFinishes);
  setText("FooterRaised", translations[lang].FooterRaised);
  setText("FooterWooden", translations[lang].FooterWooden);
  setText("FooterLabs", translations[lang].FooterLabs);
  setText("FooterContract", translations[lang].FooterContract);
  setText("FooterLinksTitle", translations[lang].FooterLinksTitle);
  setText("FooterHome", translations[lang].FooterHome);
  setText("FooterAbout", translations[lang].FooterAbout);
  setText("FooterContact", translations[lang].FooterContact);
  setText("FooterOther", translations[lang].FooterOther);
  setText("FooterCopy", translations[lang].FooterCopy);

  setText("PageAboutDE", translations[lang].PageAboutDE);
  setText("PageAboutH", translations[lang].PageAboutH);

  setText("Finishes", translations[lang].Finishes);
  setText("FinishesTitle", translations[lang].FinishesTitle);
  setText("PageFinishesTitle", translations[lang].PageFinishesTitle);
  setText("PageFinishesDesc", translations[lang].PageFinishesDesc);

  setText("Floors", translations[lang].Floors);
  setText("RaisedFloors", translations[lang].RaisedFloors);
  setText("FloorsTitle", translations[lang].FloorsTitle);

  setText("WoodenWork", translations[lang].WoodenWork);
  setText("WoodenWorkTitle", translations[lang].WoodenWorkTitle);
  setText("Woodendoors", translations[lang].Woodendoors);
  setText("Woodenbindings", translations[lang].Woodenbindings);

  setText("Lab", translations[lang].Lab);
  setText("Lab", translations[lang].Lab);
  setText("LabTitle", translations[lang].LabTitle);

  setText("General", translations[lang].General);
  setText("GeneralTitle", translations[lang].GeneralTitle);
  setText("Faculty", translations[lang].Faculty);
  setText("Outpatient", translations[lang].Outpatient);
  setText("location", translations[lang].location);
  setText("Aqwaz", translations[lang].Aqwaz);
  setText("Shawashna", translations[lang].Shawashna);
  setText("Kom", translations[lang].Kom);
  setText("Qababat", translations[lang].Qababat);
  setText("Qababat", translations[lang].Qababat);

  setText("ServicesT", translations[lang].ServicesT);
  setText("Marble", translations[lang].Marble);
  setText("MatatrosTitle", translations[lang].MatatrosTitle);
  setText("Lumi", translations[lang].Qababat);
  setText("LumiTitle", translations[lang].LumiTitle);
  setText("off", translations[lang].off);
  setText("on", translations[lang].on);
  setText("Other", translations[lang].Other);

  // ط²ط± ط§ظ„ظ„ط؛ط©
  setText("langBtn", translations[lang].button);

  // ط¶ط¨ط· ط§طھط¬ط§ظ‡ ط§ظ„طµظپط­ط©
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

// ط²ط±ط§ط± ط§ظ„طھط¨ط¯ظٹظ„
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("langBtn");
  if (btn) btn.addEventListener("click", toggleLanguage);

  const revealSelectors = [
    ".section-title",
    ".service-item",
    ".feature-box",
    ".portfolio-card",
    ".team-item",
    ".gallery-item",
    ".about-text",
    ".about-img",
    ".feature-img",
    ".content",
    ".contact-text",
  ];

  const revealTargets = document.querySelectorAll(revealSelectors.join(","));
  revealTargets.forEach((el, index) => {
    el.classList.add("reveal");
    if (index % 3 === 1) el.classList.add("delay-1");
    if (index % 3 === 2) el.classList.add("delay-2");
  });

  if (revealTargets.length) {
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            } else {
              entry.target.classList.remove("is-visible");
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
      );

      revealTargets.forEach((el) => observer.observe(el));
    } else {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    }
  }

  const heroContent = document.querySelector(".content");
  if (heroContent && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            heroContent.classList.add("hero-animate");
          } else {
            heroContent.classList.remove("hero-animate");
          }
        });
      },
      { threshold: 0.4 },
    );
    heroObserver.observe(heroContent);
  } else if (heroContent) {
    heroContent.classList.add("hero-animate");
  }
});

// navbar effects

const navEl = document.getElementById("navEl");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 100) {
    navEl.classList.remove("navbar-scrolled");
  }
});

const button = document.getElementById("toggler");
button.addEventListener("click", () => {
  if (button.getAttribute("aria-expanded") === "true") {
    navEl.classList.add("navbar-scrolled");
  } else if (window.scrollY < 80) {
    navEl.classList.remove("navbar-scrolled");
  }
});

// gotopbtn

const gotopbtn = document.getElementById("gotopbtn");
let showAfter = 400;

const updateShowAfter = () => {
  const hero = document.querySelector(".video-container");
  if (hero) {
    showAfter = Math.max(200, hero.offsetHeight - 50);
  }
};

if (gotopbtn) {
  updateShowAfter();
  gotopbtn.style.display = "none";

  window.addEventListener("load", updateShowAfter);
  window.addEventListener("resize", updateShowAfter);
  window.addEventListener("scroll", () => {
    if (window.scrollY > showAfter) {
      gotopbtn.style.display = "block";
    } else {
      gotopbtn.style.display = "none";
    }
  });
}

//img-gallery

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("gallery-item")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("gallery-modal"),
    );
    myModal.show();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1) Swiper init (ط¨ط¹ط¯ DOM)
  // =========================
  let swiper = null;

  if (document.querySelector(".mySwiper")) {
    swiper = new Swiper(".mySwiper", {
      loop: true,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        760: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
      },
      rtl: document.documentElement.dir === "rtl",
      observer: true,
      observeParents: true,
    });
  }

  // =========================
  // 2) Lazy images
  // =========================
  const lazyImages = document.querySelectorAll("img.lazy-img[data-src]");

  if (!lazyImages.length) return;

  const loadImg = (img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
    img.classList.add("loaded");

    // ظ…ظ‡ظ… ط¬ط¯ظ‹ط§ ظ„ظ„ط³ظ„ط§ظٹط¯ط± ط¨ط¹ط¯ طھط­ظ…ظٹظ„ ط§ظ„طµظˆط±ط©
    img.addEventListener(
      "load",
      () => {
        if (swiper) swiper.update();
      },
      { once: true }
    );
  };

  // fallback ظ„ظˆ ط§ظ„ظ…طھطµظپط­ ظ…ط´ ط¨ظٹط¯ط¹ظ… IntersectionObserver
  if (!("IntersectionObserver" in window)) {
    lazyImages.forEach(loadImg);
    return;
  }

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadImg(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "200px 0px",
      threshold: 0.01,
    }
  );

  lazyImages.forEach((img) => imageObserver.observe(img));
});


// Auto-play videos when they enter the viewport
document.addEventListener("DOMContentLoaded", () => {
  const viewVideos = document.querySelectorAll("video[data-autoplay='in-view']");
  if (!viewVideos.length) return;

  if ("IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const vid = entry.target;
          if (entry.isIntersecting) {
            const playPromise = vid.play();
            if (playPromise && typeof playPromise.catch === "function") {
              playPromise.catch(() => {});
            }
          } else {
            vid.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    viewVideos.forEach((vid) => videoObserver.observe(vid));
  } else {
    viewVideos.forEach((vid) => vid.play());
  }
});
